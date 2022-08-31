// @ts-chec

// NAME: Sort By Play Count
// AUTHOR: Tetrax-10
// DESCRIPTION: Sorts Songs by Play Count, Popularity, Global Scrobbles, Personal Scrobbles Using Spotify and Last.FM
// Version: 2.1

/// <reference path="../globals.d.ts" />

let sortByPlayCount = 0;
(async function sortByPlay() {
    if (!Spicetify.Platform && sortByPlayCount < 200) {
        setTimeout(sortByPlay, 300);
        sortByPlayCount++;
        return;
    }
    await initSortByPlay();
})();

async function initSortByPlay() {
    let { Type } = Spicetify.URI;
    let LFMApiKey = "44654ea047786d90338c17331a5f5d95";
    let lastFmUsername = "Register Last.FM Username";
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
            await setLocalStorageDataWithKey("sortByPlayCount:settings", `{"removeDuplicate":true,"artistMode":"both","artistNameMust":false,"lastfmPlayCount":false,"myScrobbles":true}`);
            return { removeDuplicate: true, artistMode: "both", artistNameMust: false, lastfmPlayCount: false, myScrobbles: true };
        }
    }

    const CONFIG = await getConfig();

    if (CONFIG.lastFmUserName) {
        lastFmUsername = CONFIG.lastFmUserName;
    }

    async function saveConfig() {
        await setLocalStorageDataWithKey("sortByPlayCount:settings", JSON.stringify(CONFIG));
    }

    function setLastFmUsername() {
        let addLoginContainer = document.createElement("div");
        let loginContainer = document.createElement("div");
        loginContainer.setAttribute("id", "login-global-div");
        loginContainer.setAttribute("style", "padding-bottom: 10%");
        let loginText = document.createElement("div");
        loginText.innerText = `Enter your Last.FM Username`;
        let nameInput = document.createElement("input");
        nameInput.style.cssText = "display:flex;flex-direction: column;padding:15px; border-radius:15px; border:0; box-shadow:4px 4px 10px rgba(0,0,0,0.06);";
        nameInput.placeholder = lastFmUsername;
        nameInput.required = true;
        loginContainer.appendChild(nameInput);
        let submitBtn = document.createElement("button");
        submitBtn.innerText = "Save and Restart";
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
                setTimeout(Spicetify.CosmosAsync.post(`sp://desktop/v1/restart`), 100);
            },
            false
        );

        loginText.style.cssText = "padding-bottom: 10%;";
        loginContainer.appendChild(loginText);

        addLoginContainer.append(loginText, loginContainer, submitBtn);

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
            React.createElement("div", { className: "popup-row" }, React.createElement("h3", { className: "div-title" }, "Feature")),
            React.createElement("div", { className: "popup-row" }, React.createElement("hr", { className: "divider" }, null)),
            React.createElement(checkBoxItem, {
                name: "My Scrobbles - Last.FM",
                field: "myScrobbles",
                onclickFun: async () => {
                    Spicetify.PopupModal.hide();
                    setTimeout(restartPopup, 300);
                },
            }),
            React.createElement(checkBoxItem, {
                name: "Last.FM Play Count",
                field: "lastfmPlayCount",
                onclickFun: async () => {
                    Spicetify.PopupModal.hide();
                    setTimeout(restartPopup, 300);
                },
            }),
            React.createElement("div", { className: "popup-row" }, React.createElement("hr", { className: "space" }, null)),
            React.createElement("div", { className: "popup-row" }, React.createElement("h3", { className: "div-title" }, "Artist Sort")),
            React.createElement("div", { className: "popup-row" }, React.createElement("hr", { className: "divider" }, null)),
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
            React.createElement(dropDownItem, {
                name: "What to Sort in Artist Page",
                field: "artistMode",
                options: {
                    both: "All",
                    album: "Albums",
                    single: "Singles & EP",
                },
                onclickFun: async () => {
                    // console.log(CONFIG.artistMode);
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

    function shouldAddSpotifySort(uri) {
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

    function shouldAddLastFmSort(uri) {
        let uriObj = Spicetify.URI.fromString(uri[0]);
        switch (uriObj.type) {
            case Type.PLAYLIST:
            case Type.PLAYLIST_V2:
            case Type.ALBUM:
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
        shouldAddSpotifySort,
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
        shouldAddSpotifySort,
        "heart"
    );

    let scrobblesItemLastFM = new Spicetify.ContextMenu.Item(
        "Scrobbles",
        async (rawUri) => {
            let uriInfo = rawUri[0].split(":");
            let type = uriInfo[1];
            let uri = uriInfo[2];
            await fetchAndPlay(type, uri, "scrobbles", "lastfm");
        },
        shouldAddLastFmSort,
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
        shouldAddLastFmSort,
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
        shouldAddLastFmSort,
        "subtitles"
    );

    let contextMenuItems = [playCountItemSpotify, popularityItemSpotify, scrobblesItemLastFM];

    if (CONFIG.myScrobbles) {
        contextMenuItems.push(personalScrobblesItemLastFM);
    }
    if (CONFIG.lastfmPlayCount) {
        contextMenuItems.push(playCountItemLastFM);
    }

    new Spicetify.ContextMenu.SubMenu("Sort by", contextMenuItems, shouldAddSpotifySort, false).register();

    async function fetchPlaylistTracksSpotify(uri, mode) {
        let playlistRes = await Spicetify.Platform.PlaylistAPI.getContents(`spotify:playlist:${uri}`);

        let trackHistory = [];
        let allTracks = [];
        let filteredTrack = [];

        let totalTrackCount = playlistRes.items.length ? playlistRes.items.length : 0;

        if (totalTrackCount == 0) {
            Spicetify.showNotification(`${mode == "playcount" ? "Play Count" : mode} data not available! Try other options`);
            return [];
        }

        let currentTrack = 0;

        if (mode == "playCount") {
            mode = "playcount";
        }

        for (let playlistTrack of playlistRes.items) {
            currentTrack++;
            Spicetify.showNotification(`${currentTrack} / ${totalTrackCount} Songs`);
            if (playlistTrack.type == "track" && playlistTrack.isPlayable && !playlistTrack.isLocal && !trackHistory.includes(playlistTrack.album.uri)) {
                let albumRes = await Spicetify.CosmosAsync.get(`wg://album/v1/album-app/album/${playlistTrack.album.uri.split(":")[2]}/desktop`);
                for (let tracks of albumRes.discs) {
                    for (let track of tracks.tracks) {
                        allTracks.push(track);
                        trackHistory.push(playlistTrack.album.uri);
                    }
                }
            }

            for (let track of allTracks) {
                if (playlistTrack.uri == track.uri && track[mode]) {
                    filteredTrack.push({ playCount: track.playcount, popularity: track.popularity, link: track.uri, name: track.name, artist: track.artists[0].name });
                }
            }
        }

        if (filteredTrack.length == 0) {
            Spicetify.showNotification(`${mode == "playcount" ? "Play Count" : mode} data not available! Try other options`);
            return [];
        }

        return filteredTrack;
    }

    let artistFetchType = { album: 0, single: 0 };

    async function scanForTracksFromAlbums(res, allCount, artistName, mode, type) {
        let allTracks = [];
        for (let albums of res) {
            let albumsRes;

            if (!albums.discs) {
                albumsRes = await Spicetify.CosmosAsync.get(`wg://album/v1/album-app/album/${albums.uri}/desktop`);
            } else {
                albumsRes = albums;
            }
            artistFetchType[type]++;
            Spicetify.showNotification(`${artistFetchType[type]} / ${allCount} ${type}s`);
            for (let tracks of albumsRes.discs) {
                for (let track of tracks.tracks) {
                    let condition = true;
                    if (CONFIG.artistNameMust) {
                        let artists = track.artists.map((artist) => artist.name);
                        if (!artists.includes(artistName)) {
                            condition = false;
                        }
                    }
                    if (track.playable && track[mode] && condition) {
                        allTracks.push({ playCount: track.playcount, popularity: track.popularity, duration: track.duration, link: track.uri, name: track.name, artist: track.artists[0].name });
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

    async function fetchAlbumTracksSpotify(uri, mode) {
        let res = await Spicetify.CosmosAsync.get(`wg://album/v1/album-app/album/${uri}/desktop`);
        let availables;
        for (let disc of res.discs) {
            availables = disc.tracks.filter((track) => track.playable);
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

    async function createDataFromATrack(track, mode) {
        let trackInfo = await fetchTrackInfoFromLastFM(track.artists[0].name, track.name, lastFmUsername);

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
                    return { playCount: trackInfo.track.listeners ? trackInfo.track.listeners : -1, scrobbles: trackInfo.track.playcount ? trackInfo.track.playcount : -1, personalScrobbles: trackInfo.track.userplaycount ? trackInfo.track.userplaycount : -1, link: track.uri, name: track.name, artist: track.artists[0].name };
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
        unsortedArray.push({ link: "spotify:delimiter" });
        let sortedArray = await unsortedArray
            .filter((item) => item)
            .sort((item1, item2) => item2[mode] - item1[mode])
            .map((item) => ({
                uri: item.link,
                provider: "context",
                metadata: {
                    is_queued: false,
                },
            }));
        return sortedArray;
    }

    async function Queue(sortedArray, context, type) {
        // console.log(sortedArray); // Prints Final Array you gonna Heaar

        let count = sortedArray.length;
        if (count == 1) {
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
                url: "context://" + context,
            },
        });

        Spicetify.Player.next();

        switch (type) {
            case "playlist":
                Spicetify.showNotification(`Sorted ${count} Songs`);
                break;
            case "artist":
                Spicetify.showNotification(`Sorted ${artistFetchType.album} Albums, ${artistFetchType.single} Singles, Totally ${count} Songs`);
                break;
            case "album":
                Spicetify.showNotification(`Sorted ${count} Songs`);
                break;
        }
        artistFetchType.album = 0;
        artistFetchType.single = 0;
    }

    async function fetchAndPlay(type, uri, mode, platform) {
        try {
            let list;

            switch (type + platform) {
                case Type.PLAYLIST + "spotify":
                case Type.PLAYLIST_V2 + "spotify":
                    list = await fetchPlaylistTracksSpotify(uri, mode);
                    break;
                case Type.ARTIST + "spotify":
                    list = await fetchArtistTracksSpotify(uri, mode);
                    break;
                case Type.ALBUM + "spotify":
                    list = await fetchAlbumTracksSpotify(uri, mode);
                    break;
                case Type.PLAYLIST + "lastfm":
                case Type.PLAYLIST_V2 + "lastfm":
                    list = await fetchPlaylistTracksLastfm(uri, mode);
                    break;
                case Type.ALBUM + "lastfm":
                    list = await fetchAlbumTracksLastfm(uri, mode);
                    break;
            }

            await Queue(await sortByPlayForQueue(list, mode), `spotify:${type}:${uri}`, type);
        } catch (error) {
            Spicetify.showNotification(`${error}`);
            console.log(error);
        }
    }
}
