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
    let SkipLikedSongsKey = "SkipLikedSongs";

    function isLocalStorageInitialized() {
        if (getLocalStorageDataFromKey(SkipLikedSongsKey) == null) {
            return false;
        }
        return true;
    }

    function InitializeLocalStorage() {
        if (getLocalStorageDataFromKey(SkipLikedSongsKey) == null) {
            setLocalStorageDataWithKey(SkipLikedSongsKey, false);
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

        function likedSongsMode(name) {
            if (name == "play") {
                Spicetify.Player.removeEventListener("songchange", skip.callAddEventListener);
                Spicetify.Player.removeEventListener("songchange", play.callAddEventListener);
                Spicetify.Player.addEventListener("songchange", play.callAddEventListener);
            }

            if (name == "skip") {
                Spicetify.Player.removeEventListener("songchange", skip.callAddEventListener);
                Spicetify.Player.removeEventListener("songchange", play.callAddEventListener);
                Spicetify.Player.addEventListener("songchange", skip.callAddEventListener);
            }

            if (name == "disable") {
                Spicetify.Player.removeEventListener("songchange", skip.callAddEventListener);
                Spicetify.Player.removeEventListener("songchange", play.callAddEventListener);
            }
        }

        let isPlayLikedSongs = getLocalStorageDataFromKey(SkipLikedSongsKey) === "false";
        let isSkipLikedSongs = getLocalStorageDataFromKey(SkipLikedSongsKey) === "true";
        let isDisable = getLocalStorageDataFromKey(SkipLikedSongsKey) === "disable";

        if (getLocalStorageDataFromKey(SkipLikedSongsKey) == "true") {
            likedSongsMode("skip");
        }

        if (getLocalStorageDataFromKey(SkipLikedSongsKey) == "false") {
            likedSongsMode("play");
        }

        if (getLocalStorageDataFromKey(SkipLikedSongsKey) == "disable") {
            likedSongsMode("disable");
        }

        let play_Liked_Songs = new Spicetify.Menu.Item("Play Liked Only", isPlayLikedSongs, () => {
            setLocalStorageDataWithKey(SkipLikedSongsKey, false);
            play_Liked_Songs.setState(true);
            skip_Liked_Songs.setState(false);
            disable.setState(false);
            likedSongsMode("play");
        });

        let skip_Liked_Songs = new Spicetify.Menu.Item("Skip Liked", isSkipLikedSongs, () => {
            setLocalStorageDataWithKey(SkipLikedSongsKey, true);
            play_Liked_Songs.setState(false);
            skip_Liked_Songs.setState(true);
            disable.setState(false);
            likedSongsMode("skip");
        });

        let disable = new Spicetify.Menu.Item("Disable", isDisable, () => {
            setLocalStorageDataWithKey(SkipLikedSongsKey, "disable");
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
        InitializeLocalStorage();
        main();
    }
}
