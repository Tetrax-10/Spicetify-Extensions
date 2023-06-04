// @ts-chec

// NAME: Spotify Genres
// AUTHOR: Tetrax-10
// DESCRIPTION: See what Genres you are listening to

/* eslint-disable */

/// <reference path="../dev/globals.d.ts" />

;(async function spotifyGenres() {
    if (!(Spicetify.CosmosAsync && Spicetify.Platform && Spicetify.URI && Spicetify.Player.data)) {
        setTimeout(spotifyGenres, 300)
        return
    }

    window.genrePopup = () => {
        genrePopup()
    }

    window.artistPageGenreOnClick = (dataValue) => {
        artistPageGenreOnClick(dataValue)
    }

    /////////////////////////////////// CONST ///////////////////////////////////////

    let LFMApiKey = "44654ea047786d90338c17331a5f5d95"
    let allGenresForPopupModal = []
    let lastFmTags = []

    const icon = `<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="17px" height="17px" viewBox="0 0 892.000000 877.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,877.000000) scale(0.100000,-0.100000)" fill="currentcolor" stroke="none"><path d="M4365 8296 c-86 -27 -154 -88 -193 -174 -16 -34 -17 -213 -22 -2550 l-5 -2512 -75 53 c-279 197 -634 329 -1015 378 -129 17 -481 17 -610 0 -901 -116 -1574 -677 -1681 -1402 -92 -628 306 -1259 991 -1566 225 -102 440 -162 690 -194 129 -17 481 -17 610 0 674 86 1226 421 1513 916 86 149 149 344 171 530 7 61 11 686 11 1946 l0 1857 1413 -530 c916 -344 1430 -532 1463 -535 115 -12 238 58 290 164 l29 58 0 775 c0 720 -1 781 -19 855 -59 257 -147 430 -310 617 -115 131 -252 235 -409 308 -81 38 -2546 965 -2662 1001 -69 22 -123 23 -180 5z m2578 -1545 c169 -74 303 -227 374 -427 l28 -79 3 -501 3 -502 -1298 487 -1298 487 -3 681 -2 681 1072 -403 c590 -222 1094 -412 1121 -424z m-3963 -3856 c593 -78 1044 -400 1150 -820 118 -470 -282 -947 -930 -1109 -805 -201 -1677 171 -1830 779 -118 471 289 955 937 1111 219 53 461 67 673 39z"/></g></svg>`
    const iconActive = `<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="17px" height="17px" viewBox="0 0 892.000000 877.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,877.000000) scale(0.100000,-0.100000)" fill="currentcolor" stroke="none"><path d="M4365 8296 c-86 -27 -154 -88 -193 -174 -16 -34 -17 -213 -22 -2550 l-5 -2512 -75 53 c-279 197 -634 329 -1015 378 -129 17 -481 17 -610 0 -901 -116 -1574 -677 -1681 -1402 -92 -628 306 -1259 991 -1566 225 -102 440 -162 690 -194 129 -17 481 -17 610 0 674 86 1226 421 1513 916 86 149 149 344 171 530 7 61 11 686 11 1946 l0 1857 1413 -530 c916 -344 1430 -532 1463 -535 115 -12 238 58 290 164 l29 58 0 775 c0 720 -1 781 -19 855 -59 257 -147 430 -310 617 -115 131 -252 235 -409 308 -81 38 -2546 965 -2662 1001 -69 22 -123 23 -180 5z"/></g></svg>`

    /////////////////////////////////// CONFIG ///////////////////////////////////////

    function getLocalStorageDataFromKey(key) {
        return Spicetify.LocalStorage.get(key)
    }

    function setLocalStorageDataWithKey(key, value) {
        Spicetify.LocalStorage.set(key, value)
    }

    async function getConfig() {
        try {
            let parsed = JSON.parse(getLocalStorageDataFromKey("showGenre:settings"))
            if (parsed && typeof parsed === "object") {
                return parsed
            }
            throw "Config Error Show Genre"
        } catch {
            setLocalStorageDataWithKey("showGenre:settings", "{}")
            return {}
        }
    }

    const defaultSettings = {
        state: true,
        cached: {
            pop: "spotify:playlist:6gS3HhOiI17QNojjPuPzqc",
        },
    }

    let CONFIG = await getConfig()

    async function saveConfig(item, value) {
        if (item) {
            let tempConfig = await getConfig("showGenre:settings")
            tempConfig[item] = value
            setLocalStorageDataWithKey("showGenre:settings", JSON.stringify(tempConfig))
            return
        }
        setLocalStorageDataWithKey("showGenre:settings", JSON.stringify(CONFIG))
    }

    Object.keys(defaultSettings).forEach((key) => {
        if (CONFIG[key] == undefined) {
            CONFIG[key] = defaultSettings[key]
        }
    })

    await saveConfig()

    /////////////////////////////////// UTILS ///////////////////////////////////////

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    function camalize(str) {
        return capitalizeFirstLetter(str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()))
    }

    async function waitForElement(selector, timeout = null, location = document.body) {
        return new Promise((resolve) => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector))
            }

            let observer = new MutationObserver(async () => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector))
                    observer.disconnect()
                } else {
                    if (timeout) {
                        async function timeOver() {
                            return new Promise((resolve) => {
                                setTimeout(() => {
                                    observer.disconnect()
                                    resolve(false)
                                }, timeout)
                            })
                        }
                        resolve(await timeOver())
                    }
                }
            })

            observer.observe(location, {
                childList: true,
                subtree: true,
            })
        })
    }

    async function fetchGenres(artistURI) {
        const res = await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/artists/${artistURI}`)
        return res.genres
    }

    // get genre playlist made by "The Sounds of Spotify"
    async function fetchSoundOfSpotifyPlaylist(genre) {
        const cached = CONFIG.cached[camalize(genre)]
        if (cached !== null && cached !== undefined) {
            return cached
        }

        const re = new RegExp(`^the sound of ${genre.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i")
        const res = await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent("The Sound of " + genre)}&type=playlist`)

        for (const item of res.playlists.items) {
            if (item.owner.id === "thesoundsofspotify" && re.test(item.name)) {
                CONFIG.cached[camalize(genre)] = item.uri
                await saveConfig("cached", CONFIG.cached)
                return item.uri
            } else {
                return item.uri + "|||"
            }
        }
        return null
    }

    function getAllArtistsURIFromCurrentTrack() {
        let metadata = Spicetify.Player.data?.track.metadata
        let ArtistsURI = [metadata.artist_uri]
        for (let i = 1; i < 10; i++) {
            if (metadata[`artist_uri:${i}`]) {
                ArtistsURI.push(metadata[`artist_uri:${i}`])
            } else {
                break
            }
        }
        return ArtistsURI
    }

    async function getAllArtistsGenres(allArtistURI, src = null) {
        let allGenres = allArtistURI.map(async (uri) => {
            let artistGenre = await fetchGenres(uri.split(":")[2])
            return artistGenre
        })

        allGenres = await Promise.all(allGenres)
        allGenres = allGenres.flat(Infinity)

        if (allGenres.length == 0) {
            let targetedArtistID
            if (src == "artist") {
                targetedArtistID = allArtistURI[0].split(":")[2]
            } else if (src == "recursive") {
                return []
            } else {
                targetedArtistID = Spicetify.Player.data?.track.metadata.artist_uri.split(":")[2]
            }
            let artistRes = await Spicetify.CosmosAsync.get(`wg://artist/v1/${targetedArtistID}/desktop?format=json`)
            if (!artistRes.related_artists.artists) {
                return null
            }
            let tempAllArtistURI = artistRes.related_artists?.artists.map((artist) => artist.uri)

            let count = 5
            while (count != 25) {
                allGenres = await getAllArtistsGenres(tempAllArtistURI.slice(count - 5, count), "recursive")
                if (allGenres.length != 0) {
                    count = 25
                } else {
                    count += 5
                }
            }
        }

        allGenres = new Set(allGenres)
        allGenres = Array.from(allGenres)
        if (!src) allGenresForPopupModal = allGenres

        return allGenres.slice(0, 5)
    }

    async function injectGenre() {
        let allArtistURI = getAllArtistsURIFromCurrentTrack()
        let allGenres = await getAllArtistsGenres(allArtistURI)

        if (!allGenres) {
            allGenresForPopupModal = []
            removeGenresFromUI()
            return
        }

        let allGenreElements = allGenres.map(async (genre) => {
            const uri = await fetchSoundOfSpotifyPlaylist(genre)
            if (uri !== null) {
                return [
                    [
                        `<a href="${uri.includes("|||") ? '#"' + ' onclick="genrePopup()" ' : uri + '"'} style="color: var(--spice-subtext); font-size: 12px">${genre.replace(
                            /(^\w{1})|([\s-]+\w{1})/g,
                            (letter) => letter.toUpperCase()
                        )}</a>`,
                    ],
                    [`<span>, </span>`],
                ]
            }
        })

        allGenreElements = await Promise.all(allGenreElements)
        allGenreElements = allGenreElements.flat(Infinity)

        if (allGenreElements[allGenreElements.length - 1] == "<span>, </span>") {
            allGenreElements.pop()
        }

        allGenreElements = allGenreElements.join("")
        genreContainer.innerHTML = allGenreElements

        infoContainer = await waitForElement("div.main-trackInfo-container", 1000)
        infoContainer.appendChild(genreContainer)
    }

    /////////////////////////////////// UI ///////////////////////////////////////

    const { React } = Spicetify
    const { useState } = React

    let settingsMenuCSS = React.createElement(
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
            /* font-size: 13px; */
        }
        .popup-row .red {
            font-size: 13px;
            color: #59CE8F;
        }
        .popup-row .demo {
            font-size: 13px;
            color: #59CE8F;
        }
        .popup-row .little-space {
            margin-bottom: 10px;
        }
        .popup-row .inputbox {
            padding: 10px;
            border-radius: 15px;
            border: 0;
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
        }
        button.checkbox {
            align-items: center;
            color: var(--spice-text);
            cursor: pointer;
            display: flex;
            margin-inline-start: 12px;
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
        .green {
            background-color: #76ba99;
            color: #25316D;
        }
        .red {
            background-color: #A9555E;
        }
        .small-button.red {
            background-color: #A9555E !important;
        }
        input.small-input {
            padding: 5px !important;
            border-radius: 6px !important;
            right: 0px !important;
            margin: 5px;
        }
        .small-button {
            margin-right: 20px;
        }
        .popup-row .inputbox[type="color"] {
            background-color: var(--spice-custom-main-secondary) !important;
            padding: 0px;
            border-radius: 5px !important;
            border: none;
            margin-right: 10px;
        }
        .popup-row .inputbox[type="color"]::-webkit-color-swatch {
            border-radius: 5px !important;
            border: none;
        }
        .popup-row.search-div .col {
            position: relative;
        }
        .popup-row .nord-search-container {
            width: 100%;
        }
        .popup-row .nord-search-icon {
            position: absolute;
            margin: 10px;
        }
        .popup-row .nord-search {
            padding: 10px 36px !important;
            width: 100%;
        }
        .popup-row .display-none {
            display: none !important;
        }
        .GenericModal[aria-label*="Genres of"] .main-trackCreditsModal-header .tetrax-settings-discord-link {
            color: var(--spice-custom-success);
        }
        .GenericModal[aria-label*="Genres of"] .main-trackCreditsModal-header .tetrax-settings-discord-link:hover {
            color: var(--spice-custom-link-hover);
        }`
    )

    function ButtonItem({ name, color = "", onclickFun = () => {} }) {
        return React.createElement(
            "button",
            {
                className: `login-button${color}`,
                onClick: async () => {
                    onclickFun()
                },
            },
            name
        )
    }

    function GenreItem() {
        let [value, setValue] = useState(allGenresForPopupModal)

        Spicetify.Player.addEventListener("songchange", () => {
            setTimeout(() => {
                setValue(allGenresForPopupModal)
            }, 500)
        })

        return value.map((name) => {
            return React.createElement(ButtonItem, {
                name: name.replace(/(^\w{1})|([\s-]+\w{1})/g, (letter) => letter.toUpperCase()),
                onclickFun: async () => {
                    let uri = await fetchSoundOfSpotifyPlaylist(name)
                    if (uri === null || uri.includes("|||")) {
                        Spicetify.Platform.History.push(`/search/${name}/playlists`)
                    } else {
                        Spicetify.Platform.History.push(`/playlist/${uri.split(":")[2]}`)
                    }
                    Spicetify.PopupModal.hide()
                },
            })
        })
    }

    // get data from Last.FM
    async function fetchDataFromLastFM(artistName, trackName) {
        let url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${LFMApiKey}&artist=${encodeURIComponent(artistName)}&track=${encodeURIComponent(trackName)}&format=json`

        try {
            let initialRequest = await fetch(url)
            let response = await initialRequest.json()
            return response
        } catch (error) {
            console.log(error)
        }
    }

    async function updateLastFmTags() {
        let artistName = Spicetify.Player.data.track.metadata["artist_name"]
        let trackName = Spicetify.Player.data.track.metadata["title"]

        let res = await fetchDataFromLastFM(artistName, trackName)

        lastFmTags = []

        if (typeof res.track.toptags.tag == "undefined") return

        for (let tag of res.track.toptags.tag) {
            if (!/\d/.test(tag.name)) {
                lastFmTags.push(tag.name)
            }
        }
    }

    function lastFmTagItem() {
        if (lastFmTags.length == 0) {
            return React.createElement("div", null, null)
        }

        let [value, setValue] = useState(lastFmTags)
        Spicetify.Player.addEventListener("songchange", () => {
            setTimeout(() => {
                setValue(lastFmTags)
            }, 500)
        })

        return React.createElement(
            "div",
            null,
            React.createElement("div", { className: "popup-row" }, React.createElement("hr", { className: "space" }, null)),
            React.createElement("div", { className: "popup-row" }, React.createElement("h1", { className: "div-title" }, "Last FM Tags")),
            value.map((name) => {
                return React.createElement(ButtonItem, {
                    name: name.replace(/(^\w{1})|([\s-]+\w{1})/g, (letter) => letter.toUpperCase()),
                    onclickFun: async () => {
                        Spicetify.Platform.History.push(`/search/${name}/playlists`)
                        Spicetify.PopupModal.hide()
                    },
                })
            })
        )
    }

    let settingsDOMContent = React.createElement(
        "div",
        null,
        settingsMenuCSS,
        React.createElement("p", { className: "popup-row" }, "Tip: You can right click on genres in the Player Bar to open this Popup"),
        React.createElement("div", { className: "popup-row" }, React.createElement("hr", { className: "space" }, null)),
        React.createElement(GenreItem, null, null),
        React.createElement(lastFmTagItem, null, null)
    )

    function genrePopup() {
        Spicetify.PopupModal.display({
            title:
                `Genres of "` +
                Spicetify.Player.data.track.metadata.title
                    .replace(/\(.+?\)/g, "")
                    .replace(/\[.+?\]/g, "")
                    .replace(/\s\-\s.+?$/, "")
                    .replace(/,.+?$/, "")
                    .trim() +
                `"`,
            content: settingsDOMContent,
            isLarge: true,
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

    /////////////////////////////////// MAIN ///////////////////////////////////////

    let infoContainer, genreContainer
    ;(function initMain() {
        if (!Spicetify.Player.data) {
            setTimeout(initMain, 1000)
            return
        }
        main()
    })()

    async function removeGenresFromUI() {
        infoContainer = await waitForElement("div.main-trackInfo-container", 1000)
        try {
            infoContainer.removeChild(genreContainer)
        } catch (error) {}
    }

    async function updateGenres() {
        if (!CONFIG.state || Spicetify.Player.data.track.metadata.is_local || Spicetify.URI.fromString(Spicetify.Player.data.track.uri).type !== "track") {
            removeGenresFromUI()
            return
        }
        injectGenre()
        updateLastFmTags()
    }

    function artistPageGenreOnClick(dataValue) {
        Spicetify.Platform.History.push(`/search/${dataValue}/playlists`)
    }

    async function makeDOMForArtistPage(allGenres) {
        if (!allGenres) return
        let allGenreElements = allGenres.map(async (genre) => {
            const uri = await fetchSoundOfSpotifyPlaylist(genre)
            if (uri !== null) {
                return [
                    [
                        `<a class="main-entityHeader-genreLink" href="${
                            uri.includes("|||") ? '#"' + ` data-value="${genre}" onclick="artistPageGenreOnClick(this.getAttribute('data-value'))" ` : uri + '"'
                        } style="color: var(--spice-subtext); font-size: 1rem">${genre.replace(/(^\w{1})|([\s-]+\w{1})/g, (letter) => letter.toUpperCase())}</a>`,
                    ],
                    [`<span>, </span>`],
                ]
            }
        })

        allGenreElements = await Promise.all(allGenreElements)
        allGenreElements = allGenreElements.flat(Infinity)

        if (allGenreElements[allGenreElements.length - 1] == "<span>, </span>") {
            allGenreElements.pop()
        }

        allGenreElements.unshift("<span>Artist Genres : </span>")
        allGenreElements = allGenreElements.join("")
        let genreContainer = document.createElement("div")
        genreContainer.className = "main-entityHeader-detailsText genre-container"
        genreContainer.innerHTML = allGenreElements

        try {
            document.querySelector(".genre-container").remove()
        } catch (err) {}

        let infoContainer = await waitForElement("div.main-entityHeader-headerText", 1000)
        let monthlyListeners = await waitForElement("span.main-entityHeader-detailsText", 1000)
        infoContainer.insertBefore(genreContainer, monthlyListeners)
    }

    async function updateArtistPage(pathname) {
        let pathData = pathname.split("/")
        if (!(pathData[1] == "artist" && pathData.length == 3)) return

        let artistGenres = await getAllArtistsGenres(["spotify:artist:" + pathData[2]], "artist")
        makeDOMForArtistPage(artistGenres)
    }

    async function main() {
        infoContainer = await waitForElement("div.main-trackInfo-container", 1000)

        genreContainer = document.createElement("div")
        genreContainer.className = "main-trackInfo-genres ellipsis-one-line main-type-finale"

        genreContainer.addEventListener("contextmenu", genrePopup)

        updateGenres()

        Spicetify.Player.addEventListener("songchange", updateGenres)

        updateArtistPage(Spicetify.Platform.History.location.pathname)

        Spicetify.Platform.History.listen((data) => {
            updateArtistPage(data.pathname)
        })

        if (Spicetify.Playbar?.Widget) {
            new Spicetify.Playbar.Widget(
                CONFIG.state ? "Hide Spotify Genres" : "Show Spotify Genres",
                CONFIG.state ? iconActive : icon,
                (element) => {
                    if (CONFIG.state) {
                        element.icon = icon
                        element.label = "Show Spotify Genres"
                        CONFIG.state = false
                    } else {
                        element.icon = iconActive
                        element.label = "Hide Spotify Genres"
                        CONFIG.state = true
                    }

                    saveConfig("state", CONFIG.state)
                    updateGenres()
                },
                false
            )
        }
    }
})()

// Styles of .ellipsis-one-line and .main-type-finale in case lost.

// .ellipsis-one-line {
//     overflow: hidden;
//     text-overflow: ellipsis;
//     white-space: nowrap;
// }
// .main-type-finale {
//     font-size: 0.6875rem;
//     font-weight: 400;
//     font-family: var(--font-family, CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, var(--fallback-fonts, sans-serif));
// }
