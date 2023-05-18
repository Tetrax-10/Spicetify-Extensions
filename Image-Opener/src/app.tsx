import imageOpener from "./imageOpener"

export default async function initImageOpener() {
    while (!(Spicetify?.Menu && Spicetify?.ContextMenu)) {
        await new Promise((resolve) => setTimeout(resolve, 10))
    }

    imageOpener()
}
