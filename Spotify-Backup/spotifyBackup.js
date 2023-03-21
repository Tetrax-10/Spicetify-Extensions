// @ts-chec

// NAME: Spotify Backup
// AUTHOR: Tetrax-10
// DESCRIPTION: Backup Spotify Playlist and app data
// Version: 1.0

/// <reference path="../dev/globals.d.ts" />

;(async function spotifyBackup() {
    if (!(Spicetify.Platform && Spicetify.React)) {
        setTimeout(spotifyBackup, 300)
        return
    }
    await initSpotifyBackup()
})()

async function initSpotifyBackup() {
    const { React } = Spicetify
    const { useState } = React

    ////////////////////////////////////// CONFIG ///////////////////////////////////////////

    async function getLocalStorageData(key) {
        return Spicetify.LocalStorage.get(key)
    }

    async function setLocalStorageData(key, value) {
        Spicetify.LocalStorage.set(key, value)
    }

    function notification(text) {
        Spicetify.showNotification(text)
    }

    async function getConfig() {
        try {
            const parsed = JSON.parse(await getLocalStorageData("spotifyBackup:settings"))
            if (parsed && typeof parsed === "object") {
                return parsed
            }
            throw "Config error Spotify Backup"
        } catch {
            await setLocalStorageData("spotifyBackup:settings", `{}`)
            return { restoreMode: "all", restoreOthers: true, restoreFolders: false }
        }
    }

    async function saveConfig() {
        await setLocalStorageData("spotifyBackup:settings", JSON.stringify(CONFIG))
    }

    const CONFIG = await getConfig()
    await saveConfig()

    ////////////////////////////////////// UI ///////////////////////////////////////////

    let style = React.createElement(
        "style",
        null,
        `.popup-row::after {
                    content: "";
                    display: table;
                    clear: both;
                }
                .popup-row .col {
                    display: flex;
                    padding: 10px 0;
                    align-items: center;
                }
                .popup-row .col.description {
                    float: left;
                    padding-right: 15px;
                }
                .popup-row .col.action {
                    float: right;
                    text-align: right;
                }
                .popup-row .div-title {
                    color: var(--spice-text);
                }                
                .popup-row .divider {
                    height: 2px;
                    border-width: 0;
                    background-color: var(--spice-button-disabled);
                }
                .popup-row .space {
                    margin-bottom: 20px;
                    visibility: hidden;
                }
                .popup-row .info {
                    font-size: 13px;
                }
                .popup-row .demo {
                    font-size: 13px;
                    color: #59CE8F;
                }
                .popup-row .little-space {
                    margin-bottom: 10px;
                }
                .popup-row .inputbox {
                    display: flex;
                    flex-direction: column;
                    padding: 15px;
                    border-radius: 15px;
                    border: 0;
                    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
                }
                button.checkbox {
                    align-items: center;
                    border: 0px;
                    border-radius: 50%;
                    background-color: rgba(var(--spice-rgb-shadow), 0.7);
                    color: var(--spice-text);
                    cursor: pointer;
                    display: flex;
                    margin-inline-start: 12px;
                    padding: 8px;
                }
                button.checkbox.disabled {
                    color: rgba(var(--spice-rgb-text), 0.3);
                }
                select {
                    color: var(--spice-text);
                    background: rgba(var(--spice-rgb-shadow), 0.7);
                    border: 0;
                    height: 32px;
                }
                ::-webkit-scrollbar {
                    width: 8px;
                }
                .login-button {
                    background-color: var(--spice-button);
                    border-radius: 8px;
                    border-style: none;
                    color: var(--spice-text);
                    cursor: pointer;
                    font-size: 14px;
                    height: 40px;
                    margin: 10px;
                    padding: 5px 10px;
                    text-align: center;
                }`
    )

    function DisplayIcon({ icon, size }) {
        return React.createElement("svg", {
            width: size,
            height: size,
            viewBox: "0 0 16 16",
            fill: "currentColor",
            dangerouslySetInnerHTML: {
                __html: icon,
            },
        })
    }

    function checkBoxItem({ name, field, onclickFun = () => {} }) {
        let [value, setValue] = useState(CONFIG[field])
        return React.createElement(
            "div",
            { className: "popup-row" },
            React.createElement("label", { className: "col description" }, name),
            React.createElement(
                "div",
                { className: "col action" },
                React.createElement(
                    "button",
                    {
                        className: "checkbox" + (value ? "" : " disabled"),
                        onClick: async () => {
                            let state = !value
                            CONFIG[field] = state
                            setValue(state)
                            await saveConfig()
                            onclickFun()
                        },
                    },
                    React.createElement(DisplayIcon, {
                        icon: Spicetify.SVGIcons.check,
                        size: 16,
                    })
                )
            )
        )
    }

    function dropDownItem({ name, field, options, onclickFun = () => {} }) {
        const [value, setValue] = useState(CONFIG[field])
        return React.createElement(
            "div",
            { className: "popup-row" },
            React.createElement("label", { className: "col description" }, name),
            React.createElement(
                "div",
                { className: "col action" },
                React.createElement(
                    "select",
                    {
                        value,
                        onChange: async (e) => {
                            setValue(e.target.value)
                            CONFIG[field] = e.target.value
                            await saveConfig()
                            onclickFun()
                        },
                    },
                    Object.keys(options).map((item) =>
                        React.createElement(
                            "option",
                            {
                                value: item,
                            },
                            options[item]
                        )
                    )
                )
            )
        )
    }

    function ButtonItem({ name, onclickFun }) {
        return React.createElement(
            "button",
            {
                className: "login-button",
                onClick: async () => {
                    onclickFun()
                },
            },
            name
        )
    }

    function restorePage() {
        let restoreContainer = React.createElement(
            "div",
            null,
            style,
            React.createElement("div", { className: "popup-row" }, React.createElement("h3", { className: "div-title" }, "Restore Options")),
            React.createElement("div", { className: "popup-row" }, React.createElement("hr", { className: "divider" }, null)),
            React.createElement(dropDownItem, {
                name: "What to Restore",
                field: "restoreMode",
                options: {
                    all: "All",
                    playlist: "Playlist",
                    app: "App Data",
                },
            }),
            React.createElement(checkBoxItem, {
                name: "Restore Others Playlist",
                field: "restoreOthers",
            }),
            React.createElement(checkBoxItem, {
                name: "Restore Empty Folders",
                field: "restoreFolders",
            }),
            React.createElement("div", { className: "popup-row" }, React.createElement("p", { className: "col description" }, "Copy Your Backup File Contents and then Click Restore")),
            React.createElement(ButtonItem, {
                name: "Restore",
                onclickFun: async () => {
                    await restore()
                    Spicetify.PopupModal.hide()
                },
            })
        )

        Spicetify.PopupModal.display({
            title: "Restore",
            content: restoreContainer,
        })
    }

    let settingsDOMContent = React.createElement(
        "div",
        null,
        style,
        React.createElement("div", { className: "popup-row" }, React.createElement("p", { className: "col description" }, "This will Backup :")),
        React.createElement("div", { className: "popup-row" }, React.createElement("p", { className: "col description" }, "1) Your Playlists and Folders")),
        React.createElement("div", { className: "popup-row" }, React.createElement("p", { className: "col description" }, "2) Others Playlist")),
        React.createElement("div", { className: "popup-row" }, React.createElement("p", { className: "col description" }, "3) Spotify Settings")),
        React.createElement("div", { className: "popup-row" }, React.createElement("p", { className: "col description" }, "4) All Extensions / Custom Apps Settings")),
        React.createElement("div", { className: "popup-row" }, React.createElement("p", { className: "col description" }, "5) Marketplace Settings and Installed Items")),
        React.createElement("div", { className: "popup-row" }, React.createElement("hr", { className: "space" }, null)),
        React.createElement(
            "div",
            { className: "popup-row" },
            React.createElement(
                "p",
                { className: "col description" },
                "By Clicking Backup Button a Backup will be stored in your Clipboard. Paste it some where Safely in a Text file (Do not make changes to the Backup File. Editing the backup file will CORRUPT It)"
            )
        ),
        React.createElement(
            "div",
            { className: "popup-row" },
            React.createElement(ButtonItem, {
                name: "Backup",
                onclickFun: async () => {
                    await backup()
                    Spicetify.PopupModal.hide()
                },
            }),
            React.createElement(ButtonItem, {
                name: "Restore",
                onclickFun: async () => {
                    Spicetify.PopupModal.hide()
                    setTimeout(restorePage, 300)
                },
            })
        )
    )

    function settingsPage() {
        Spicetify.PopupModal.display({
            title: "Spotify Backup",
            content: settingsDOMContent,
        })
    }

    ////////////////////////////////////// Menu ///////////////////////////////////////////

    new Spicetify.Menu.Item("Backup", false, settingsPage).register()

    ////////////////////////////////////// Core ///////////////////////////////////////////

    async function fetchPlaylistTracks(uri) {
        let playlistRes = await Spicetify.CosmosAsync.get(`sp://core-playlist/v1/playlist/spotify:playlist:${uri}/rows`, {
            policy: { link: true, playable: true },
        })

        if (playlistRes.rows.length) {
            return playlistRes.rows.map((track) => track.link)
        } else {
            return null
        }
    }

    async function getTracksFromRes(item) {
        if (item.rows) {
            let root = await item.rows.map(async (item) => {
                if (item.type == "playlist") {
                    let uri = item.link.split(":")[2]
                    return {
                        type: "playlist",
                        name: item.name,
                        isRestoreTrack: item.ownedBySelf,
                        isValid: item.loadState != "forbidden" ? (item.totalLength ? true : false) : false,
                        link: item.loadState != "forbidden" ? (item.ownedBySelf ? await fetchPlaylistTracks(uri) : item.link) : null,
                    }
                } else {
                    return {
                        type: "folder",
                        name: item.name,
                        isValid: item.folders || item.playlists ? true : false,
                        playlist: await getTracksFromRes(item),
                    }
                }
            })

            return Promise.all(root)
        } else {
            return null
        }
    }

    async function fetchAllPlaylist() {
        let rootRes = await Spicetify.CosmosAsync.get("sp://core-playlist/v1/rootlist")

        let root = await getTracksFromRes(rootRes)

        return Promise.all(root)
    }

    async function createPlaylist(name, tracks) {
        return await Spicetify.CosmosAsync.post("sp://core-playlist/v1/rootlist", {
            operation: "create",
            playlist: true,
            uris: tracks,
            name: name,
        })
    }

    async function createFolder(name) {
        return await Spicetify.Platform.RootlistAPI.createFolder(name)
    }

    async function likePlaylist(playlist) {
        await Spicetify.Platform.RootlistAPI.add([playlist])
    }

    async function fetchLocalStorage() {
        let data = Object.keys(localStorage).map(async (key) => {
            return { key: key, value: await getLocalStorageData(key) }
        })

        return await Promise.all(data)
    }

    async function setLocalStorage(keysAndValues) {
        keysAndValues.forEach(async (item) => {
            await setLocalStorageData(item.key, item.value)
        })
    }

    async function JSONToString(data) {
        return JSON.stringify(data)
    }

    async function stringToJSON(data) {
        return JSON.parse(data)
    }

    async function sendToClipboard(data, text) {
        if (data) {
            await Spicetify.Platform.ClipboardAPI.copy(data)
            notification(`${text}`)
        }
    }

    async function getFromClipboard() {
        return await Spicetify.Platform.ClipboardAPI.paste()
    }

    async function backup() {
        let backup = { playlist: null, appData: null }

        backup.playlist = await fetchAllPlaylist()

        backup.appData = await fetchLocalStorage()

        await sendToClipboard(await JSONToString(backup), "Backup Data Copied")
    }

    async function restoreAllPlaylist(items) {
        items.forEach(async (item) => {
            if (item.isValid) {
                if (item.type == "playlist") {
                    if (item.isRestoreTrack) {
                        await createPlaylist(item.name, item.link)
                    } else {
                        try {
                            if (CONFIG.restoreOthers) {
                                await likePlaylist(item.link)
                            }
                        } catch {
                            throw "Playlist already liked"
                        }
                    }
                } else {
                    if (CONFIG.restoreFolders) {
                        await createFolder(item.name)
                    }
                    await restoreAllPlaylist(item.playlist.reverse())
                }
            }
        })
    }

    async function restore() {
        let backup = await stringToJSON(await getFromClipboard())

        if (CONFIG.restoreMode != "app") {
            await restoreAllPlaylist(backup.playlist.reverse())
        }
        if (CONFIG.restoreMode != "playlist") {
            setLocalStorage(backup.appData)
        }

        notification("Restored Successfully")
    }
}
