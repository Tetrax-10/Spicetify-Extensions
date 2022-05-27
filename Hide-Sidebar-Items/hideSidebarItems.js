// @ts-chec

// NAME: Hide Sidebar Items
// AUTHOR: Tetrax-10
// DESCRIPTION: Hide sidebar items like liked songs, create playlist, your podcast.

/// <reference path="../globals.d.ts" />

// Just change the value to false to disable that feature
// I use hide podcast extension so i disable Hide_Your_Episodes_Feature
let SETTINGS_Hide_Sidebar_Items = {
    Hide_Liked_Songs_Feature: true,
    Hide_Create_Playlist_Feature: true,
    Hide_Your_Episodes_Feature: true,
};

(async function hideSidebarItems() {
    const { Platform } = Spicetify;
    if (!Platform) {
        setTimeout(hideSidebarItems, 300);
        return;
    }
    init();
})();

function initHideSidebarItems() {
    likedSongkey = "hideLikedSongs";
    createPlaylistkey = "hideCreatePlaylist";
    yourPodcastKey = "hideYourPodcast";

    function isLocalStorageInitialized() {
        if (getLocalStorageDataFromKey(likedSongkey) === null || getLocalStorageDataFromKey(createPlaylistkey) === null || getLocalStorageDataFromKey(yourPodcastKey) === null) {
            return false;
        }
        return true;
    }

    function InitializeLocalStorage() {
        if (getLocalStorageDataFromKey(likedSongkey) === null) {
            setLocalStorageDataWithKey(likedSongkey, true);
        }
        if (getLocalStorageDataFromKey(createPlaylistkey) === null) {
            setLocalStorageDataWithKey(createPlaylistkey, true);
        }
        if (getLocalStorageDataFromKey(yourPodcastKey) === null) {
            setLocalStorageDataWithKey(yourPodcastKey, true);
        }
    }

    function setLocalStorageDataWithKey(key, value) {
        Spicetify.LocalStorage.set(key, value);
    }

    function getLocalStorageDataFromKey(key) {
        return Spicetify.LocalStorage.get(key);
    }

    function selectItem(item) {
        return document.querySelector(`${item}`).parentNode;
    }

    function hideElement(item) {
        selectItem(item).classList.add("sidebar-item-hide");
    }

    function unHideElement(item) {
        selectItem(item).classList.remove("sidebar-item-hide");
    }

    function condition(value, element) {
        if (value) {
            hideElement(element);
        } else {
            unHideElement(element);
        }
    }

    function injectCSS() {
        let body = document.querySelector("body");
        if (!body.classList.contains("hide-sidebaritems--style-injected")) {
            let style = document.createElement("style");

            style.innerHTML = `.hide-sidebaritems--style-injected .sidebar-item-hide {
                display: none !important;
            }`;

            body.appendChild(style);
            body.classList.add("hide-sidebaritems--style-injected");
        }
    }

    function main() {
        injectCSS();

        let likedSongs = 'a[href="/collection/tracks"]';
        let createPlaylist = ".IPVjkkhh06nan7aZK7Bx";
        let yourPodcast = 'a[href="/collection/episodes"]';

        let isLikedSongsHide = getLocalStorageDataFromKey(likedSongkey) === "true";
        let isCreatePlaylisHide = getLocalStorageDataFromKey(createPlaylistkey) === "true";
        let isYourPodcastHide = getLocalStorageDataFromKey(createPlaylistkey) === "true";

        if (SETTINGS_Hide_Sidebar_Items.Hide_Liked_Songs_Feature) {
            condition(isLikedSongsHide, likedSongs);

            new Spicetify.Menu.Item("Hide Liked Songs", isLikedSongsHide, (self) => {
                isLikedSongsHide = !isLikedSongsHide;
                Spicetify.LocalStorage.set(likedSongkey, isLikedSongsHide ? true : false);
                self.setState(isLikedSongsHide);
                condition(isLikedSongsHide, likedSongs);
            }).register();
        }

        if (SETTINGS_Hide_Sidebar_Items.Hide_Create_Playlist_Feature) {
            condition(isCreatePlaylisHide, createPlaylist);

            new Spicetify.Menu.Item("Hide Create Playlist", isCreatePlaylisHide, (self) => {
                isCreatePlaylisHide = !isCreatePlaylisHide;
                Spicetify.LocalStorage.set(createPlaylistkey, isCreatePlaylisHide ? true : false);
                self.setState(isCreatePlaylisHide);
                condition(isCreatePlaylisHide, createPlaylist);
            }).register();
        }

        if (SETTINGS_Hide_Sidebar_Items.Hide_Your_Episodes_Feature) {
            condition(isYourPodcastHide, yourPodcast);

            new Spicetify.Menu.Item("Hide Your Podacast", isYourPodcastHide, (self) => {
                isYourPodcastHide = !isYourPodcastHide;
                Spicetify.LocalStorage.set(yourPodcastKey, isYourPodcastHide ? true : false);
                self.setState(isYourPodcastHide);
                condition(isYourPodcastHide, yourPodcast);
            }).register();
        }
    }

    if (isLocalStorageInitialized()) {
        main();
    } else {
        InitializeLocalStorage();
        main();
    }
}
