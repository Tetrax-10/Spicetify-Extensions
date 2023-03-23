import playOnYouTube from "./playOnYouTube"

export default async function initPlayOnYouTube() {
    if (!(Spicetify?.Menu && Spicetify?.ContextMenu)) {
        setTimeout(initPlayOnYouTube, 300)
        return
    }
    await playOnYouTube()
    console.log("gh actions test")
}
