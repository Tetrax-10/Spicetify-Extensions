// @ts-chec

// NAME: Skip or Play Liked Songs
// AUTHOR: Tetrax-10
// DESCRIPTION: Skip or Play liked songs only

/// <reference path="../globals.d.ts" />

(async function skipOrPlayLikedSongs() {
    const { Platform } = Spicetify;
    if (!(Platform && Spicetify.LocalStorage)) {
        setTimeout(skipOrPlayLikedSongs, 300);
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

    function main() {
        let play = {
            removeEventListeners() {
                Spicetify.Player.removeEventListener("onprogress", play.removeEventListeners);
                if (!Spicetify.Player.getHeart()) {
                    Spicetify.Player.next();
                }
                return;
            },

            addEventListeners() {
                Spicetify.Player.addEventListener("onprogress", play.removeEventListeners);
            },

            callAddEventListener() {
                setTimeout(play.addEventListeners, 500);
            },
        };

        let skip = {
            removeEventListeners() {
                Spicetify.Player.removeEventListener("onprogress", skip.removeEventListeners);
                if (Spicetify.Player.getHeart()) {
                    Spicetify.Player.next();
                }
                return;
            },

            addEventListeners() {
                Spicetify.Player.addEventListener("onprogress", skip.removeEventListeners);
            },

            callAddEventListener() {
                setTimeout(skip.addEventListeners, 500);
            },
        };

        function likedSongsMode(mode) {
            if (mode == "play") {
                Spicetify.Player.removeEventListener("songchange", skip.callAddEventListener);
                Spicetify.Player.removeEventListener("songchange", play.callAddEventListener);
                Spicetify.Player.addEventListener("songchange", play.callAddEventListener);
            }

            if (mode == "skip") {
                Spicetify.Player.removeEventListener("songchange", skip.callAddEventListener);
                Spicetify.Player.removeEventListener("songchange", play.callAddEventListener);
                Spicetify.Player.addEventListener("songchange", skip.callAddEventListener);
            }

            if (mode == "disable") {
                Spicetify.Player.removeEventListener("songchange", skip.callAddEventListener);
                Spicetify.Player.removeEventListener("songchange", play.callAddEventListener);
            }
        }

        let isPlayLikedSongs = getLocalStorageDataFromKey(skipLikedSongsKey) === "false";
        let isSkipLikedSongs = getLocalStorageDataFromKey(skipLikedSongsKey) === "true";
        let isDisable = getLocalStorageDataFromKey(skipLikedSongsKey) === "disable";

        if (getLocalStorageDataFromKey(skipLikedSongsKey) == "false") {
            likedSongsMode("play");
        }
        if (getLocalStorageDataFromKey(skipLikedSongsKey) == "true") {
            likedSongsMode("skip");
        }
        if (getLocalStorageDataFromKey(skipLikedSongsKey) == "disable") {
            likedSongsMode("disable");
        }

        let play_Liked_Songs = new Spicetify.Menu.Item("Play Liked Only", isPlayLikedSongs, () => {
            setLocalStorageDataWithKey(skipLikedSongsKey, false);
            play_Liked_Songs.setState(true);
            skip_Liked_Songs.setState(false);
            disable.setState(false);
            likedSongsMode("play");
        });

        let skip_Liked_Songs = new Spicetify.Menu.Item("Skip Liked", isSkipLikedSongs, () => {
            setLocalStorageDataWithKey(skipLikedSongsKey, true);
            play_Liked_Songs.setState(false);
            skip_Liked_Songs.setState(true);
            disable.setState(false);
            likedSongsMode("skip");
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
