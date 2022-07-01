// @ts-chec

// NAME: Hide Items
// AUTHOR: Tetrax-10
// DESCRIPTION: Hides Some Useless Items

/// <reference path="../globals.d.ts" />

// Just change the value to false to disable that feature
// I use hide podcast extension so i disable Hide_Your_Podcast_Feature

let SETTINGS_Hide_Items = {
    Hide_Liked_Songs_Feature: true,
    Hide_Create_Playlist_Feature: true,
    Hide_Your_Podcast_Feature: true,
    Hide_Homepage_Charts_Feature: true, // beta development
};

// If you want to see a Chart you can add its name below and apply the extension
let UNHIDE_Home_Charts = ["Your playlists", "Popular new releases"];

(async function hideItems() {
    if (!(Spicetify.Platform && Spicetify.LocalStorage && document.querySelector("section[data-testid='home-page']"))) {
        setTimeout(hideItems, 300);
        return;
    }
    initHideItems();
})();

function initHideItems() {
    let likedSongskey = "hideLikedSongs";
    let createPlaylistkey = "hideCreatePlaylist";
    let yourPodcastKey = "hideYourPodcast";
    let homePageChartsKey = "hideHomePageCharts";

    let likedSongs = 'a[href="/collection/tracks"]';
    let createPlaylist = ".main-createPlaylistButton-button";
    let yourPodcast = 'a[href="/collection/episodes"]';
    let homePageCharts = '.main-shelf-shelf:not([aria-label="Recently played"])';
    let allHomePageCharts = [];
    selectItem(homePageCharts).forEach((element) => {
        allHomePageCharts.push(element.getAttribute("aria-label"));
    });

    let isLikedSongsHide = getLocalStorageDataFromKey(likedSongskey) === "true";
    let isCreatePlaylisHide = getLocalStorageDataFromKey(createPlaylistkey) === "true";
    let isYourPodcastHide = getLocalStorageDataFromKey(yourPodcastKey) === "true";
    let isHomePageChartsHide = getLocalStorageDataFromKey(homePageChartsKey) === "true";

    let Hide_Liked_Songs;
    let Hide_Create_Playlist;
    let Hide_Your_Podcast;
    let Hide_Homepage_Charts;

    let itemsKeyArray = [likedSongskey, createPlaylistkey, yourPodcastKey, homePageChartsKey];
    let menuArray = [];

    function isLocalStorageInitialized() {
        itemsKeyArray.forEach((item) => {
            if (getLocalStorageDataFromKey(item) === null) {
                return false;
            }
            return true;
        });
    }

    function initializeLocalStorage() {
        itemsKeyArray.forEach((item) => {
            if (getLocalStorageDataFromKey(item) === null) {
                setLocalStorageDataWithKey(item, true);
            }
            return true;
        });
    }

    function setLocalStorageDataWithKey(key, value) {
        Spicetify.LocalStorage.set(key, value);
    }

    function getLocalStorageDataFromKey(key) {
        return Spicetify.LocalStorage.get(key);
    }

    function selectItem(item) {
        if (item == likedSongs || item == createPlaylist || item == yourPodcast) {
            return document.querySelector(item).parentNode;
        }
        if (item == homePageCharts) {
            return document.querySelectorAll(item);
        }
        return document.querySelector(item);
    }

    function hideElement(item) {
        if (item == homePageCharts) {
            selectItem(item).forEach((element) => {
                if (!UNHIDE_Home_Charts.includes(element.getAttribute("aria-label"))) {
                    element.classList.add("hide-item");
                }
            });
            return;
        }
        selectItem(item).classList.add("hide-item");
    }

    function unHideElement(item) {
        if (item == homePageCharts) {
            selectItem(item).forEach((element) => {
                if (!UNHIDE_Home_Charts.includes(element.getAttribute("aria-label"))) {
                    element.classList.remove("hide-item");
                }
            });
            return;
        }
        selectItem(item).classList.remove("hide-item");
    }

    function condition(item, value) {
        if (value) {
            hideElement(item);
        } else {
            unHideElement(item);
        }
    }

    function injectCSS() {
        let body = selectItem("body");
        if (!body.classList.contains("hide-items--style-injected")) {
            let style = document.createElement("style");

            style.innerHTML = `.hide-items--style-injected .hide-item {
                display: none !important;
            }`;

            body.appendChild(style);
            body.classList.add("hide-items--style-injected");
        }
    }

    function main() {
        if (SETTINGS_Hide_Items.Hide_Liked_Songs_Feature) {
            if (!selectItem(likedSongs)) {
                SETTINGS_Hide_Items.Hide_Liked_Songs_Feature = false;
                console.log("can't find liked songs");
            }
        }
        if (SETTINGS_Hide_Items.Hide_Create_Playlist_Feature) {
            if (!selectItem(createPlaylist)) {
                SETTINGS_Hide_Items.Hide_Create_Playlist_Feature = false;
                console.log("can't find create playlist");
            }
        }
        if (SETTINGS_Hide_Items.Hide_Your_Podcast_Feature) {
            if (!selectItem(yourPodcast)) {
                SETTINGS_Hide_Items.Hide_Your_Podcast_Feature = false;
                console.log("can't find your episodes");
            }
        }
        if (SETTINGS_Hide_Items.Hide_Homepage_Charts_Feature) {
            if (!selectItem(homePageCharts)) {
                SETTINGS_Hide_Items.Hide_Homepage_Charts_Feature = false;
                console.log("can't find charts in home page");
            }
        }

        injectCSS();

        if (SETTINGS_Hide_Items.Hide_Liked_Songs_Feature) {
            condition(likedSongs, isLikedSongsHide);

            Hide_Liked_Songs = new Spicetify.Menu.Item("Hide Liked Songs", isLikedSongsHide, (self) => {
                isLikedSongsHide = !isLikedSongsHide;
                setLocalStorageDataWithKey(likedSongskey, isLikedSongsHide ? true : false);
                self.setState(isLikedSongsHide);
                condition(likedSongs, isLikedSongsHide);
            });

            menuArray.push(Hide_Liked_Songs);
        }

        if (SETTINGS_Hide_Items.Hide_Create_Playlist_Feature) {
            condition(createPlaylist, isCreatePlaylisHide);

            Hide_Create_Playlist = new Spicetify.Menu.Item("Hide Create Playlist", isCreatePlaylisHide, (self) => {
                isCreatePlaylisHide = !isCreatePlaylisHide;
                setLocalStorageDataWithKey(createPlaylistkey, isCreatePlaylisHide ? true : false);
                self.setState(isCreatePlaylisHide);
                condition(createPlaylist, isCreatePlaylisHide);
            });

            menuArray.push(Hide_Create_Playlist);
        }

        if (SETTINGS_Hide_Items.Hide_Your_Podcast_Feature) {
            condition(yourPodcast, isYourPodcastHide);

            Hide_Your_Podcast = new Spicetify.Menu.Item("Hide Your Podcast", isYourPodcastHide, (self) => {
                isYourPodcastHide = !isYourPodcastHide;
                setLocalStorageDataWithKey(yourPodcastKey, isYourPodcastHide ? true : false);
                self.setState(isYourPodcastHide);
                condition(yourPodcast, isYourPodcastHide);
            });

            menuArray.push(Hide_Your_Podcast);
        }

        if (SETTINGS_Hide_Items.Hide_Homepage_Charts_Feature) {
            let home = selectItem(".main-view-container__scroll-node-child");
            function listenThenApply(pathname) {
                const observer = new MutationObserver(() => {
                    let app = pathname === "/";

                    if (app) {
                        condition(homePageCharts, isHomePageChartsHide);
                        observer.disconnect();
                    }
                });
                observer.observe(home, { childList: true, subtree: true });
            }

            listenThenApply(Spicetify.Platform.History.location.pathname);

            Spicetify.Platform.History.listen((location) => {
                listenThenApply(location.pathname);
            });

            Hide_Homepage_Charts = new Spicetify.Menu.Item("Hide Charts", isHomePageChartsHide, (self) => {
                isHomePageChartsHide = !isHomePageChartsHide;
                setLocalStorageDataWithKey(homePageChartsKey, isHomePageChartsHide ? true : false);
                self.setState(isHomePageChartsHide);
                condition(homePageCharts, isHomePageChartsHide);
            });

            menuArray.push(Hide_Homepage_Charts);
        }

        new Spicetify.Menu.SubMenu("Hide Items", menuArray).register();
    }

    if (isLocalStorageInitialized()) {
        main();
    } else {
        initializeLocalStorage();
        main();
    }
}
