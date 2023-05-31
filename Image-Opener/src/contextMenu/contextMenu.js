import Shared from "../shared/shared"
import Utils from "../utils/utils"

import { ImageIcon } from "../svg/svg"

const ContextMenu = (() => {
    let contextMenu

    function shouldAddOpenImageContextMenu(uris) {
        const { Type } = Spicetify.URI

        // made it async so the context menu is redered even if this function doesnt complete it process
        async function onLoad(uriData) {
            Shared.uri = uris[0]
            Shared.uid = uriData["_base62Id"] ?? uriData.id ?? uriData.username
            Shared.apiType = Utils.getApiType(uriData.type)

            if (Shared.apiType === "local") {
                contextMenu.name = "Copy Image"
            } else {
                contextMenu.name = "Open Image"
            }

            Shared.isCtrlPressed = false
        }

        if (uris.length === 1) {
            const uriData = Spicetify.URI.fromString(uris[0])

            switch (uriData.type) {
                case Type.TRACK:
                case Type.LOCAL:
                case Type.ALBUM:
                case Type.SHOW:
                case Type.EPISODE:
                case Type.PROFILE:
                    onLoad(uriData) // not using await so it just triggers the function instead of waiting for it to complete
                    return true
                default:
                    return false
            }
        } else {
            return false
        }
    }

    function openImageContextMenu(callback) {
        contextMenu = new Spicetify.ContextMenu.Item("Open Image", callback, shouldAddOpenImageContextMenu, ImageIcon)
        contextMenu.register()
    }

    /////////////////////////////////// LISTENERS ///////////////////////////////////////

    return {
        add: openImageContextMenu,
    }
})()

export default ContextMenu
