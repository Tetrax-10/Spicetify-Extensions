let localStorageKey = "playOnYouTube"

const defaultSettings = {
    cached: {
        "spotify:track:4oBhE31sIakxf8bSPHuRT1": "ixkoVwKQaJg",
    },
    YouTubeApiKey: "",
    backupApiKeys: [],
}

/////////////////////////////////// CONFIG ///////////////////////////////////////

export function getLocalStorage(key) {
    return localStorage.getItem(key)
}

export function setLocalStorage(key, value) {
    localStorage.setItem(key, value)
}

function makeConfig(tempConfig) {
    Object.keys(defaultSettings).forEach((key) => {
        if (tempConfig[key] === undefined) {
            tempConfig[key] = defaultSettings[key]
        }
    })
    Object.keys(tempConfig).forEach((key) => {
        if (defaultSettings[key] === undefined) {
            delete tempConfig[key]
        }
    })

    saveConfig(tempConfig)
    return tempConfig
}

function initConfig() {
    try {
        let tempConfig = JSON.parse(getLocalStorage(`${localStorageKey}:settings`))
        if (tempConfig && typeof tempConfig === "object") {
            return makeConfig(tempConfig)
        }
        throw ""
    } catch {
        return makeConfig({})
    }
}

let CONFIG = initConfig("init")

export function saveConfig(item, value) {
    if (item && typeof item === "string" && value !== undefined) {
        let tempConfig = initConfig()
        tempConfig[item] = value
        setLocalStorage(`${localStorageKey}:settings`, JSON.stringify(tempConfig))
        return
    }
    if (item && typeof item === "object") {
        setLocalStorage(`${localStorageKey}:settings`, JSON.stringify(item))
        return
    }
    setLocalStorage(`${localStorageKey}:settings`, JSON.stringify(CONFIG))
}

export function getConfig() {
    return CONFIG
}
