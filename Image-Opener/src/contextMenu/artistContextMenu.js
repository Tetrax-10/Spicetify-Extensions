import Utils from "../utils/utils"
import GraphQL from "../api/graphQL"

import { ImageIcon } from "../svg/svg"

const ArtistContextMenu = (() => {
    let avatarImageContextMenu, bannerImageContextMenu, galleryContextMenu
    const artistData = {}

    function shouldAddOpenImageContextSubMenu(uris) {
        const { Type } = Spicetify.URI

        if (uris.length === 1) {
            const uri = Spicetify.URI.fromString(uris[0])

            switch (uri.type) {
                case Type.ARTIST:
                    return true
                default:
                    return false
            }
        } else {
            return false
        }
    }

    async function fetchArtistData(uri) {
        const uriType = Spicetify.URI.fromString(uri).type

        if (uriType !== Spicetify.URI.Type.ARTIST || artistData[uri]?.avatar !== undefined) return

        const rawRes = await Spicetify.GraphQL.Request(GraphQL.Definitions.queryArtistOverview, { uri: uri, locale: "en" })

        artistData[uri] = artistData[uri] ?? {}
        artistData[uri].avatar = rawRes.data.artistUnion.visuals?.avatarImage?.sources[0]?.url ?? null
        artistData[uri].banner = rawRes.data.artistUnion.visuals?.headerImage?.sources[0]?.url ?? null
        artistData[uri].gallery = rawRes.data.artistUnion.visuals?.gallery?.items ?? null
    }

    function openImageContextSubMenu() {
        avatarImageContextMenu = new Spicetify.ContextMenu.Item(
            "Avatar",
            (uris) => Utils.openLink(artistData[uris[0]].avatar),
            (uris) => {
                ;(async () => {
                    while (artistData[uris[0]]?.avatar === undefined) {
                        await new Promise((resolve) => setTimeout(resolve, 10))
                    }

                    if (artistData[uris[0]]?.avatar) {
                        avatarImageContextMenu.disabled = false
                    } else {
                        avatarImageContextMenu.disabled = true
                    }
                })()

                return true
            },
            ImageIcon
        )

        bannerImageContextMenu = new Spicetify.ContextMenu.Item(
            "Banner",
            (uris) => Utils.openLink(artistData[uris[0]].banner),
            (uris) => {
                ;(async () => {
                    while (artistData[uris[0]]?.banner === undefined) {
                        await new Promise((resolve) => setTimeout(resolve, 10))
                    }

                    if (artistData[uris[0]]?.banner) {
                        bannerImageContextMenu.disabled = false
                    } else {
                        bannerImageContextMenu.disabled = true
                    }
                })()

                return true
            },
            ImageIcon,
            false
        )

        galleryContextMenu = new Spicetify.ContextMenu.Item(
            "Open Gallery",
            (uris) => {
                artistData[uris[0]]?.gallery.forEach((image) => {
                    Utils.openLink(image.sources[0].url)
                })
            },
            (uris) => {
                ;(async () => {
                    while (artistData[uris[0]]?.gallery === undefined) {
                        await new Promise((resolve) => setTimeout(resolve, 10))
                    }

                    if (artistData[uris[0]]?.gallery.length) {
                        galleryContextMenu.disabled = false
                    } else {
                        galleryContextMenu.disabled = true
                    }
                })()

                return true
            },
            ImageIcon,
            false
        )

        new Spicetify.ContextMenu.SubMenu("Open Image", [avatarImageContextMenu, bannerImageContextMenu, galleryContextMenu], (uris) => {
            fetchArtistData(uris[0]) // not using await so it just triggers the function instead of waiting for it to complete
            return shouldAddOpenImageContextSubMenu(uris)
        }).register()
    }

    /////////////////////////////////// LISTENERS ///////////////////////////////////////

    return {
        add: openImageContextSubMenu,
    }
})()

export default ArtistContextMenu
