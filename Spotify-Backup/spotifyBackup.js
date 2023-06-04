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
            await setLocalStorageData("spotifyBackup:settings", "{}")
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
        }
        .GenericModal[aria-label="Spotify Backup"] .main-trackCreditsModal-header .tetrax-settings-discord-link {
            color: var(--spice-custom-success);
        }
        .GenericModal[aria-label="Spotify Backup"] .main-trackCreditsModal-header .tetrax-settings-discord-link:hover {
            color: var(--spice-custom-link-hover);
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
                        value: value,
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

        const headerSection = document.querySelector(".main-trackCreditsModal-header")

        const linkElement = document.createElement("a")
        linkElement.textContent = "Join our discord server for help and discussions"
        linkElement.href = "https://discord.gg/DaUbPmbDwr"
        linkElement.className = "tetrax-settings-discord-link"

        const container = document.createElement("div")
        container.appendChild(document.querySelector("h1.main-type-alto"))
        container.appendChild(linkElement)

        headerSection.prepend(container)
    }

    ////////////////////////////////////// Menu ///////////////////////////////////////////

    new Spicetify.Menu.Item(
        "Backup",
        false,
        settingsPage,
        `<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="18px" height="18px" viewBox="0 0 512 512"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="currentcolor"><path d="M1225 4470 c-219 -45 -405 -221 -460 -435 -18 -72 -21 -503 -4 -587 16 -75 70 -184 123 -246 l45 -53 -44 -55 c-56 -68 -99 -151 -119 -231 -22 -85 -23 -522 -1 -606 20 -76 65 -164 118 -229 l44 -54 -43 -52 c-51 -62 -99 -156 -119 -232 -21 -80 -21 -522 0 -605 42 -164 165 -314 316 -384 46 -22 111 -44 143 -50 68 -13 1340 -16 1334 -3 -1 4 -29 58 -60 120 -32 61 -63 130 -69 152 l-12 40 -562 0 c-628 0 -617 -1 -698 70 -26 23 -53 60 -66 90 -21 48 -22 63 -19 278 3 253 7 267 75 335 74 75 42 71 687 77 l579 5 38 94 c21 52 54 121 74 153 19 33 35 61 35 64 0 2 -280 4 -623 4 -689 0 -686 0 -769 63 -24 18 -54 55 -70 86 l-28 53 0 228 0 228 28 53 c16 31 46 68 71 86 87 67 15 64 1412 61 l1264 -3 57 -28 c69 -34 114 -88 138 -164 l17 -56 100 -32 c55 -18 123 -45 151 -59 28 -14 54 -26 57 -26 3 0 5 41 5 91 0 149 -42 270 -135 383 l-44 55 45 53 c53 62 107 171 123 246 18 85 14 515 -4 587 -28 104 -74 184 -155 266 -75 76 -128 110 -240 153 -55 21 -56 21 -1375 23 -726 0 -1338 -3 -1360 -7z m2680 -337 c53 -28 99 -78 124 -133 19 -41 21 -65 21 -261 0 -252 -7 -284 -76 -353 -81 -82 22 -77 -1429 -74 -1259 3 -1291 3 -1330 23 -21 10 -56 36 -76 57 -62 64 -69 101 -69 347 0 196 2 220 21 261 33 73 94 128 169 151 14 4 605 7 1315 6 l1290 -2 40 -22z"/><path d="M3548 2545 c-587 -96 -1013 -619 -984 -1210 15 -321 136 -581 371 -802 365 -344 891 -417 1340 -185 687 355 844 1277 312 1838 -174 183 -362 292 -597 345 -114 26 -327 33 -442 14z m398 -443 c85 -27 189 -83 262 -142 l62 -51 0 81 c0 77 2 83 29 111 48 47 130 37 164 -21 15 -24 17 -62 17 -265 0 -264 -4 -285 -65 -311 -49 -20 -461 -20 -510 0 -35 15 -65 59 -65 96 0 37 30 81 65 96 23 9 72 14 142 14 l107 0 -44 46 c-164 170 -416 211 -624 102 -78 -41 -183 -146 -224 -224 -90 -173 -78 -381 32 -547 52 -78 116 -133 211 -178 165 -80 345 -71 507 24 72 42 165 148 203 229 40 88 60 108 114 115 36 5 44 2 76 -30 48 -48 47 -88 -3 -189 -138 -274 -420 -436 -723 -414 -309 21 -571 235 -666 541 -14 47 -18 92 -18 205 1 130 3 153 28 225 35 106 88 194 167 278 104 112 214 177 361 217 97 26 301 22 395 -8z"/></g></svg>` // eslint-disable-line quotes
    ).register()

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
