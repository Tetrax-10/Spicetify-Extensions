import playOnYouTube from "./playOnYouTube"

export default async function initPlayOnYouTube() {
    while (!(Spicetify?.Menu && Spicetify?.ContextMenu)) {
        await new Promise((resolve) => setTimeout(resolve, 10))
    }

    playOnYouTube()
}
