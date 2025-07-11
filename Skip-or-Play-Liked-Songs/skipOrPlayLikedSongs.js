// @ts-chec

// NAME: Skip or Play Liked Songs
// AUTHOR: Tetrax-10
// DESCRIPTION: Skip or Play liked songs only

/// <reference path="../dev/globals.d.ts" />
;(async function skipOrPlayLikedSongs() {
    while (!(Spicetify?.Platform && Spicetify?.LocalStorage && Spicetify?.Player?.data)) {
        await new Promise((resolve) => setTimeout(resolve, 10))
    }

    let skipLikedSongsKey = "SkipLikedSongs"

    function isLocalStorageInitialized() {
        if (getLocalStorageDataFromKey(skipLikedSongsKey) == null) {
            return false
        }
        return true
    }

    function initializeLocalStorage() {
        if (getLocalStorageDataFromKey(skipLikedSongsKey) == null) {
            Spicetify.showNotification("Only Liked Songs will be Played as default")
            setTimeout(() => {
                Spicetify.showNotification("You can Change it in Context Menu Located on Top under User Profile", false, 5000)
            }, 5000)
            setLocalStorageDataWithKey(skipLikedSongsKey, false)
        }
    }

    function getLocalStorageDataFromKey(key) {
        return Spicetify.LocalStorage.get(key)
    }

    function setLocalStorageDataWithKey(key, value) {
        Spicetify.LocalStorage.set(key, value)
    }

    function main() {
        let count = 0

        function isLiked() {
            if (Spicetify.Player.data.item.metadata["collection.in_collection"] == "true") {
                return true
            } else {
                return false
            }
        }

        function playLikedOnly() {
            if (count <= 79) {
                if (!isLiked()) {
                    Spicetify.Player.next()
                } else {
                    count = 0
                }
            }
            if (count == 80) {
                Spicetify.showNotification("Skiped 80 Songs, So 1 min Cooldown to avoid Crash, please avoid skipping songs for a min", false, 6000)
                setTimeout(() => {
                    count = 0
                    Spicetify.showNotification("You can Start Skiping Songs Now")
                }, 60000)
            }
            if (count == 95) {
                Spicetify.showNotification("5 More Skips to Crash!")
            }
            count++
        }

        function skipLiked() {
            if (count <= 79) {
                if (isLiked()) {
                    Spicetify.Player.next()
                } else {
                    count = 0
                }
            }
            if (count == 80) {
                Spicetify.showNotification("Skiped 80 Songs, So 1 min Cooldown to avoid Crash, please avoid skipping songs for a min", false, 6000)
                setTimeout(() => {
                    count = 0
                    Spicetify.showNotification("You can Start Skiping Songs Now")
                }, 60000)
            }
            if (count == 95) {
                Spicetify.showNotification("5 More Skips to Crash!")
            }
            count++
        }

        function likedSongsMode(mode) {
            if (mode == "play") {
                playLikedOnly()
                Spicetify.Player.addEventListener("songchange", playLikedOnly)
            }

            if (mode == "skip") {
                skipLiked()
                Spicetify.Player.addEventListener("songchange", skipLiked)
            }

            if (mode == "disable") {
                Spicetify.Player.removeEventListener("songchange", skipLiked)
                Spicetify.Player.removeEventListener("songchange", playLikedOnly)
            }
        }

        let isPlayLikedSongs = getLocalStorageDataFromKey(skipLikedSongsKey) === "false"
        let isSkipLikedSongs = getLocalStorageDataFromKey(skipLikedSongsKey) === "true"
        let isDisable = getLocalStorageDataFromKey(skipLikedSongsKey) === "disable"

        if (getLocalStorageDataFromKey(skipLikedSongsKey) == "false") {
            likedSongsMode("disable")
            likedSongsMode("play")
        }
        if (getLocalStorageDataFromKey(skipLikedSongsKey) == "true") {
            likedSongsMode("disable")
            likedSongsMode("skip")
        }
        if (getLocalStorageDataFromKey(skipLikedSongsKey) == "disable") {
            likedSongsMode("disable")
        }

        let playLikedSongs = new Spicetify.Menu.Item("Play Liked Only", isPlayLikedSongs, () => {
            setLocalStorageDataWithKey(skipLikedSongsKey, false)
            playLikedSongs.setState(true)
            skipLikedSongs.setState(false)
            disable.setState(false)
            likedSongsMode("disable")
            likedSongsMode("play")
        })

        let skipLikedSongs = new Spicetify.Menu.Item("Skip Liked", isSkipLikedSongs, () => {
            setLocalStorageDataWithKey(skipLikedSongsKey, true)
            playLikedSongs.setState(false)
            skipLikedSongs.setState(true)
            disable.setState(false)
            likedSongsMode("disable")
            likedSongsMode("skip")
        })

        let disable = new Spicetify.Menu.Item("Disable", isDisable, () => {
            setLocalStorageDataWithKey(skipLikedSongsKey, "disable")
            skipLikedSongs.setState(false)
            playLikedSongs.setState(false)
            disable.setState(true)
            likedSongsMode("disable")
        })

        new Spicetify.Menu.SubMenu("Play/Skip Liked Songs", [playLikedSongs, skipLikedSongs, disable]).register()
    }

    if (isLocalStorageInitialized()) {
        main()
    } else {
        initializeLocalStorage()
        main()
    }
})()
