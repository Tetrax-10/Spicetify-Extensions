import Shared from "../shared/shared"

const Api = (() => {
    async function fetchImageUrl() {
        const rawData = await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/${Shared.apiType}/${Shared.uid}`)
        if (Shared.apiType !== "tracks") {
            return rawData.images[0]["url"]
        } else {
            return rawData.album.images[0]["url"]
        }
    }

    function showNotification(text, isError = false, ms) {
        Spicetify.showNotification(text, isError, ms)
    }

    async function sendToClipboard(data) {
        if (data) await Spicetify.Platform.ClipboardAPI.copy(data)
    }

    return {
        fetchImageUrl: fetchImageUrl,
        send: {
            notification: showNotification,
            clipboard: sendToClipboard,
        },
    }
})()

export default Api
