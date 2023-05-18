import { getConfig } from "./config"

let CONFIG = getConfig()

export function isCached(uri) {
    let cachedYoutubeVideoID = CONFIG.cached[uri]
    if (cachedYoutubeVideoID !== null && cachedYoutubeVideoID !== undefined) {
        return cachedYoutubeVideoID
    } else {
        return null
    }
}

export function trimName(name) {
    return name
        .replace(/\(.+?\)/g, "")
        .replace(/\[.+?\]/g, "")
        .replace(/\s-\s.+?$/, "")
        .replace(/,.+?$/, "")
        .trim()
}

export function openYouTubeRelaventSearchPage(searchString) {
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchString)}`)
}

export function playYouTubeVideo(id) {
    window.open(`https://www.youtube.com/watch?v=${id}`)
}
