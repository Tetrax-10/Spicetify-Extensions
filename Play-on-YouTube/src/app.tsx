import playOnYouTube from "./playOnYouTube"

export default function initPlayOnYouTube() {
    if (!(Spicetify?.Menu && Spicetify?.ContextMenu)) {
        setTimeout(initPlayOnYouTube, 300)
        return
    }
    playOnYouTube()
}
