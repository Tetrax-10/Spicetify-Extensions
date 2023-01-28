// @ts-chec

// NAME: Sort By Rating
// AUTHOR: Tetrax-10
// DESCRIPTION: Sorts Songs by Rating for Star Rating users

/// <reference path="../dev/globals.d.ts" />

(async function sortByRating() {
    if (!(Spicetify.Platform && Spicetify.React)) {
        setTimeout(sortByRating, 300);
        return;
    }

    const { Type } = Spicetify.URI;
    const { React } = Spicetify;

    let ratedFolderName = "Rated";
    let ratedFolderUri = await isFolderCreated(ratedFolderName);

    const RATINGS = ["5.0", "4.5", "4.0", "3.5", "3.0", "2.5", "2.0", "1.5", "1.0", "0.5", "0"];

    ////////////////////////////////////// Menu ///////////////////////////////////////////

    function shouldAddSortPlaylistByRating(uri) {
        let uriObj = Spicetify.URI.fromString(uri[0]);
        switch (uriObj.type) {
            case Type.PLAYLIST:
            case Type.PLAYLIST_V2:
                return true;
        }
        return false;
    }

    function notification(text, isError = false, msTimeout) {
        Spicetify.showNotification(text, isError, msTimeout);
    }

    new Spicetify.ContextMenu.Item(
        "Sort Playlist by Rating",
        async (uri) => {
            if (ratedFolderUri) {
                refreshPopup(uri);
            } else {
                notification("Install Star Rating Extension to Rate Songs", false, 3500);
                setTimeout(() => {
                    notification("After rating you can Sort Playlist with Sort By Rating Extension", false, 6000);
                }, 3000);
            }
        },
        shouldAddSortPlaylistByRating,
        "visualizer"
    ).register();

    function refreshPopup(uri) {
        popupItem({
            title: "Note",
            name1: "No, cacel sorting",
            onclickFun1: () => {
                Spicetify.PopupModal.hide();
            },
            name2: "Yes",
            onclickFun2: () => {
                Spicetify.PopupModal.hide();
                notification("Sorting...");
                sortPlaylistByRating(uri);
            },
        });
    }

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
                        /* font-size: 13px; */
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
                        margin-right: 20px;
                        padding: 5px 10px;
                        text-align: center;
                    }
                    .green {
                        background-color: #6BCB77;
                        color: #25316D;
                    }
                    .red {
                        background-color: #bf616a;
                    }`
    );

    function ButtonItem({ name, color = "", onclickFun }) {
        return React.createElement(
            "button",
            {
                className: `login-button${color}`,
                onClick: async () => {
                    onclickFun();
                },
            },
            name
        );
    }

    function popupItem({ title, name1, color1 = "", onclickFun1, name2 = null, color2 = "", onclickFun2 = null }) {
        Spicetify.PopupModal.hide();

        let DOMcontent = React.createElement(
            "div",
            null,
            style,
            React.createElement("p", { className: "popup-row" }, "Sorting is done by REARRANGING the CUSTOM ORDER. So current custom order will be Rearranged!"),
            React.createElement("div", { className: "popup-row" }, React.createElement("hr", { className: "space" }, null)),
            React.createElement("p", { className: "popup-row" }, "Want to Proceed ?"),
            React.createElement("div", { className: "popup-row" }, React.createElement("hr", { className: "space" }, null)),
            React.createElement(ButtonItem, {
                name: name1,
                color: color1,
                onclickFun: onclickFun1,
            }),
            name2
                ? React.createElement(ButtonItem, {
                      name: name2,
                      color: color2,
                      onclickFun: onclickFun2,
                  })
                : null
        );

        setTimeout(() => {
            Spicetify.PopupModal.display({
                title: title,
                content: DOMcontent,
            });
        }, 100);
    }

    /////////////////////////////////// Helpers ///////////////////////////////////////

    async function isFolderCreated(folderName) {
        let root = await Spicetify.Platform.RootlistAPI.getContents();
        let folder = await root.items.find((item) => item.type === "folder" && item.name === folderName);
        return (await folder) ? folder.uri : false;
    }

    async function getPlaylistItems(uri) {
        let playlistRes = await Spicetify.CosmosAsync.get(`sp://core-playlist/v1/playlist/${uri}/rows`);
        return playlistRes.rows.map((item) => {
            return { name: item.name, uri: item.link, uid: item.rowId };
        });
    }

    async function filterRatedPlaylists(playlists) {
        const result = {};
        for (let playlist of playlists.items) {
            if (!RATINGS.includes(playlist.name)) continue;
            result[playlist.name] = await getPlaylistItems(playlist.uri);
        }
        return result;
    }

    async function getRatedPlaylistsItems() {
        let root = await Spicetify.Platform.RootlistAPI.getContents();
        const rated = root.items.find((playlist) => playlist.type === "folder" && playlist.name === ratedFolderName);
        if (!rated) {
            return [[], null];
        }
        root = rated;
        return await filterRatedPlaylists(root);
    }

    function reorderPlaylist(playlistID, firstPlaylistItemUid, UidData) {
        function getFirstUid() {
            let uid;
            RATINGS.every((rate) => {
                if (UidData[rate] && UidData[rate].length != 0) {
                    uid = UidData[rate][0];
                    return false;
                }
                return true;
            });
            return uid;
        }

        let prevSequenceLastUid = getFirstUid();
        let isFirstItemMaxRated = prevSequenceLastUid == firstPlaylistItemUid;
        let isFirstSequence = true;

        RATINGS.forEach(async (rate) => {
            if (UidData[rate] && UidData[rate].length != 0) {
                if (!isFirstItemMaxRated && isFirstSequence) {
                    Spicetify.Platform.PlaylistAPI.move(playlistID, UidData[rate], { before: prevSequenceLastUid });
                } else {
                    Spicetify.Platform.PlaylistAPI.move(playlistID, UidData[rate], { after: prevSequenceLastUid });
                }
                isFirstSequence = false;
                prevSequenceLastUid = UidData[rate].slice(-1)[0];
            }
        });
    }

    function getPlaylistItemsRatingAndUid(playlistItems, ratedPlaylistsItems) {
        let hashTable = {};
        for (const key in ratedPlaylistsItems) {
            ratedPlaylistsItems[key].forEach((data) => {
                if (!hashTable[data.uri]) {
                    hashTable[data.uri] = key;
                }
            });
        }

        let ratedUid = {
            "5.0": [],
            4.5: [],
            "4.0": [],
            3.5: [],
            "3.0": [],
            2.5: [],
            "2.0": [],
            1.5: [],
            "1.0": [],
            0.5: [],
            0: [],
        };

        playlistItems.forEach((item) => {
            if (hashTable[item.uri]) {
                ratedUid[hashTable[item.uri]].push(item.uid);
            } else {
                ratedUid["0"].push(item.uid);
            }
        });

        return ratedUid;
    }

    async function sortPlaylistByRating(uri) {
        let playlistItems = await getPlaylistItems(uri);
        if (playlistItems.length < 2) return;

        let ratedPlaylistsItems = await getRatedPlaylistsItems();

        let ratedUid = getPlaylistItemsRatingAndUid(playlistItems, ratedPlaylistsItems);

        reorderPlaylist(uri, playlistItems[0].uid, ratedUid);
    }
})();
