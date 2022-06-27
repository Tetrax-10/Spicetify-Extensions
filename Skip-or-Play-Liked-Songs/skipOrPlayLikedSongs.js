// @ts-chec

// NAME: Skip or Play Liked Songs
// AUTHOR: Tetrax-10
// DESCRIPTION: Skip or Play liked songs only

/// <reference path="../globals.d.ts" />
let skipOrPlayLikedSongsCount = 0;
(async function skipOrPlayLikedSongs() {
    if (!(Spicetify.Platform && Spicetify.LocalStorage && Spicetify.Player.data) && skipOrPlayLikedSongsCount < 200) {
        setTimeout(skipOrPlayLikedSongs, 300);
        skipOrPlayLikedSongsCount++;
        return;
    }
    initSkipOrPlayLikedSongs();
})();

function initSkipOrPlayLikedSongs() {
    let skipLikedSongsKey = "SkipLikedSongs";

    function isLocalStorageInitialized() {
        if (getLocalStorageDataFromKey(skipLikedSongsKey) == null) {
            return false;
        }
        return true;
    }

    function initializeLocalStorage() {
        if (getLocalStorageDataFromKey(skipLikedSongsKey) == null) {
            setLocalStorageDataWithKey(skipLikedSongsKey, false);
        }
    }

    function getLocalStorageDataFromKey(key) {
        return Spicetify.LocalStorage.get(key);
    }

    function setLocalStorageDataWithKey(key, value) {
        Spicetify.LocalStorage.set(key, value);
    }

    function sleep(delay) {
        let start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    }

    function main() {
        let count = 0;
        function isLiked() {
            if (Spicetify.Player.data.track.metadata["collection.in_collection"] == "true") {
                return true;
            } else {
                return false;
            }
        }

        function playLikedOnly() {
            if (count <= 49) {
                if (!isLiked()) {
                    Spicetify.Player.next();
                } else {
                    count = 0;
                }
            }
            if (count == 50) {
                Spicetify.showNotification("Skiped 50 Songs, So 1 min Cooldown to avoid Crash");
                setTimeout(() => {
                    count = 0;
                    Spicetify.showNotification("You can Start Skiping Songs Now");
                }, 60000);
            }
            if (count == 79) {
                Spicetify.showNotification("Stop skipping Songs for that 1 min To Avoid Crash");
            }
            if (count == 85) {
                Spicetify.showNotification("Just wait for that 1m, you will get a Message after that 1 min");
            }
            if (count == 95) {
                Spicetify.showNotification("5 More Skips to Crash!");
            }
            count++;
        }

        function skipLiked() {
            if (count <= 49) {
                if (isLiked()) {
                    Spicetify.Player.next();
                } else {
                    count = 0;
                }
            }
            if (count == 50) {
                Spicetify.showNotification("Skiped 50 Songs, So 1 min Cooldown to avoid Crash");
                setTimeout(() => {
                    count = 0;
                    Spicetify.showNotification("You can Start Skiping Songs Now");
                }, 60000);
            }
            if (count == 79) {
                Spicetify.showNotification("Stop skipping Songs for that 1 min To Avoid Crash");
            }
            if (count == 85) {
                Spicetify.showNotification("Just wait for that 1m, you will get a Message after that 1 min");
            }
            if (count == 95) {
                Spicetify.showNotification("5 More Skips to Crash!");
            }
            count++;
        }

        function likedSongsMode(mode) {
            if (mode == "play") {
                playLikedOnly();
                likedSongsMode("disable");
                Spicetify.Player.addEventListener("songchange", playLikedOnly);
            }

            if (mode == "skip") {
                likedSongsMode("disable");
                Spicetify.Player.addEventListener("songchange", skipLiked);
            }

            if (mode == "disable") {
                Spicetify.Player.removeEventListener("songchange", skipLiked);
                Spicetify.Player.removeEventListener("songchange", playLikedOnly);
            }
        }

        let isPlayLikedSongs = getLocalStorageDataFromKey(skipLikedSongsKey) === "false";
        let isSkipLikedSongs = getLocalStorageDataFromKey(skipLikedSongsKey) === "true";
        let isDisable = getLocalStorageDataFromKey(skipLikedSongsKey) === "disable";

        if (getLocalStorageDataFromKey(skipLikedSongsKey) == "false") {
            likedSongsMode("disable");
            Spicetify.Player.addEventListener("songchange", playLikedOnly);
        }
        if (getLocalStorageDataFromKey(skipLikedSongsKey) == "true") {
            likedSongsMode("disable");
            Spicetify.Player.addEventListener("songchange", skipLiked);
        }
        if (getLocalStorageDataFromKey(skipLikedSongsKey) == "disable") {
            likedSongsMode("disable");
        }

        let play_Liked_Songs = new Spicetify.Menu.Item("Play Liked Only", isPlayLikedSongs, () => {
            setLocalStorageDataWithKey(skipLikedSongsKey, false);
            play_Liked_Songs.setState(true);
            skip_Liked_Songs.setState(false);
            disable.setState(false);
            likedSongsMode("disable");
            Spicetify.Player.addEventListener("songchange", playLikedOnly);
        });

        let skip_Liked_Songs = new Spicetify.Menu.Item("Skip Liked", isSkipLikedSongs, () => {
            setLocalStorageDataWithKey(skipLikedSongsKey, true);
            play_Liked_Songs.setState(false);
            skip_Liked_Songs.setState(true);
            disable.setState(false);
            likedSongsMode("disable");
            Spicetify.Player.addEventListener("songchange", skipLiked);
        });

        let disable = new Spicetify.Menu.Item("Disable", isDisable, () => {
            setLocalStorageDataWithKey(skipLikedSongsKey, "disable");
            skip_Liked_Songs.setState(false);
            play_Liked_Songs.setState(false);
            disable.setState(true);
            likedSongsMode("disable");
        });

        new Spicetify.Menu.SubMenu("Play/Skip Liked Songs", [play_Liked_Songs, skip_Liked_Songs, disable]).register();
    }

    if (isLocalStorageInitialized()) {
        main();
    } else {
        initializeLocalStorage();
        main();
    }
}
