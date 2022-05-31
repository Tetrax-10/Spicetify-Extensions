var playlistDicons = (() => {
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __require = /* @__PURE__ */ ((x) =>
        typeof require !== "undefined"
            ? require
            : typeof Proxy !== "undefined"
            ? new Proxy(x, {
                  get: (a, b) => (typeof require !== "undefined" ? require : a)[b],
              })
            : x)(function (x) {
        if (x === "react") return Spicetify.React;
        if (x === "react-dom") return Spicetify.ReactDOM;
        if (typeof require !== "undefined") return require.apply(this, arguments);
        throw new Error('Dynamic require of "' + x + '" is not supported');
    });
    var __copyProps = (to, from, except, desc) => {
        if ((from && typeof from === "object") || typeof from === "function") {
            for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
    };
    var __toESM = (mod, isNodeMode, target) => ((target = mod != null ? __create(__getProtoOf(mod)) : {}), __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

    // src/utils/render-playlist-images.tsx
    var import_react2 = __toESM(__require("react"));
    var import_react_dom = __toESM(__require("react-dom"));

    // src/utils/create-img.ts
    function createPlaylistIconElement(src) {
        const img = document.createElement(src ? "img" : "div");
        img.classList.add("playlist-item__img");
        if (src) {
            img.setAttribute("src", src);
        } else {
            img.classList.add("no-icon");
        }
        return img;
    }

    // src/utils/get-playlist-links.ts
    function getPlaylistAnchors() {
        return new Promise((resolve) => {
            const elementExists = setInterval(() => {
                const playLists = document.querySelectorAll("#spicetify-playlist-list li a");
                if (playLists.length > 0) {
                    clearInterval(elementExists);
                    resolve(Array.from(playLists));
                }
            }, 100);
        });
    }
    function getElement(selector) {
        return new Promise((resolve) => {
            const elementExists = setInterval(() => {
                const element = document.querySelector(selector);
                if (element) {
                    clearInterval(elementExists);
                    resolve(element);
                }
            }, 100);
        });
    }

    // src/components/FolderImage.tsx
    var import_react = __toESM(__require("react"));
    function FolderImage() {
        return /* @__PURE__ */ import_react.default.createElement(
            "svg",
            {
                xmlns: "http://www.w3.org/2000/svg",
                height: "24px",
                viewBox: "0 0 24 24",
                width: "24px",
                fill: "#FFFFFF",
            },
            /* @__PURE__ */ import_react.default.createElement("path", {
                d: "M0 0h24v24H0V0z",
                fill: "none",
            }),
            /* @__PURE__ */ import_react.default.createElement("path", {
                d: "M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z",
            })
        );
    }

    // src/utils/render-playlist-images.tsx
    var imgMap = /* @__PURE__ */ new Map();
    async function renderPlaylistImages(items) {
        const playlistAnchors = await getPlaylistAnchors();
        playlistAnchors.forEach((playlistAnchor) => {
            var _a, _b, _c, _d, _e;
            const id = playlistAnchor.href.split("/").at(-1);
            const type = playlistAnchor.href.split("/").at(-2);
            const existingImg = imgMap.get(id);
            (_a = playlistAnchor.parentElement) == null ? void 0 : _a.classList.add("playlist-item");
            if (existingImg) {
                (_b = playlistAnchor.parentElement) == null ? void 0 : _b.prepend(existingImg);
                return;
            }
            switch (type) {
                case "playlist": {
                    const playlistData = items.find((playlist) => playlist.id === id);
                    const img = createPlaylistIconElement(((_c = playlistData == null ? void 0 : playlistData.images[0]) == null ? void 0 : _c.url) || "");
                    (_d = playlistAnchor.parentElement) == null ? void 0 : _d.prepend(img);
                    imgMap.set(id, img);
                    break;
                }
                case "folder": {
                    const iconWrapper = document.createElement("div");
                    iconWrapper.classList.add("playlist-item__img", "folder");
                    import_react_dom.default.render(/* @__PURE__ */ import_react2.default.createElement(FolderImage, null), iconWrapper);
                    (_e = playlistAnchor.parentElement) == null ? void 0 : _e.prepend(iconWrapper);
                    imgMap.set(id, iconWrapper);
                    break;
                }
                default: {
                    console.warn(`[playlist-icons] playlist list anchor type not recognized: ${type}`);
                }
            }
        });
    }

    // src/utils/get-all-playlists.ts
    async function getAllPlaylistData(url, items = []) {
        const res = await Spicetify.CosmosAsync.get(url);
        return [...res.items, ...(!!res.next ? await getAllPlaylistData(res.next) : [])];
    }

    // src/constants/index.ts
    var LS_BIG_ICONS_KEY = "playlist-icons_big";

    // src/app.tsx
    async function main() {
        var _a;
        while (!(Spicetify == null ? void 0 : Spicetify.Platform) || !(Spicetify == null ? void 0 : Spicetify.CosmosAsync)) {
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
        const showBigIcons = (_a = JSON.parse(localStorage.getItem(LS_BIG_ICONS_KEY))) != null ? _a : false;
        const playlistData = await getAllPlaylistData("https://api.spotify.com/v1/me/playlists?limit=50");
        const playlistElement = await getElement("#spicetify-playlist-list");
        const observer = new MutationObserver(async () => {
            observer.disconnect();
            await renderPlaylistImages(playlistData);
            observer.observe(playlistElement, { childList: true, subtree: true });
        });
        await renderPlaylistImages(playlistData);
        observer.observe(playlistElement, { childList: true, subtree: true });
        if (showBigIcons) playlistElement.classList.add("big-icons");
        new Spicetify.Menu.Item("Big playlist icons", showBigIcons, (menu) => {
            menu.setState(!menu.isEnabled);
            localStorage.setItem(LS_BIG_ICONS_KEY, JSON.stringify(!showBigIcons));
            playlistElement.classList.toggle("big-icons");
        }).register();
    }
    var app_default = main;

    // node_modules/spicetify-creator/dist/temp/index.jsx
    (async () => {
        await app_default();
    })();
})();

(async () => {
    if (!document.getElementById(`playlistDicons`)) {
        var el = document.createElement("style");
        el.id = `playlistDicons`;
        el.textContent = String.raw`
        /* ../../../../../var/folders/6k/z8twsw_s37dffkznr8h11rl40000gn/T/tmp-4683-NIvHuDNjM6lL/180d27a2f610/styles.css */
        :root {
            ---playlist-img-spacing: 6px;
        }
        .playlist-item {
            padding-top: 0;
            padding-bottom: 0;
            align-items: center;
        }
        .playlist-item__img {
            border-radius: 10%;
            width: 1.5em;
            height: 1.5em;
            margin-right: 12px;
            filter: brightness(85%);
        }
        .playlist-item__img.folder {
            background-color: var(--spice-tab-active);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .playlist-item__img.folder svg {
            width: 1.1em;
            height: 1.1em;
        }
        .playlist-item__img.no-icon {
            background-color: var(--spice-tab-active);
            height: 1.5em;
        }
        .playlist-item:hover .playlist-item__img {
            transition: 0.2s ease-out;
            filter: brightness(100%);
        }
        .big-icons .playlist-item {
            padding-top: var(---playlist-img-spacing);
            padding-bottom: var(---playlist-img-spacing);
        }
        .big-icons .playlist-item__img {
            border-radius: 10%;
            width: 2.2em;
            height: 2.2em;
        }
        .big-icons .playlist-item__img.folder {
            padding: 4px;
        }
        .big-icons .playlist-item__img.folder svg {
            width: 1.5em;
            height: 1.5em;
        }
        .big-icons > div {
            contain: unset;
        }        

      `.trim();
        document.head.appendChild(el);
    }
})();
