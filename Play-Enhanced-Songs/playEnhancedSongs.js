// @ts-chec

// NAME: Play Enhanced Songs
// AUTHOR: Tetrax-10
// DESCRIPTION: Plays only the Enhanced Songs from a playlist
// Version: 1.0

/// <reference path="../dev/globals.d.ts" />

;(async function playEnhancedSongs() {
    if (!(Spicetify.Platform && Spicetify.CosmosAsync)) {
        setTimeout(playEnhancedSongs, 300)
        return
    }

    let { Type } = Spicetify.URI
    let enhancedSongs
    let enhancedSongsCount

    function notification(text) {
        Spicetify.showNotification(text)
    }

    function shouldAddPlayEnhancedSongs(uri) {
        let uriObj = Spicetify.URI.fromString(uri[0])
        switch (uriObj.type) {
            case Type.PLAYLIST:
            case Type.PLAYLIST_V2:
                return true
        }
        return false
    }

    new Spicetify.ContextMenu.Item(
        "Play Enhanced Songs",
        async (rawUri) => {
            let uri = rawUri[0].split(":")[2]
            await fetchEnhancedSongs(uri)
            if (enhancedSongsCount != "0") {
                await addToQueue(await formatForQueue(enhancedSongs), rawUri[0])
                notification(`Playing ${enhancedSongsCount} Enhanced Songs`)
            }
        },
        shouldAddPlayEnhancedSongs,
        "enhance"
    ).register()

    async function fetchEnhancedSongs(uri) {
        let rawRes = await Spicetify.CosmosAsync.get(`https://spclient.wg.spotify.com/enhanced-view/v1/context/spotify:playlist:${uri}?&offset=0&format=json`)
        enhancedSongsCount = rawRes.numTotalRecs

        if (enhancedSongsCount != "0") {
            let allSongs = []
            allSongs.push(rawRes.pageItems)

            for (let i = 1; i < Math.ceil(rawRes.numTotalItems / 100); i++) {
                let rawRes = await Spicetify.CosmosAsync.get(`https://spclient.wg.spotify.com/enhanced-view/v1/context/spotify:playlist:${uri}?&offset=${i * 100}&format=json`)
                allSongs.push(rawRes.pageItems)
            }

            allSongs = allSongs.flat(1)

            enhancedSongs = allSongs.filter((track) => track.itemAttributes.addedBy == "spotify").map((track) => track.uri)
        } else {
            notification(`Can't Play Enhanced Songs`)
        }
    }

    async function formatForQueue(tracks) {
        tracks.push("spotify:delimiter")

        tracks = tracks.map((track) => ({
            uri: track,
            provider: "context",
            metadata: {
                is_queued: "false",
            },
        }))

        return await tracks
    }

    async function addToQueue(tracks, context) {
        await Spicetify.Platform.PlayerAPI.clearQueue()

        await Spicetify.CosmosAsync.put("sp://player/v2/main/queue", {
            queue_revision: Spicetify.Queue?.queueRevision,
            next_tracks: tracks,
            prev_tracks: Spicetify.Queue?.prevTracks,
        })

        await Spicetify.CosmosAsync.post("sp://player/v2/main/update", {
            context: {
                uri: context,
                url: `context://${context}`,
            },
        })

        Spicetify.Player.next()
    }
})()
