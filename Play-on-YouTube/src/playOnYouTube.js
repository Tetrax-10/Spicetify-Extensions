import SettingsUI from "./components/SettingsUI/SettingsUI"
import { getConfig, saveConfig } from "./utils/config"
import { isCached, openYouTubeRelaventSearchPage, playYouTubeVideo } from "./utils/utils"
import { fetchTrackInfo, fetchVideoID, fetchVideoIdWithAllApiKeys } from "./utils/api"
import { YouTubeSVG } from "./constants/svg"

export default function playOnYouTube() {
    /////////////////////////////////// CONSTANTS ///////////////////////////////////////

    let CONFIG = getConfig()
    let isCtrlPressed = false

    ///////////////////////////////// MAIN ///////////////////////////////////////

    function shouldAddToTrack(uri) {
        let uriObj = Spicetify.URI.fromString(uri[0])
        switch (uriObj.type) {
            case Spicetify.URI.Type.TRACK:
                return true
        }
        return false
    }

    async function playYouTubeVideoFromTrackID(rawUri) {
        const uri = rawUri[0]

        let cachedVideoID = isCached(uri)
        if (cachedVideoID && !isCtrlPressed) {
            playYouTubeVideo(cachedVideoID)
            return
        }

        let { searchString = null, trimmedSongName = null } = await fetchTrackInfo(uri)
        if (searchString === null) return

        if (!CONFIG.YouTubeApiKey || isCtrlPressed) {
            openYouTubeRelaventSearchPage(searchString)
            return
        }

        let { firstVideoID = null, allVideos = null } = await fetchVideoID(searchString, CONFIG.YouTubeApiKey)

        if (!firstVideoID) {
            if (CONFIG.backupApiKeys.length) {
                let { firstVideoID: tempFirstVideoID = null, allVideos: tempAllVideos = null } = await fetchVideoIdWithAllApiKeys(searchString)
                if (!tempFirstVideoID) {
                    openYouTubeRelaventSearchPage(searchString)
                    return
                }
                firstVideoID = tempFirstVideoID
                allVideos = tempAllVideos
            } else {
                openYouTubeRelaventSearchPage(searchString)
                return
            }
        }

        let youtubeVideoKey = firstVideoID

        allVideos.some((video) => {
            if (video.snippet.title.toLowerCase().includes(trimmedSongName.toLowerCase())) {
                youtubeVideoKey = video.id.videoId
                return true
            }
            return false
        })

        CONFIG.cached[uri] = youtubeVideoKey
        saveConfig("cached", CONFIG.cached)

        playYouTubeVideo(youtubeVideoKey)

        isCtrlPressed = false
        trackContextMenu.name = "Play on YouTube"
    }

    /////////////////////////////////// MENU ///////////////////////////////////////

    new Spicetify.Menu.Item(
        "Play on YouTube",
        false,
        () => {
            Spicetify.PopupModal.display({
                title: "YouTube API key",
                content: SettingsUI(),
                isLarge: true,
            })

            const headerSection = document.querySelector(".main-trackCreditsModal-header")

            const linkElement = document.createElement("a")
            linkElement.textContent = "Join our discord server for help and discussions"
            linkElement.href = "https://discord.gg/DaUbPmbDwr"
            linkElement.className = "tetrax-settings-discord-link"

            const container = document.createElement("div")
            container.appendChild(document.querySelector("h1.main-type-alto"))
            container.appendChild(linkElement)

            headerSection.prepend(container)
        },
        YouTubeSVG
    ).register()

    let trackContextMenu = new Spicetify.ContextMenu.Item("Play on YouTube", playYouTubeVideoFromTrackID, shouldAddToTrack, YouTubeSVG)
    trackContextMenu.register()

    /////////////////////////////////// LISTENERS ///////////////////////////////////////

    window.addEventListener("keydown", (event) => {
        if (event.repeat) return
        if (event.key == "Control") {
            isCtrlPressed = true
            trackContextMenu.name = "Search on YouTube"
        }
    })

    window.addEventListener("keyup", (event) => {
        if (event.repeat) return
        if (event.key == "Control") {
            isCtrlPressed = false
            trackContextMenu.name = "Play on YouTube"
        }
    })

    addEventListener("blur", () => {
        isCtrlPressed = false
        trackContextMenu.name = "Play on YouTube"
    })
}
