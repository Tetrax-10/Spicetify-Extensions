import Shared from "../shared/shared"

const Utils = (() => {
    function openLink(url) {
        window.open(url)
    }

    function getApiType(type) {
        const { Type } = Spicetify.URI

        switch (type) {
            case Type.TRACK:
                return "tracks"
            case Type.LOCAL:
                return "local"
            case Type.ALBUM:
                return "albums"
            case Type.SHOW:
                return "shows"
            case Type.EPISODE:
                return "episodes"
            case Type.PROFILE:
                return "users"
            default:
                return null
        }
    }

    async function createImageElementForSelectedLocalFileImage() {
        const localFiles = await Spicetify.Platform.LocalFilesAPI.getTracks()
        const localFileImageUrl = localFiles.filter((track) => track.uri === Shared.uri)[0].album.images[0]["url"]

        const imgElement = document.createElement("img")
        imgElement.src = localFileImageUrl

        return imgElement
    }

    return {
        openLink: openLink,
        getApiType: getApiType,
        createImageElement: createImageElementForSelectedLocalFileImage,
    }
})()

export default Utils
