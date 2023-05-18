import Shared from "../shared/shared"
import Utils from "../utils/utils"

import { ImageIcon } from "../svg/svg"

const ContextMenu = (() => {
    let contextMenu

    function shouldAddOpenImageContextMenu(uris) {
        const { Type } = Spicetify.URI

        // made it async so the context menu is redered even if this function doesnt complete it process
        async function onLoad(uri) {
            Shared.uri = uris[0]
            Shared.uid = uri.id ?? uri.username
            Shared.apiType = Utils.getApiType(uri.type)

            if (Shared.apiType === "local") {
                contextMenu.name = "Copy Image"
            } else {
                contextMenu.name = "Open Image"
            }

            Shared.isCtrlPressed = false
        }

        if (uris.length === 1) {
            const uri = Spicetify.URI.fromString(uris[0])

            switch (uri.type) {
                case Type.TRACK:
                case Type.LOCAL:
                case Type.ALBUM:
                case Type.SHOW:
                case Type.EPISODE:
                case Type.PROFILE:
                    onLoad(uri) // not using await so it just triggers the function instead of waiting for it to complete
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
