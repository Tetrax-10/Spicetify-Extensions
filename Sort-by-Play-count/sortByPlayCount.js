// @ts-chec

// NAME: Sort By Play Count
// AUTHOR: Tetrax-10
// DESCRIPTION: Sorts Songs by Play Count, Global Scrobbles, Personal Scrobbles Using Last.FM
// Version: 1.0

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

    function shouldAdd(uri) {
        let uriObj = Spicetify.URI.fromString(uri[0]);
        switch (uriObj.type) {
            case Type.PLAYLIST:
            case Type.PLAYLIST_V2:
                return true;
        }
        return false;
    }

    let playCountItem = new Spicetify.ContextMenu.Item(
        "Play Count",
        async (uri) => {
            Spicetify.showNotification("Sorting...");
            await fetchAndPlay(uri[0], "playCount");
        },
        shouldAdd,
        "subtitles"
    );

    let scrobblesItem = new Spicetify.ContextMenu.Item(
        "Scrobbles",
        async (uri) => {
            Spicetify.showNotification("Sorting...");
            await fetchAndPlay(uri[0], "scrobbles");
        },
        shouldAdd,
        "heart"
    );

    let personalScrobblesItem = new Spicetify.ContextMenu.Item(
        "Personal Scrobbles",
        async (uri) => {
            if (!(await validateLocalStorage())) {
                return;
            }
            Spicetify.showNotification("Sorting...");
            await fetchAndPlay(uri[0], "personalScrobbles");
        },
        shouldAdd,
        "artist"
    );

    new Spicetify.ContextMenu.SubMenu("Sort by", [playCountItem, scrobblesItem, personalScrobblesItem], shouldAdd, false).register();

    async function fetchTrackInfoFromLastFM(artist, songName, lastFmUsername) {
        let url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${LFMApiKey}&artist=${artist}&track=${songName}&format=json&username=${lastFmUsername}`;
        let initialRequest = await fetch(url);
        let response = await initialRequest.json();

        return response;
    }

    async function fetchPlaylistTracks(uri) {
        let res = await Spicetify.Platform.PlaylistAPI.getContents(uri);

        let unsortedArray = res.items
            .filter((song) => song.type == "track" && song.isPlayable && !song.isLocal && !unsupportedChar.test(song.name) && !unsupportedChar.test(song.artists[0].name))
            .map(async (song) => {
                let trackInfo = await fetchTrackInfoFromLastFM(song.artists[0].name, song.name, lastFmUsername);
                if (trackInfo.message == "Track not found") {
                    return { playCount: "-1", scrobbles: "-1", personalScrobbles: "-1", link: song.uri, name: song.name };
                }
                return { playCount: trackInfo.track.listeners, scrobbles: trackInfo.track.playcount, personalScrobbles: trackInfo.track.userplaycount, link: song.uri, name: song.name };
            });

        return Promise.all(unsortedArray);
    }

    async function sortByPlay(unsortedArray, mode) {
        return await unsortedArray.sort((item1, item2) => item2[mode] - item1[mode]);
    }

    async function playList(sortedArray, context) {
        // needed a better queue implementation
        let list = await sortedArray.map((item) => item.link);

        let count = list.length;
        if (count === 0) {
            throw "There is no available track to play";
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
        Spicetify.showNotification(`Sorted ${count} Songs`);
        Spicetify.Player.next();
    }

    async function fetchAndPlay(uri, mode) {
        try {
            let list = await fetchPlaylistTracks(uri);
            playList(await sortByPlay(list, mode), uri);
            console.log(list);
        } catch (error) {
            Spicetify.showNotification(`${error}`);
            console.log(error);
        }
    }
}
