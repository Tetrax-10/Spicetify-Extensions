// @ts-chec

// NAME: Sort By Play Count
// AUTHOR: Tetrax-10
// DESCRIPTION: Sorts Songs by Play Count, Popularity, Global Scrobbles, Personal Scrobbles Using Spotify and Last.FM
// Version: 2.4

/// <reference path="../globals.d.ts" />

let sortByPlayCount = 0;
(async function sortByPlay() {
    if (!(Spicetify.Platform && Spicetify.React) && sortByPlayCount < 200) {
        setTimeout(sortByPlay, 300);
        sortByPlayCount++;
        return;
    }
    await initSortByPlay();
})();

async function initSortByPlay() {
    let { Type } = Spicetify.URI;
    let LFMApiKey = "44654ea047786d90338c17331a5f5d95";
    let unsupportedChar = /[#&+%\\]/g;

    const { React } = Spicetify;
    const { useState } = React;

    async function getLocalStorageDataFromKey(key) {
        return Spicetify.LocalStorage.get(key);
    }

    async function setLocalStorageDataWithKey(key, value) {
        Spicetify.LocalStorage.set(key, value);
    }

    async function validateLocalStorage() {
        if (!CONFIG.lastFmUserName) {
            setLastFmUsername();
            return false;
        }
        return true;
    }

    async function getConfig() {
        try {
            const parsed = JSON.parse(await getLocalStorageDataFromKey("sortByPlayCount:settings"));
            if (parsed && typeof parsed === "object") {
                return parsed;
            }
            throw "";
        } catch {
            await setLocalStorageDataWithKey("sortByPlayCount:settings", `{}`);
            return { myScrobbles: true, lastfmPlayCount: false, ascending: false, artistMode: "all", removeDuplicate: true, artistNameMust: false, lastFmUserName: "" };
        }
    }

    const CONFIG = await getConfig();
    await saveConfig();

    async function saveConfig() {
        await setLocalStorageDataWithKey("sortByPlayCount:settings", JSON.stringify(CONFIG));
    }

    function setLastFmUsername() {
        let addLoginContainer = document.createElement("div");
        let loginContainer = document.createElement("div");
        loginContainer.setAttribute("id", "login-global-div");
        loginContainer.setAttribute("style", "padding-bottom: 10%");
        let loginText = document.createElement("div");
        loginText.innerText = `Enter your Last.FM Username :`;
        let infoText = document.createElement("div");
        infoText.innerText = `With Last.FM Integration you can now sort your top songs (your personal playcount) with help of this extension. This extension can sort playlists, albums, even artist page with LastFM.`;
        let guideText = document.createElement("a");
        guideText.innerText = `This Guide will help you to link spotify and LastFM`;
        let nameInput = document.createElement("input");
        nameInput.style.cssText = "display:flex;flex-direction: column;padding:15px; border-radius:15px; border:0; box-shadow:4px 4px 10px rgba(0,0,0,0.06);";
        nameInput.placeholder = CONFIG.lastFmUserName ? CONFIG.lastFmUserName : "Last.FM Username";
        nameInput.required = true;
        loginContainer.appendChild(nameInput);
        let submitBtn = document.createElement("button");
        submitBtn.innerText = "Save";
        submitBtn.setAttribute("style", "background-color: var(--spice-button);border-radius: 8px;border-style: none;box-sizing: border-box;color: var(--spice-text);cursor: pointer;display: inline-block;font-size: 14px;font-weight: 500;height: 40px;line-height: 20px;list-style: none;margin: 10px;outline: none;padding: 5px 10px;position: relative;text-align: center;text-decoration: none;vertical-align: baseline;touch-action: manipulation;");

        submitBtn.addEventListener(
            "click",
            async function (event) {
                event.preventDefault();
                let name = nameInput.value.replace(/\n/g, "");

                if (name === "" || !name) {
                    alert("The UserName can't be blank");
                    return;
                }

                CONFIG.lastFmUserName = name;
                await saveConfig();
                Spicetify.PopupModal.hide();
            },
            false
        );

        infoText.style.cssText = "padding-bottom: 5%;";
        loginContainer.appendChild(infoText);

        guideText.href = "https://github.com/Tetrax-10/Spicetify-Extensions/tree/master/Sort-by-Play-count#need-to-connect-spotify-and-lastfm-for-personal-scrobbles-to-work-optional-step";
        loginContainer.appendChild(guideText);

        loginText.style.cssText = "padding-top: 5%;padding-bottom: 5%;";
        loginContainer.appendChild(loginText);

        addLoginContainer.append(infoText, guideText, loginText, loginContainer, submitBtn);

        Spicetify.PopupModal.display({
            title: "Connect Last.FM",
            content: addLoginContainer,
        });
    }

    function settingsPage() {
        const style = React.createElement(
            "style",
            null,
            `.popup-row::after {
                    content: "";
                    display: table;
                    clear: both;
                }
                .popup-row .col {
                    display: flex;
                    padding: 10px 0;
                    align-items: center;
                }
                .popup-row .col.description {
                    float: left;
                    padding-right: 15px;
                }
                .popup-row .col.action {
                    float: right;
                    text-align: right;
                }
                .popup-row .div-title {
                    color: var(--spice-text);
                }                
                .popup-row .divider {
                    height: 2px;
                    border-width: 0;
                    background-color: var(--spice-button-disabled);
                }
                .popup-row .space {
                    margin-bottom: 20px;
                    visibility: hidden;
                }
                button.checkbox {
                    align-items: center;
                    border: 0px;
                    border-radius: 50%;
                    background-color: rgba(var(--spice-rgb-shadow), 0.7);
                    color: var(--spice-text);
                    cursor: pointer;
                    display: flex;
                    margin-inline-start: 12px;
                    padding: 8px;
                }
                button.checkbox.disabled {
                    color: rgba(var(--spice-rgb-text), 0.3);
                }
                select {
                    color: var(--spice-text);
                    background: rgba(var(--spice-rgb-shadow), 0.7);
                    border: 0;
                    height: 32px;
                }
                ::-webkit-scrollbar {
                    width: 8px;
                }
                .login-button {
                    background-color: var(--spice-button);
                    border-radius: 8px;
                    border-style: none;
                    box-sizing: border-box;
                    color: var(--spice-text);
                    cursor: pointer;
                    display: inline-block;
                    font-size: 14px;
                    font-weight: 500;
                    height: 40px;
                    line-height: 20px;
                    list-style: none;
                    margin: 10px;
                    outline: none;
                    padding: 5px 10px;
                    position: relative;
                    text-align: center;
                    text-decoration: none;
                    vertical-align: baseline;
                    touch-action: manipulation;
                }`
        );

        const buttonStyle = React.createElement(
            "style",
            { className: "popup-container" },
            `
            .login-button {
                background-color: var(--spice-button);
                border-radius: 8px;
                border-style: none;
                color: var(--spice-text);
                cursor: pointer;
                font-size: 14px;
                height: 40px;
                margin: 10px;
                padding: 5px 10px;
                text-align: center;
            }`
        );

        function DisplayIcon({ icon, size }) {
            return React.createElement("svg", {
                width: size,
                height: size,
                viewBox: "0 0 16 16",
                fill: "currentColor",
                dangerouslySetInnerHTML: {
                    __html: icon,
                },
            });
        }

        function checkBoxItem({ name, field, onclickFun }) {
            let [value, setValue] = useState(CONFIG[field]);
            return React.createElement(
                "div",
                { className: "popup-row" },
                React.createElement("label", { className: "col description" }, name),
                React.createElement(
                    "div",
                    { className: "col action" },
                    React.createElement(
                        "button",
                        {
                            className: "checkbox" + (value ? "" : " disabled"),
                            onClick: async () => {
                                let state = !value;
                                CONFIG[field] = state;
                                setValue(state);
                                await saveConfig();
                                onclickFun();
                            },
                        },
                        React.createElement(DisplayIcon, { icon: Spicetify.SVGIcons.check, size: 16 })
                    )
                )
            );
        }

        function dropDownItem({ name, field, options, onclickFun }) {
            const [value, setValue] = useState(CONFIG[field]);
            return React.createElement(
                "div",
                { className: "popup-row" },
                React.createElement("label", { className: "col description" }, name),
                React.createElement(
                    "div",
                    { className: "col action" },
                    React.createElement(
                        "select",
                        {
                            value,
                            onChange: async (e) => {
                                setValue(e.target.value);
                                CONFIG[field] = e.target.value;
                                await saveConfig();
                                onclickFun();
                            },
                        },
                        Object.keys(options).map((item) =>
                            React.createElement(
                                "option",
                                {
                                    value: item,
                                },
                                options[item]
                            )
                        )
                    )
                )
            );
        }

        function ButtonItem({ name, onclickFun }) {
            return React.createElement(
                "button",
                {
                    className: "login-button",
                    onClick: async () => {
                        onclickFun();
                    },
                },
                name
            );
        }

        function restartPopup() {
            let DOMcontent = React.createElement(
                "div",
                null,
                buttonStyle,
                React.createElement(ButtonItem, {
                    name: "Restart Now",
                    onclickFun: async () => {
                        await Spicetify.CosmosAsync.post("sp://desktop/v1/restart");
                    },
                }),
                React.createElement(ButtonItem, {
                    name: "Restart Later",
                    onclickFun: async () => {
                        Spicetify.PopupModal.hide();
                        setTimeout(settingsPage, 300);
                    },
                })
            );

            Spicetify.PopupModal.display({
                title: "Restart Spotify",
                content: DOMcontent,
            });
        }

        let settingsDOMContent = React.createElement(
            "div",
            null,
            style,
            React.createElement("div", { className: "popup-row" }, React.createElement("h3", { className: "div-title" }, "Sort Options")),
            React.createElement("div", { className: "popup-row" }, React.createElement("hr", { className: "divider" }, null)),
            React.createElement(checkBoxItem, {
                name: "Last.FM My Scrobbles",
                field: "myScrobbles",
                onclickFun: async () => {
                    // console.log(CONFIG.myScrobbles);
                },
            }),
            React.createElement(checkBoxItem, {
                name: "Last.FM Play Count",
                field: "lastfmPlayCount",
                onclickFun: async () => {
                    // console.log(CONFIG.lastfmPlayCount);
                },
            }),
            React.createElement(checkBoxItem, {
                name: "Ascending Order",
                field: "ascending",
                onclickFun: async () => {
                    // console.log(CONFIG.ascending);
                },
            }),
            React.createElement("div", { className: "popup-row" }, React.createElement("hr", { className: "space" }, null)),
            React.createElement("div", { className: "popup-row" }, React.createElement("h3", { className: "div-title" }, "Artist Sort")),
            React.createElement("div", { className: "popup-row" }, React.createElement("hr", { className: "divider" }, null)),
            React.createElement(dropDownItem, {
                name: "What to Play in Artist Page",
                field: "artistMode",
                options: {
                    all: "All",
                    album: "Albums",
                    single: "Singles & EP",
                    likedSongArtist: "Liked Songs of Artist",
                    topTen: "Top 10 Songs",
                },
                onclickFun: async () => {
                    // console.log(CONFIG.artistMode);
                },
            }),
            React.createElement(checkBoxItem, {
                name: "Remove Duplicate Songs",
                field: "removeDuplicate",
                onclickFun: async () => {
                    // console.log(CONFIG.removeDuplicate);
                },
            }),
            React.createElement(checkBoxItem, {
                name: "Artist Name Must in Tracks",
                field: "artistNameMust",
                onclickFun: async () => {
                    // console.log(CONFIG.artistNameMust);
                },
            }),
            React.createElement("div", { className: "popup-row" }, React.createElement("hr", { className: "space" }, null)),
            React.createElement(ButtonItem, {
                name: "Login with Last.FM",
                onclickFun: () => {
                    Spicetify.PopupModal.hide();
                    setTimeout(setLastFmUsername, 300);
                },
            }),
            React.createElement(ButtonItem, {
                name: "Like on GitHub 👍",
                onclickFun: () => {
                    window.open("https://github.com/Tetrax-10/Spicetify-Extensions");
                },
            })
        );

        Spicetify.PopupModal.display({
            title: "Sort By Play Count",
            content: settingsDOMContent,
        });
    }

    new Spicetify.Menu.Item("Sort By Play Count", false, settingsPage).register();

    // Play Count
    function shouldAddSpotifyPlayCount(uri) {
        let uriObj = Spicetify.URI.fromString(uri[0]);
        switch (uriObj.type) {
            case Type.PLAYLIST:
            case Type.PLAYLIST_V2:
            case Type.ALBUM:
            case Type.ARTIST:
                return true;
        }
        return false;
    }

    // Popularity
    function shouldAddSpotifyPopularity(uri) {
        let uriObj = Spicetify.URI.fromString(uri[0]);
        if (CONFIG.artistMode == "topTen" && uriObj.type == Type.ARTIST) {
            return false;
        }
        switch (uriObj.type) {
            case Type.PLAYLIST:
            case Type.PLAYLIST_V2:
            case Type.ALBUM:
            case Type.ARTIST:
                return true;
        }
        return false;
    }

    // Release date
    function shouldAddSpotifyReleaseDate(uri) {
        let uriObj = Spicetify.URI.fromString(uri[0]);
        switch (uriObj.type) {
            case Type.PLAYLIST:
            case Type.PLAYLIST_V2:
            case Type.ARTIST:
                return true;
        }
        return false;
    }

    // Scrobbles
    function shouldAddLastFmScrobbles(uri) {
        let uriObj = Spicetify.URI.fromString(uri[0]);
        switch (uriObj.type) {
            case Type.PLAYLIST:
            case Type.PLAYLIST_V2:
            case Type.ALBUM:
                return true;
        }
        return false;
    }

    // My Scrobbles
    function shouldAddLastFmMyScrobbles(uri) {
        let uriObj = Spicetify.URI.fromString(uri[0]);
        if (!CONFIG.myScrobbles) {
            return false;
        }
        if (CONFIG.artistMode == "likedSongArtist" && uriObj.type == Type.ARTIST) {
            return true;
        }
        switch (uriObj.type) {
            case Type.PLAYLIST:
            case Type.PLAYLIST_V2:
            case Type.ALBUM:
                return true;
        }
        return false;
    }

    // Last.FM Play Count
    function shouldAddLastFmPlayCount(uri) {
        let uriObj = Spicetify.URI.fromString(uri[0]);
        if (!CONFIG.lastfmPlayCount) {
            return false;
        }
        switch (uriObj.type) {
            case Type.PLAYLIST:
            case Type.PLAYLIST_V2:
            case Type.ALBUM:
                return true;
        }
        return false;
    }

    // Right Click ContextMenu
    function shouldAddContextMenu(uri) {
        let uriObj = Spicetify.URI.fromString(uri[0]);
        switch (uriObj.type) {
            case Type.PLAYLIST:
            case Type.PLAYLIST_V2:
            case Type.ALBUM:
            case Type.ARTIST:
                return true;
        }
        return false;
    }

    let playCountItemSpotify = new Spicetify.ContextMenu.Item(
        "Play Count",
        async (rawUri) => {
            let uriInfo = rawUri[0].split(":");
            let type = uriInfo[1];
            let uri = uriInfo[2];
            await fetchAndPlay(type, uri, "playCount", "spotify");
        },
        shouldAddSpotifyPlayCount,
        "play"
    );

    let popularityItemSpotify = new Spicetify.ContextMenu.Item(
        "Popularity",
        async (rawUri) => {
            let uriInfo = rawUri[0].split(":");
            let type = uriInfo[1];
            let uri = uriInfo[2];
            await fetchAndPlay(type, uri, "popularity", "spotify");
        },
        shouldAddSpotifyPopularity,
        "heart"
    );

    let releaseDateItemSpotify = new Spicetify.ContextMenu.Item(
        "Release Date",
        async (rawUri) => {
            let uriInfo = rawUri[0].split(":");
            let type = uriInfo[1];
            let uri = uriInfo[2];
            await fetchAndPlay(type, uri, "releaseDate", "spotify");
        },
        shouldAddSpotifyReleaseDate,
        "list-view"
    );

    let scrobblesItemLastFM = new Spicetify.ContextMenu.Item(
        "Scrobbles",
        async (rawUri) => {
            let uriInfo = rawUri[0].split(":");
            let type = uriInfo[1];
            let uri = uriInfo[2];
            await fetchAndPlay(type, uri, "scrobbles", "lastfm");
        },
        shouldAddLastFmScrobbles,
        "volume"
    );

    let personalScrobblesItemLastFM = new Spicetify.ContextMenu.Item(
        "My Scrobbles",
        async (rawUri) => {
            if (!CONFIG.lastFmUserName) {
                await validateLocalStorage();
                return;
            }

            let uriInfo = rawUri[0].split(":");
            let type = uriInfo[1];
            let uri = uriInfo[2];
            await fetchAndPlay(type, uri, "personalScrobbles", "lastfm");
        },
        shouldAddLastFmMyScrobbles,
        "artist"
    );

    let playCountItemLastFM = new Spicetify.ContextMenu.Item(
        "Last.FM Play Count",
        async (rawUri) => {
            let uriInfo = rawUri[0].split(":");
            let type = uriInfo[1];
            let uri = uriInfo[2];
            await fetchAndPlay(type, uri, "playCount", "lastfm");
        },
        shouldAddLastFmPlayCount,
        "subtitles"
    );

    new Spicetify.ContextMenu.SubMenu("Sort by", [playCountItemSpotify, popularityItemSpotify, releaseDateItemSpotify, scrobblesItemLastFM, personalScrobblesItemLastFM, playCountItemLastFM], shouldAddContextMenu, false).register();

    async function fetchPlaylistTracksSpotify(uri, mode) {
        let playlistRes = await Spicetify.CosmosAsync.get(`sp://core-playlist/v1/playlist/spotify:playlist:${uri}/rows`);

        let trackHistory = [];
        let allTracks = [];
        let filteredTrack = [];

        let totalTrackCount = playlistRes.rows.length ? playlistRes.rows.length : 0;

        if (totalTrackCount == 0) {
            Spicetify.showNotification(`${mode == "playcount" ? "Play Count" : mode} data not available! Try other options`);
            return [];
        }

        let currentTrack = 0;

        if (mode == "playCount") {
            mode = "playcount";
        }

        for (let playlistTrack of playlistRes.rows) {
            if (mode != "popularity") {
                currentTrack++;
                Spicetify.showNotification(`${currentTrack} / ${totalTrackCount} Songs`);
                if (playlistTrack.link.split(":")[1] == "track" && playlistTrack.playable && !playlistTrack.isLocal && !trackHistory.includes(playlistTrack.album.link)) {
                    let albumRes = await Spicetify.CosmosAsync.get(`wg://album/v1/album-app/album/${playlistTrack.album.link.split(":")[2]}/desktop`);
                    for (let tracks of albumRes.discs) {
                        for (let track of tracks.tracks) {
                            allTracks.push(track);
                            trackHistory.push(playlistTrack.album.link);
                        }
                    }
                }

                for (let track of allTracks) {
                    if (playlistTrack.link == track.uri && track[mode]) {
                        filteredTrack.push({ playCount: track.playcount, popularity: track.popularity, link: track.uri, name: track.name, artist: track.artists[0].name });
                    }
                }
            } else {
                if (playlistTrack.link.split(":")[1] == "track" && !playlistTrack.isLocal && playlistTrack.playable && playlistTrack.popularity) {
                    filteredTrack.push({ popularity: playlistTrack.popularity, link: playlistTrack.link, name: playlistTrack.name, artist: playlistTrack.artists[0].name });
                }
            }
        }

        if (filteredTrack.length == 0) {
            Spicetify.showNotification(`${mode == "playcount" ? "Play Count" : mode} data not available! Try other options`);
            return [];
        }

        return filteredTrack;
    }

    async function fetchPlaylistTracksReleaseDateSpotifyAPI(uri) {
        let playlistRes = await Spicetify.CosmosAsync.get(`sp://core-playlist/v1/playlist/spotify:playlist:${uri}/rows`);

        let idString = "";
        let count = 0;
        for (let track of playlistRes.rows) {
            let info = track.link.split(":");
            if (track.playable && !track.isLocal && info[1] == "track") {
                if (count) {
                    idString += ",";
                }
                idString += info[2];
                count++;
                if (count == 50) {
                    idString += "|";
                    count = 0;
                }
            }
        }

        let requestArray = idString ? idString.split("|") : [];

        let resRawArray = [];

        for (let apiString of requestArray) {
            if (apiString.length) {
                let rawRes = await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/tracks?ids=${apiString}`);
                for (let track of rawRes.tracks) {
                    if (track.album.release_date) {
                        resRawArray.push({ releaseDate: track.album.release_date, link: track.uri, name: track.name, artist: track.artists[0].name });
                    }
                }
            }
        }

        return resRawArray;
    }

    let artistFetchTypeCount = { album: 0, single: 0 };

    async function scanForTracksFromAlbums(res, allCount, artistName, mode, type) {
        let allTracks = [];

        for (let albums of res) {
            let albumsRes;

            try {
                if (albums.discs) {
                    albumsRes = albums;
                } else {
                    albumsRes = await Spicetify.CosmosAsync.get(`wg://album/v1/album-app/album/${albums.uri}/desktop`);
                }
            } catch (error) {}

            artistFetchTypeCount[type]++;
            Spicetify.showNotification(`${artistFetchTypeCount[type]} / ${allCount} ${type}s`);

            let releaseDate = `${albumsRes.year ? albumsRes.year : ""}${albumsRes.month ? "-" + albumsRes.month : ""}${albumsRes.day ? "-" + albumsRes.day : ""}`;

            for (let disc of albumsRes.discs) {
                for (let track of disc.tracks) {
                    let condition = true;
                    if (CONFIG.artistNameMust) {
                        let artists = track.artists.map((artist) => artist.name);
                        if (!artists.includes(artistName)) {
                            condition = false;
                        }
                    }

                    mode = mode == "releaseDate" ? "uri" : mode;
                    if (track.playable && track[mode] && condition) {
                        allTracks.push({ playCount: track.playcount, popularity: track.popularity, duration: track.duration, link: track.uri, name: track.name, artist: track.artists[0].name, releaseDate: releaseDate });
                    }
                }
            }
        }

        return allTracks;
    }

    async function fetchArtistTracksSpotify(uri, mode) {
        let artistRes = await Spicetify.CosmosAsync.get(`wg://artist/v1/${uri}/desktop?format=json`);

        let artistName = artistRes.info.name;

        let artistAlbums = artistRes.releases.albums;
        let artistSingles = artistRes.releases.singles;

        let allArtistAlbumsTracks = [];
        let allArtistSinglesTracks = [];

        let allAlbumsCount = artistAlbums.total_count;
        let allSinglesCount = artistSingles.total_count;

        if (mode == "playCount") {
            mode = "playcount";
        }

        if (allAlbumsCount != 0 && CONFIG.artistMode != "single") {
            allArtistAlbumsTracks = await scanForTracksFromAlbums(artistAlbums.releases, allAlbumsCount, artistName, mode, "album");
        }

        if (allSinglesCount != 0 && CONFIG.artistMode != "album") {
            allArtistSinglesTracks = await scanForTracksFromAlbums(artistSingles.releases, allSinglesCount, artistName, mode, "single");
        }

        let allArtistTracks = allArtistAlbumsTracks.concat(allArtistSinglesTracks);

        if (allArtistTracks.length == 0) {
            Spicetify.showNotification(`${mode == "playcount" ? "Play Count" : mode} data not available! Try other options`);
            return [];
        }

        if (CONFIG.removeDuplicate) {
            // sort the Songs by popularity so the original song will be on top of the array when compared to its duplicate songs
            allArtistTracks = await sortByPlay(allArtistTracks, "popularity");

            // Duplicate songs will have same playcount and duration buy different popularity.
            // Song with higher popularity will be listed on top while searching a song in spotify while duplicate once (low popularity) will be below.
            // So this fill remove all songs that have same playcount and duration except the first occurrence.
            // as we have sorted songs by popularity the original will be on top
            allArtistTracks = allArtistTracks.filter((track_, index, array) => array.findIndex((track) => (track.playCount == track_.playCount && track.duration == track_.duration) || track.name == track_.name || track.playCount == track_.playCount) == index);
        }

        return allArtistTracks;
    }

    async function fetchArtistLikedTracksSpotify(uri, mode) {
        let artistRes = await Spicetify.CosmosAsync.get(`sp://core-collection/unstable/@/list/tracks/artist/${uri}?responseFormat=protobufJson`);

        let trackHistory = [];
        let allTracks = [];
        let filteredTrack = [];

        let totalTrackCount = artistRes.item.length ? artistRes.item.length : 0;

        if (totalTrackCount == 0) {
            Spicetify.showNotification(`${mode == "playcount" ? "Play Count" : mode} data not available! Try other options`);
            return [];
        }

        let currentTrack = 0;

        if (mode == "playCount") {
            mode = "playcount";
        }

        for (let artistTrack of artistRes.item) {
            if (mode != "popularity") {
                currentTrack++;
                Spicetify.showNotification(`${currentTrack} / ${totalTrackCount} Songs`);

                let artistTrackMetaData = artistTrack.trackMetadata;

                if (artistTrackMetaData.playable && !artistTrackMetaData.isLocal && !trackHistory.includes(artistTrackMetaData.album.link)) {
                    let albumRes = await Spicetify.CosmosAsync.get(`wg://album/v1/album-app/album/${artistTrackMetaData.album.link.split(":")[2]}/desktop`);

                    for (let tracks of albumRes.discs) {
                        for (let track of tracks.tracks) {
                            allTracks.push(track);
                            trackHistory.push(artistTrackMetaData.album.link);
                        }
                    }
                }

                for (let track of allTracks) {
                    if (artistTrackMetaData.link == track.uri && track[mode]) {
                        filteredTrack.push({ playCount: track.playcount, popularity: track.popularity, link: track.uri, name: track.name, artist: track.artists[0].name });
                    }
                }
            } else {
                let playlistTrack = artistTrack.trackMetadata;

                if (playlistTrack.link.split(":")[1] == "track" && !playlistTrack.isLocal && playlistTrack.playable && playlistTrack.popularity) {
                    filteredTrack.push({ popularity: playlistTrack.popularity, link: playlistTrack.link, name: playlistTrack.name, artist: playlistTrack.artist[0].name });
                }
            }
        }

        if (filteredTrack.length == 0) {
            Spicetify.showNotification(`${mode == "playcount" ? "Play Count" : mode} data not available! Try other options`);
            return [];
        }

        return filteredTrack;
    }

    async function fetchArtistTopTenTracksSpotify(uri) {
        let artistRes = await Spicetify.CosmosAsync.get(`wg://artist/v1/${uri}/desktop?format=json`);

        let topTenTracks = [];

        artistRes.top_tracks.tracks.map((track) => {
            if (track.playcount) {
                topTenTracks.push({ playCount: track.playcount, link: track.uri, name: track.name, artist: artistRes.info.name });
            }
        });

        if (topTenTracks.length == 0) {
            Spicetify.showNotification("Play Count data not available!");
        }

        return topTenTracks;
    }

    async function fetchAlbumTracksSpotify(uri, mode) {
        let res = await Spicetify.CosmosAsync.get(`wg://album/v1/album-app/album/${uri}/desktop`);
        let availables = [];
        for (let disc of res.discs) {
            disc.tracks.forEach((track) => {
                if (track.playable) {
                    availables.push(track);
                }
            });
        }

        if (mode == "playCount") {
            mode = "playcount";
        }

        let unsortedArray = availables
            .filter((track) => track.playable && track[mode])
            .map(async (track) => {
                return { playCount: track.playcount, popularity: track.popularity, link: track.uri, name: track.name, artist: track.artists[0].name };
            });

        if (unsortedArray.length == 0) {
            Spicetify.showNotification(`${mode == "playcount" ? "Play Count" : mode} data not available! Try other options`);
        }

        return Promise.all(unsortedArray);
    }

    async function fetchTrackInfoFromLastFM(artist, trackName, lastFmUsername) {
        let url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${LFMApiKey}&artist=${artist}&track=${trackName}&format=json&username=${lastFmUsername}`;

        try {
            let initialRequest = await fetch(url);
            let response = await initialRequest.json();
            return response;
        } catch (error) {}
    }

    async function createDataFromATrack(track, mode, type = "") {
        let artistName = "";
        let link = "";

        if (type) {
            link = track.link;
            artistName = track.artist[0].name;
        } else {
            link = track.uri;
            artistName = track.artists[0].name;
        }

        let trackInfo = await fetchTrackInfoFromLastFM(artistName, track.name, CONFIG.lastFmUserName);

        if (mode == "playCount") {
            mode = "playcount";
        }
        if (mode == "scrobbles") {
            mode = "listeners";
        }
        if (mode == "personalScrobbles") {
            mode = "userplaycount";
        }
        try {
            if (await trackInfo.message) {
                return null;
            }
        } catch (error) {}

        try {
            if (await trackInfo.track) {
                if (trackInfo.track[mode]) {
                    return { playCount: trackInfo.track.listeners ? trackInfo.track.listeners : -1, scrobbles: trackInfo.track.playcount ? trackInfo.track.playcount : -1, personalScrobbles: trackInfo.track.userplaycount ? trackInfo.track.userplaycount : -1, link: link, name: track.name, artist: artistName };
                }
            }
        } catch (error) {}

        return null;
    }

    async function fetchPlaylistTracksLastfm(uri, mode) {
        let res = await Spicetify.Platform.PlaylistAPI.getContents(`spotify:playlist:${uri}`);

        let totalTrackCount = res.items.length ? res.items.length : 0;

        if (totalTrackCount == 0) {
            if (mode == "personalScrobbles") {
                mode = "My Scrobbles";
            }
            Spicetify.showNotification(`${mode == "playcount" ? "Play Count" : mode} data not available! Try other options`);
            return [];
        }

        let unsortedArray = await res.items.filter((track) => track.type == "track" && track.isPlayable && !track.isLocal && !unsupportedChar.test(track.name) && !unsupportedChar.test(track.artists[0].name)).map(async (track) => await createDataFromATrack(track, mode));

        if ((await unsortedArray.length) == 0 || (await unsortedArray[0]) == null) {
            if (mode == "personalScrobbles") {
                mode = "My Scrobbles";
            }
            Spicetify.showNotification(`${mode == "playcount" ? "Play Count" : mode} data not available! Try other options`);
            return [];
        }

        return Promise.all(unsortedArray);
    }

    async function fetchArtistLikedTracksLastfm(uri, mode) {
        let res = await Spicetify.CosmosAsync.get(`sp://core-collection/unstable/@/list/tracks/artist/${uri}?responseFormat=protobufJson`);

        let totalTrackCount = res.item.length ? res.item.length : 0;

        if (totalTrackCount == 0) {
            if (mode == "personalScrobbles") {
                mode = "My Scrobbles";
            }
            Spicetify.showNotification(`${mode == "playcount" ? "Play Count" : mode} data not available! Try other options`);
            return [];
        }

        let unsortedArray = await res.item.filter((artistTrack) => artistTrack.trackMetadata.playable && !artistTrack.trackMetadata.isLocal && !unsupportedChar.test(artistTrack.trackMetadata.name) && !unsupportedChar.test(artistTrack.trackMetadata.artist[0].name)).map(async (artistTrack) => await createDataFromATrack(artistTrack.trackMetadata, mode, "artist"));

        if ((await unsortedArray.length) == 0 || (await unsortedArray[0]) == null) {
            if (mode == "personalScrobbles") {
                mode = "My Scrobbles";
            }
            Spicetify.showNotification(`${mode == "playcount" ? "Play Count" : mode} data not available! Try other options`);
            return [];
        }

        return Promise.all(unsortedArray);
    }

    async function fetchAlbumTracksLastfm(uri, mode) {
        let res = await Spicetify.CosmosAsync.get(`wg://album/v1/album-app/album/${uri}/desktop`);
        let availables;

        for (let disc of res.discs) {
            availables = disc.tracks.filter((track) => track.playable);
        }

        let unsortedArray = await availables.filter((track) => track.playable && !unsupportedChar.test(track.name) && !unsupportedChar.test(track.artists[0].name)).map(async (track) => await createDataFromATrack(track, mode));

        if ((await unsortedArray.length) == 0 || (await unsortedArray[0]) == null) {
            if (mode == "personalScrobbles") {
                mode = "My Scrobbles";
            }
            Spicetify.showNotification(`${mode == "playcount" ? "Play Count" : mode} data not available! Try other options`);
            return [];
        }

        return Promise.all(unsortedArray);
    }

    async function sortByPlay(unsortedArray, mode) {
        let sortedArray = await unsortedArray.filter((item) => item).sort((item1, item2) => item2[mode] - item1[mode]);
        return sortedArray;
    }

    async function sortByPlayForQueue(unsortedArray, mode) {
        let sortedArray;

        if (mode == "releaseDate") {
            sortedArray = await unsortedArray.sort((track1, track2) => (track1.releaseDate < track2.releaseDate ? 1 : -1));
        } else {
            sortedArray = await unsortedArray.filter((track) => track).sort((track1, track2) => track2[mode] - track1[mode]);
        }

        if (CONFIG.ascending) {
            sortedArray.reverse();
        }

        // console.log(mode, await sortedArray); // enable to see what you gonna hear

        sortedArray.push({ link: "spotify:delimiter" });
        sortedArray = sortedArray.map((item) => ({
            uri: item.link,
            provider: "context",
            metadata: {
                is_queued: "false",
            },
        }));

        return await sortedArray;
    }

    async function Queue(sortedArray, context, type, mode) {
        let count = sortedArray.length - 1;
        if (count == 0) {
            return;
        }

        await Spicetify.Platform.PlayerAPI.clearQueue();

        await Spicetify.CosmosAsync.put("sp://player/v2/main/queue", {
            queue_revision: Spicetify.Queue?.queueRevision,
            next_tracks: sortedArray,
            prev_tracks: Spicetify.Queue?.prevTracks,
        });

        await Spicetify.CosmosAsync.post("sp://player/v2/main/update", {
            context: {
                uri: context,
                url: `context://${context}`,
            },
        });

        Spicetify.Player.next();

        switch (type) {
            case Type.PLAYLIST:
            case Type.PLAYLIST_V2:
                if (mode == "releaseDate") {
                    let string = CONFIG.ascending ? "Oldest" : "Latest";
                    Spicetify.showNotification(`${string} ${count} Songs`);
                    break;
                }
                Spicetify.showNotification(`Sorted ${count} Songs`);
                break;

            case Type.ARTIST:
                if (mode == "releaseDate") {
                    let string = CONFIG.ascending ? "Oldest" : "Latest";
                    Spicetify.showNotification(`${string} ${count} Songs`);
                    break;
                }
                if (CONFIG.artistMode == "topTen") {
                    Spicetify.showNotification(`Sorted Top ${count} Songs`);
                    break;
                }
                if (CONFIG.artistMode == "likedSongArtist") {
                    Spicetify.showNotification(`Sorted ${count} Liked Songs`);
                    break;
                }
                if (CONFIG.artistMode == "single") {
                    Spicetify.showNotification(`Sorted ${artistFetchTypeCount.single} Singles, Totally ${count} Songs`);
                    break;
                }
                if (CONFIG.artistMode == "album") {
                    Spicetify.showNotification(`Sorted ${artistFetchTypeCount.album} Albums, Totally ${count} Songs`);
                    break;
                }
                Spicetify.showNotification(`Sorted ${artistFetchTypeCount.album} Albums, ${artistFetchTypeCount.single} Singles, Totally ${count} Songs`);
                break;
            case Type.ALBUM:
                Spicetify.showNotification(`Sorted ${count} Songs`);
                break;
        }

        artistFetchTypeCount.album = 0;
        artistFetchTypeCount.single = 0;
    }

    async function fetchAndPlay(type, uri, mode, platform) {
        try {
            let list;

            switch (type + platform) {
                case Type.PLAYLIST + "spotify":
                case Type.PLAYLIST_V2 + "spotify":
                    if (mode == "releaseDate") {
                        list = await fetchPlaylistTracksReleaseDateSpotifyAPI(uri);
                        break;
                    }
                    list = await fetchPlaylistTracksSpotify(uri, mode);
                    break;
                case Type.PLAYLIST + "lastfm":
                case Type.PLAYLIST_V2 + "lastfm":
                    list = await fetchPlaylistTracksLastfm(uri, mode);
                    break;
                case Type.ARTIST + "spotify":
                    if (CONFIG.artistMode == "likedSongArtist") {
                        list = await fetchArtistLikedTracksSpotify(uri, mode);
                        break;
                    }
                    if (CONFIG.artistMode == "topTen") {
                        list = await fetchArtistTopTenTracksSpotify(uri);
                        break;
                    }
                    list = await fetchArtistTracksSpotify(uri, mode);
                    break;
                case Type.ARTIST + "lastfm":
                    list = await fetchArtistLikedTracksLastfm(uri, mode);
                    break;
                case Type.ALBUM + "spotify":
                    list = await fetchAlbumTracksSpotify(uri, mode);
                    break;

                case Type.ALBUM + "lastfm":
                    list = await fetchAlbumTracksLastfm(uri, mode);
                    break;
            }

            let sortedSongs = await sortByPlayForQueue(list, mode);

            await Queue(await sortedSongs, `spotify:${type}:${uri}`, type, mode);
        } catch (error) {
            Spicetify.showNotification(`${error}`);
            console.log(error);
        }
    }
}
