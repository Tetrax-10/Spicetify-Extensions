// @ts-chec

// NAME: Sort By Play Count
// AUTHOR: Tetrax-10
// DESCRIPTION: Sorts Songs by Play Count, Global Scrobbles, Personal Scrobbles ( Source : Last.FM, Youtube )
// KNOWLEDGE: shuffle+
// Version: dev

/// <reference path="../globals.d.ts" />

// preferred Playlist to test beta version : https://open.spotify.com/playlist/7pJIqg6EpSdTKrVEqwN8Df (Vikram Songs)
// Some Playlist will return "cannot read properties of undefined (reading 'listeners')", this error will be fixed in final release
// Something wrong in playList function Line no :

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
    let LFMApiKey = "83fb76a887a860800fd8719bd7412ada";
    let lastFmUsername = "Raghavan_Rave";

    new Spicetify.ContextMenu.Item(
        "Sort by Play Count",
        async (uri) => {
            fetchAndPlay(uri[0]);
            Spicetify.showNotification("Sorting...");
        },
        (uri) => {
            let uriObj = Spicetify.URI.fromString(uri[0]);
            switch (uriObj.type) {
                case Type.PLAYLIST:
                case Type.PLAYLIST_V2:
                    return true;
            }
            return false;
        },
        "subtitles"
    ).register();

    async function fetchTrackInfoFromLastFM(artist, songName, lastFmUsername) {
        let url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${LFMApiKey}&artist=${artist}&track=${songName}&format=json&username=${lastFmUsername}`;
        let initialRequest = await fetch(url);
        let response = await initialRequest.json();
        return response;
    }

    async function fetchTrackPlayCountInfo(songId) {
        const spotifyTrackInfoObject = await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/tracks/" + songId);
        let trackInfo = await fetchTrackInfoFromLastFM(spotifyTrackInfoObject.artists[0].name, spotifyTrackInfoObject.name, lastFmUsername);
        return { playCount: trackInfo.track.listeners, scrobbles: trackInfo.track.playcount, PersonalScrobbles: trackInfo.track.userplaycount, link: `spotify:track:${songId}` };
    }
    async function fetchPlaylist(uri) {
        const res = await Spicetify.CosmosAsync.get(`sp://core-playlist/v1/playlist/${uri}/rows`, {
            policy: { link: true, playable: true },
        });

        let unsortedArray = res.rows
            .filter((track) => track.playable)
            .map(async (songInfo) => {
                return await fetchTrackPlayCountInfo(songInfo.link.split(":")[2]);
            });

        return Promise.all(unsortedArray);
    }

    async function sortByPlay(unsortedArray) {
        return await unsortedArray.sort((item1, item2) => item2.playCount - item1.playCount);
    }

    async function playList(unsortedArray, context) {
        let list = await unsortedArray.map((item) => item.link);

        const count = list.length;
        if (count === 0) {
            throw "There is no available track to play";
        }
        list.push("spotify:delimiter");

        Spicetify.Platform.PlayerAPI.clearQueue();

        const isQueue = !context;

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

        Spicetify.showNotification("Playlist Sorted");
        Spicetify.Player.next();
    }

    async function fetchAndPlay(uri) {
        try {
            let list = await fetchPlaylist(uri);
            playList(await sortByPlay(list), uri);
            console.log(list);
        } catch (error) {
            Spicetify.showNotification(`${error}`);
        }
    }
}
