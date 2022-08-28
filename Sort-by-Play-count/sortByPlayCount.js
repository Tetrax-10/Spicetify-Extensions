// @ts-chec

// NAME: Sort By Play Count
// AUTHOR: Tetrax-10
// DESCRIPTION: Sorts Songs by Play Count, Global Scrobbles, Personal Scrobbles Using Spotify and Last.FM
// Version: 2.0

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
    let addLoginContainer;

    async function getLocalStorageDataFromKey(key) {
        return Spicetify.LocalStorage.get(key);
    }

    async function setLocalStorageDataWithKey(key, value) {
        Spicetify.LocalStorage.set(key, value);
    }

    if ((await getLocalStorageDataFromKey("sortByPlayCountLastFmUserName")) !== null) {
        lastFmUsername = await getLocalStorageDataFromKey("sortByPlayCountLastFmUserName");
    }

    async function validateLocalStorage() {
        if (!(await getLocalStorageDataFromKey(`sortByPlayCountLastFmUserName`))) {
            alert("Add Your Last.FM UserName to Use Personal Scrobbles\nUser (on top right) > Sort By Play Count > Register Username");
            return false;
        }
        return true;
    }

    function setLastFmUsername() {
        function triggerModal() {
            Spicetify.PopupModal.display({
                title: "Connect Last.FM",
                content: addLoginContainer,
            });
        }

        if (addLoginContainer) {
            triggerModal();
            return;
        }

        addLoginContainer = document.createElement("div");
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
        submitBtn.innerText = "Save";
        submitBtn.setAttribute(
            "style",
            'background-color: var(--spice-button);border-radius: 8px;border-style: none;box-sizing: border-box;color: #FFFFFF;cursor: pointer;display: inline-block;font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size: 14px;font-weight: 500;height: 40px;line-height: 20px;list-style: none;margin: 0;outline: none;padding: 10px 16px;position: relative;text-align: center;text-decoration: none;transition: color 100ms;vertical-align: baseline;user-select: none;-webkit-user-select: none;touch-action: manipulation;}.button-1:hover,.button-1:focus {background-color: #1DB954;'
        );

        submitBtn.addEventListener(
            "click",
            async function (event) {
                event.preventDefault();
                let name = nameInput.value.replace(/\n/g, "");

                if (name === "" || !name) {
                    alert("The UserName can't be blank");
                    return;
                }

                await setLocalStorageDataWithKey("sortByPlayCountLastFmUserName", name);

                Spicetify.PopupModal.hide();

                alert("Relaunch Spotify to Take Effect");
            },
            false
        );

        loginText.style.cssText = "padding-bottom: 10%;";
        loginContainer.appendChild(loginText);

        addLoginContainer.append(loginText, loginContainer, submitBtn);

        triggerModal();
    }

    let registerUsernameMenuItem = new Spicetify.Menu.Item(lastFmUsername, false, () => {
        setLastFmUsername();
    });

    new Spicetify.Menu.SubMenu("Sort By Play Count", [registerUsernameMenuItem]).register();

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
        "Play Count - Spotify",
        async (rawUri) => {
            let uriInfo = rawUri[0].split(":");
            let type = uriInfo[1];
            let uri = uriInfo[2];
            Spicetify.showNotification("Sorting ...");
            await fetchAndPlay(type, uri, "playCount", "spotify");
        },
        shouldAddSpotifySort,
        "play"
    );

    let popularityItemSpotify = new Spicetify.ContextMenu.Item(
        "Popularity - Spotify",
        async (rawUri) => {
            let uriInfo = rawUri[0].split(":");
            let type = uriInfo[1];
            let uri = uriInfo[2];
            Spicetify.showNotification("Sorting ...");
            await fetchAndPlay(type, uri, "popularity", "spotify");
        },
        shouldAddSpotifySort,
        "heart"
    );

    let playCountItem = new Spicetify.ContextMenu.Item(
        "Play Count - Last.FM",
        async (rawUri) => {
            let uriInfo = rawUri[0].split(":");
            let type = uriInfo[1];
            let uri = uriInfo[2];
            Spicetify.showNotification("Sorting ...");
            await fetchAndPlay(type, uri, "playCount", "lastfm");
        },
        shouldAddLastFmSort,
        "subtitles"
    );

    let scrobblesItem = new Spicetify.ContextMenu.Item(
        "Scrobbles - Last.FM",
        async (rawUri) => {
            let uriInfo = rawUri[0].split(":");
            let type = uriInfo[1];
            let uri = uriInfo[2];
            Spicetify.showNotification("Sorting ...");
            await fetchAndPlay(type, uri, "scrobbles", "lastfm");
        },
        shouldAddLastFmSort,
        "volume"
    );

    let personalScrobblesItem = new Spicetify.ContextMenu.Item(
        "Personal Scrobbles",
        async (rawUri) => {
            if (!(await validateLocalStorage())) {
                return;
            }

            let uriInfo = rawUri[0].split(":");
            let type = uriInfo[1];
            let uri = uriInfo[2];
            Spicetify.showNotification("Sorting ...");
            await fetchAndPlay(type, uri, "personalScrobbles", "lastfm");
        },
        shouldAddLastFmSort,
        "artist"
    );

    new Spicetify.ContextMenu.SubMenu("Sort by", [playCountItemSpotify, popularityItemSpotify, playCountItem, scrobblesItem, personalScrobblesItem], shouldAddSpotifySort, false).register();

    async function fetchTrackInfoFromLastFM(artist, trackName, lastFmUsername) {
        let url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${LFMApiKey}&artist=${artist}&track=${trackName}&format=json&username=${lastFmUsername}`;

        try {
            let initialRequest = await fetch(url);
            let response = await initialRequest.json();
            return response;
        } catch (error) {}
    }

    async function fetchPlaylistTracksSpotify(uri, mode) {
        let playlistRes = await Spicetify.Platform.PlaylistAPI.getContents(`spotify:playlist:${uri}`);

        let trackHistory = [];
        let allTracks = [];
        let filteredTrack = [];

        if (mode == "playCount") {
            mode = "playcount";
        }

        for (let playlistTrack of playlistRes.items) {
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
            Spicetify.showNotification(`${mode} data not available ! try other options`);
            return [];
        }

        return filteredTrack;
    }

    async function fetchArtistTracksSpotify(uri, mode) {
        let artistRes = await Spicetify.CosmosAsync.get(`wg://artist/v1/${uri}/desktop?format=json`);
        let artistAlbums = artistRes.releases.albums;
        let artistSingles = artistRes.releases.singles;

        let allArtistAlbumsTracks = [];
        let allArtistSinglesTracks = [];

        if (mode == "playCount") {
            mode = "playcount";
        }

        if (artistAlbums.total_count != 0) {
            for (let albums of artistAlbums.releases) {
                let albumsRes;
                if (!albums.discs) {
                    albumsRes = await Spicetify.CosmosAsync.get(`wg://album/v1/album-app/album/${albums.uri}/desktop`);
                } else {
                    albumsRes = albums;
                }
                for (let tracks of albumsRes.discs) {
                    for (let track of tracks.tracks) {
                        if (track.playable && track[mode]) {
                            allArtistAlbumsTracks.push({ playCount: track.playcount, popularity: track.popularity, duration: track.duration, link: track.uri, name: track.name, artist: track.artists[0].name });
                        }
                    }
                }
            }
        }

        if (artistSingles.total_count != 0) {
            for (let albums of artistSingles.releases) {
                let albumsRes;
                if (!albums.discs) {
                    albumsRes = await Spicetify.CosmosAsync.get(`wg://album/v1/album-app/album/${albums.uri}/desktop`);
                } else {
                    albumsRes = albums;
                }
                for (let tracks of albumsRes.discs) {
                    for (let track of tracks.tracks) {
                        if (track.playable && track[mode]) {
                            allArtistSinglesTracks.push({ playCount: track.playcount, popularity: track.popularity, duration: track.duration, link: track.uri, name: track.name, artist: track.artists[0].name });
                        }
                    }
                }
            }
        }

        // sort the Songs by popularity so the original song will be on top of the array when compared to its duplicate songs
        let allArtistTracks = await sortByPlay(allArtistAlbumsTracks.concat(allArtistSinglesTracks), "popularity");

        // duplicate songs will have same popularity and duration.
        // So this fill remove all songs that have same popularity and duration except the first occurrence.
        // as we have sorted songs by popularity the original will be on top
        allArtistTracks = allArtistTracks.filter((track_, index, array) => array.findIndex((track) => (track.playCount == track_.playCount && track.duration == track_.duration) || track.name == track_.name) == index);

        if (allArtistTracks.length == 0) {
            Spicetify.showNotification(`${mode} data not available ! try other options`);
            return [];
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
            Spicetify.showNotification(`${mode} data not available ! try other options`);
        }

        return Promise.all(unsortedArray);
    }

    async function fetchPlaylistTracksLastfm(uri, mode) {
        let res = await Spicetify.Platform.PlaylistAPI.getContents(`spotify:playlist:${uri}`);

        let unsortedArray = await res.items
            .filter((track) => track.type == "track" && track.isPlayable && !track.isLocal && !unsupportedChar.test(track.name) && !unsupportedChar.test(track.artists[0].name))
            .map(async (track) => {
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

                if (trackInfo.track[mode]) {
                    try {
                        if (trackInfo.message == "Track not found") {
                            return { playCount: "-1", scrobbles: "-1", personalScrobbles: "-1", link: track.uri, name: track.name, artist: track.artists[0].name };
                        }
                    } catch (error) {}

                    return { playCount: trackInfo.track.listeners ? trackInfo.track.listeners : -1, scrobbles: trackInfo.track.playcount ? trackInfo.track.playcount : -1, personalScrobbles: trackInfo.track.userplaycount ? trackInfo.track.userplaycount : -1, link: track.uri, name: track.name, artist: track.artists[0].name };
                }
            });

        if (unsortedArray.length == 0) {
            Spicetify.showNotification(`${mode} data not available ! try other options`);
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

        let unsortedArray = availables
            .filter((track) => track.playable && !unsupportedChar.test(track.name) && !unsupportedChar.test(track.artists[0].name))
            .map(async (track) => {
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

                if (trackInfo.track[mode]) {
                    try {
                        if (trackInfo.message == "Track not found") {
                            return { playCount: "-1", scrobbles: "-1", personalScrobbles: "-1", link: track.uri, name: track.name, artist: track.artists[0].name };
                        }
                    } catch (error) {}

                    return { playCount: trackInfo.track.listeners ? trackInfo.track.listeners : -1, scrobbles: trackInfo.track.playcount ? trackInfo.track.playcount : -1, personalScrobbles: trackInfo.track.userplaycount ? trackInfo.track.userplaycount : -1, link: track.uri, name: track.name, artist: track.artists[0].name };
                }
            });

        if (unsortedArray.length == 0) {
            Spicetify.showNotification(`${mode} data not available ! try other options`);
            return [];
        }

        return Promise.all(unsortedArray);
    }

    async function sortByPlay(unsortedArray, mode) {
        let sortedArray = await unsortedArray.filter((item) => item).sort((item1, item2) => item2[mode] - item1[mode]);
        return sortedArray;
    }

    async function Queue(sortedArray, context) {
        // needed a better queue implementation
        let list = await sortedArray.map((item) => {
            try {
                return item.link;
            } catch (error) {}
        });

        let count = list.length;
        if (count === 0) {
            return;
        }
        list.push("spotify:delimiter");

        await Spicetify.Platform.PlayerAPI.clearQueue();

        let isQueue = !context;

        await Spicetify.CosmosAsync.put("sp://player/v2/main/queue", {
            queue_revision: Spicetify.Queue?.queueRevision,
            next_tracks: list.map((uri) => ({
                uri,
                provider: isQueue ? "queue" : "context",
                metadata: {
                    is_queued: isQueue,
                },
            })),
            prev_tracks: Spicetify.Queue?.prevTracks,
        });

        if (!isQueue) {
            await Spicetify.CosmosAsync.post("sp://player/v2/main/update", {
                context: {
                    uri: context,
                    url: "context://" + context,
                },
            });
        }
        Spicetify.Player.next();
        Spicetify.showNotification(`Sorted ${count} Songs`);
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
                    Spicetify.showNotification("Sorting Artist may Consume some Time ...");
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

            await sortByPlay(list, mode);

            await Queue(await sortByPlay(list, mode), `spotify:${type}:${uri}`);
        } catch (error) {
            Spicetify.showNotification(`${error}`);
            console.log(error);
        }
    }
}
