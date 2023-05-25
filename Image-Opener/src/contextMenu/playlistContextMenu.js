import Utils from "../utils/utils"
import GraphQL from "../api/graphQL"

import { ImageIcon } from "../svg/svg"

const PlaylistContextMenu = (() => {
    let coverArtImageContextMenu, bannerImageContextMenu, mobileBannerContextMenu
    const playlistData = {}

    function shouldAddOpenImageContextSubMenu(uris) {
        const { Type } = Spicetify.URI

        if (uris.length === 1) {
            const uri = Spicetify.URI.fromString(uris[0])

            switch (uri.type) {
                case Type.PLAYLIST:
                case Type.PLAYLIST_V2:
                    return true
                default:
                    return false
            }
        } else {
            return false
        }
    }

    function getHighResSpotifyPlaylistCover(imageUrl, owner) {
        if (owner === "spotify" && imageUrl && imageUrl.includes("https://i.scdn.co/image/") && imageUrl.charAt(39) === "2") {
            return imageUrl.substring(0, 39) + "4" + imageUrl.substring(40)
        } else if (
            imageUrl &&
            imageUrl.includes("https://i.scdn.co/image/") &&
            imageUrl.charAt(36) === "d" &&
            imageUrl.charAt(37) === "a" &&
            imageUrl.charAt(38) === "8" &&
            imageUrl.charAt(39) === "4"
        ) {
            return imageUrl.substring(0, 36) + "bebb" + imageUrl.substring(40)
        }

        return imageUrl
    }

    async function fetchPlaylistData(uri) {
        const uriType = Spicetify.URI.fromString(uri).type

        if (!(uriType === Spicetify.URI.Type.PLAYLIST || uriType === Spicetify.URI.Type.PLAYLIST_V2) || playlistData[uri]?.avatar !== undefined) return

        const rawRes = await Spicetify.GraphQL.Request(GraphQL.Definitions.fetchPlaylistMetadata, { uri: uri, offset: 0, limit: 0 })

        playlistData[uri] = playlistData[uri] ?? {}

        if (rawRes.data.playlistV2?.ownerV2?.data?.uri === "spotify:user:spotify") {
            playlistData[uri].coverArt = getHighResSpotifyPlaylistCover(rawRes.data.playlistV2?.images?.items[0]?.sources[0]?.url, "spotify")
        } else {
            playlistData[uri].coverArt = getHighResSpotifyPlaylistCover(rawRes.data.playlistV2?.images?.items[0]?.sources[0]?.url)
        }
        playlistData[uri].banner = rawRes.data.playlistV2?.attributes?.filter((item) => item.key === "header_image_url_desktop")[0]?.value ?? null
        playlistData[uri].mobileBanner = rawRes.data.playlistV2?.attributes?.filter((item) => item.key === "image_url")[0]?.value ?? null
    }

    function openImageContextSubMenu() {
        coverArtImageContextMenu = new Spicetify.ContextMenu.Item(
            "Cover Art",
            (uris) => Utils.openLink(playlistData[uris[0]].coverArt),
            (uris) => {
                ;(async () => {
                    while (playlistData[uris[0]]?.coverArt === undefined) {
                        await new Promise((resolve) => setTimeout(resolve, 10))
                    }

                    if (playlistData[uris[0]]?.coverArt) {
                        coverArtImageContextMenu.disabled = false
                    } else {
                        coverArtImageContextMenu.disabled = true
                    }
                })()

                return true
            },
            ImageIcon
        )

        bannerImageContextMenu = new Spicetify.ContextMenu.Item(
            "Banner",
            (uris) => Utils.openLink(playlistData[uris[0]].banner),
            (uris) => {
                ;(async () => {
                    while (playlistData[uris[0]]?.banner === undefined) {
                        await new Promise((resolve) => setTimeout(resolve, 10))
                    }

                    if (playlistData[uris[0]]?.banner) {
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

        mobileBannerContextMenu = new Spicetify.ContextMenu.Item(
            "Mobile Banner",
            (uris) => Utils.openLink(playlistData[uris[0]].mobileBanner),
            (uris) => {
                ;(async () => {
                    while (playlistData[uris[0]]?.mobileBanner === undefined) {
                        await new Promise((resolve) => setTimeout(resolve, 10))
                    }

                    if (playlistData[uris[0]]?.mobileBanner) {
                        mobileBannerContextMenu.disabled = false
                    } else {
                        mobileBannerContextMenu.disabled = true
                    }
                })()

                return true
            },
            ImageIcon,
            false
        )

        new Spicetify.ContextMenu.SubMenu("Open Image", [coverArtImageContextMenu, bannerImageContextMenu, mobileBannerContextMenu], (uris) => {
            fetchPlaylistData(uris[0]) // not using await so it just triggers the function instead of waiting for it to complete
            return shouldAddOpenImageContextSubMenu(uris)
        }).register()
    }

    /////////////////////////////////// LISTENERS ///////////////////////////////////////

    return {
        add: openImageContextSubMenu,
    }
})()

export default PlaylistContextMenu
