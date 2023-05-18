import { getBlobFromImageElement, copyBlobToClipboard } from "copy-image-clipboard"

import Shared from "./shared/shared"
import Api from "./api/api"
import Utils from "./utils/utils"
import ContextMenu from "./contextMenu/contextMenu"
import ArtistContextMenu from "./contextMenu/artistContextMenu"
import PlaylistContextMenu from "./contextMenu/playlistContextMenu"

export default async function imageOpener() {
    ContextMenu.add(async () => {
        if (Shared.apiType === "local") {
            const imgElement = await Utils.createImageElement()
            const imageBlob = await getBlobFromImageElement(imgElement)

            await copyBlobToClipboard(imageBlob)
            Api.send.notification("Image copied")
        } else {
            const url = await Api.fetchImageUrl()

            Utils.openLink(url)
        }
    })

    ArtistContextMenu.add()
    PlaylistContextMenu.add()
}
