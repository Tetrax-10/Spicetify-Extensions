// @ts-chec

// NAME: Play on YouTube
// AUTHOR: Tetrax-10
// DESCRIPTION: Plays the Video Song of a Track in YouTube

/// <reference path="../dev/globals.d.ts" />

(async function playOnYouTube() {
    if (!Spicetify.ContextMenu) {
        setTimeout(playOnYouTube, 300);
        return;
    }

    const { React } = Spicetify;

    let YouTubeSVG = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="19px" height="19px"><path fill="currentColor" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><path fill="var(--spice-main)" d="M20 31L20 17 32 24z"/></svg>`;

    /////////////////////////////////// CONFIG ///////////////////////////////////////

    function getLocalStorageDataFromKey(key) {
        return Spicetify.LocalStorage.get(key);
    }

    function setLocalStorageDataWithKey(key, value) {
        Spicetify.LocalStorage.set(key, value);
    }

    async function getConfig() {
        try {
            let parsed = JSON.parse(getLocalStorageDataFromKey("playOnYouTube:settings"));
            if (parsed && typeof parsed === "object") {
                return parsed;
            }
            throw "Config Error Play On YouTube";
        } catch {
            setLocalStorageDataWithKey("playOnYouTube:settings", `{}`);
            return {};
        }
    }

    const defaultSettings = {
        cached: {
            "spotify:track:4oBhE31sIakxf8bSPHuRT1": "ixkoVwKQaJg",
        },
        YouTubeApiKey: "",
    };

    let CONFIG = await getConfig();

    async function saveConfig(item, value) {
        if (item) {
            let tempConfig = await getConfig("playOnYouTube:settings");
            tempConfig[item] = value;
            setLocalStorageDataWithKey("playOnYouTube:settings", JSON.stringify(tempConfig));
            return;
        }
        setLocalStorageDataWithKey("playOnYouTube:settings", JSON.stringify(CONFIG));
    }

    Object.keys(defaultSettings).forEach((key) => {
        if (CONFIG[key] == undefined) {
            CONFIG[key] = defaultSettings[key];
        }
    });

    await saveConfig();

    /////////////////////////////////// UI ///////////////////////////////////////

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

    function setAPIKey() {
        let addPopupContainer = React.createElement(
            "div",
            null,
            style,
            React.createElement(
                "div",
                { className: "popup-row" },
                React.createElement("p", { className: "col description" }, "By Using your own API key the exact video will open directly on YouTube. If not only the relavent search page will be opened."),
                React.createElement(
                    "a",
                    {
                        href: "https://www.youtube.com/watch?v=44OBOSBd73M",
                        className: "demo",
                    },
                    "How to get my API key? ( 1 min YouTube video )"
                )
            ),
            React.createElement(
                "div",
                { className: "popup-row" },
                React.createElement("div", { className: "popup-row" }, React.createElement("hr", { className: "divider" }, null)),
                React.createElement("p", { className: "popup-row" }, React.createElement("p", null, "Enter your API key :")),
                React.createElement("div", { className: "little-space" }, null),
                React.createElement("div", { className: "little-space" }, null),
                React.createElement("p", { className: "popup-row" }, React.createElement("input", { className: "inputbox", placeholder: CONFIG.YouTubeApiKey ? CONFIG.YouTubeApiKey : "Your API Key", required: true })),
                React.createElement("div", { className: "little-space" }, null),
                React.createElement("div", { className: "little-space" }, null),
                React.createElement(ButtonItem, {
                    name: "Save",
                    color: " green",
                    onclickFun: async () => {
                        let apiKey = document.querySelector(".popup-row .inputbox").value.replace(/\n/g, "");

                        if (apiKey === "" || !apiKey) {
                            alert("API Key can't be blank");
                            return;
                        }

                        CONFIG.YouTubeApiKey = apiKey;
                        await saveConfig("YouTubeApiKey", CONFIG.YouTubeApiKey);
                        Spicetify.PopupModal.hide();
                    },
                })
            )
        );

        Spicetify.PopupModal.display({
            title: "YouTube API Key",
            content: addPopupContainer,
        });
    }

    new Spicetify.Menu.Item("Play on YouTube", false, setAPIKey, YouTubeSVG).register();

    /////////////////////////////////// MAIN ///////////////////////////////////////

    function shouldAddToTrack(uri) {
        let uriObj = Spicetify.URI.fromString(uri[0]);
        switch (uriObj.type) {
            case Spicetify.URI.Type.TRACK:
                return true;
        }
        return false;
    }

    async function playYouTubeVideoFromTrackID(uri) {
        let cachedYoutubeVideoKey = CONFIG.cached[uri];
        if (cachedYoutubeVideoKey !== null && cachedYoutubeVideoKey !== undefined) {
            window.open(`https://www.youtube.com/watch?v=${cachedYoutubeVideoKey}`);
            return;
        }

        let rawRes = await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/tracks/" + uri[0].split(":")[2]);

        let searchString = rawRes.album.artists.map((a) => a.name).join(", ") + " - " + rawRes.name + " video song";

        if (!CONFIG.YouTubeApiKey) {
            window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchString)}`);
            return;
        }

        let youtubeRes;
        try {
            youtubeRes = await Spicetify.CosmosAsync.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(searchString)}&type=video&key=${CONFIG.YouTubeApiKey}`);
        } catch (error) {
            window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchString)}`);
            return;
        }

        let trimmedSongName = rawRes.name
            .replace(/\(.+?\)/g, "")
            .replace(/\[.+?\]/g, "")
            .replace(/\s\-\s.+?$/, "")
            .replace(/,.+?$/, "")
            .trim();

        let youtubeVideoKey = youtubeRes.items[0].id.videoId;

        youtubeRes.items.every((video) => {
            if (video.snippet.title.includes(trimmedSongName)) {
                youtubeVideoKey = video.id.videoId;
                return false;
            }
            return true;
        });

        CONFIG.cached[uri] = youtubeVideoKey;
        await saveConfig("cached", CONFIG.cached);

        window.open(`https://www.youtube.com/watch?v=${youtubeVideoKey}`);
    }

    new Spicetify.ContextMenu.Item("Play on YouTube", playYouTubeVideoFromTrackID, shouldAddToTrack, YouTubeSVG).register();
})();
