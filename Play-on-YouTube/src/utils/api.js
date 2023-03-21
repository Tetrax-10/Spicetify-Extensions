import { trimName } from "./utils"
import { getConfig } from "./config"

let CONFIG = getConfig()

export async function fetchTrackInfo(uri) {
    let spotifyRes = await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/tracks/" + uri.split(":")[2])
    if (spotifyRes !== null && spotifyRes !== undefined)
        return { searchString: spotifyRes.album.artists.map((artist) => artist.name).join(", ") + " - " + spotifyRes.name + " video song", trimmedSongName: trimName(spotifyRes.name) }
}

export async function fetchVideoID(searchString, apiKey) {
    try {
        let youtubeRes = await Spicetify.CosmosAsync.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(searchString)}&type=video&key=${apiKey}`)
        if (youtubeRes !== null && youtubeRes !== undefined && typeof youtubeRes === "object") return { firstVideoID: youtubeRes.items[0].id.videoId, allVideos: youtubeRes.items }
    } catch {
        return { firstVideoID: null, allVideos: null }
    }
}

export async function fetchVideoIdWithAllApiKeys(searchString) {
    for (let apiKey of CONFIG.backupApiKeys) {
        let { firstVideoID = null, allVideos = null } = await fetchVideoID(searchString, apiKey)
        if (firstVideoID) {
            return { firstVideoID, allVideos }
        }
    }
    return { firstVideoID: null, allVideos: null }
}
