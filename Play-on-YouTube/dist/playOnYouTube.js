var playOnYouTube = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // external-global-plugin:react
  var require_react = __commonJS({
    "external-global-plugin:react"(exports, module) {
      module.exports = Spicetify.React;
    }
  });

  // src/components/SettingsUI/SettingsUI.jsx
  var import_react2 = __toESM(require_react());

  // src/components/SettingsUI/MenuComponents.jsx
  var import_react = __toESM(require_react());

  // src/utils/config.js
  var localStorageKey = "playOnYouTube";
  var defaultSettings = {
    cached: {
      "spotify:track:4oBhE31sIakxf8bSPHuRT1": "ixkoVwKQaJg"
    },
    YouTubeApiKey: "",
    backupApiKeys: []
  };
  function getLocalStorage(key) {
    return localStorage.getItem(key);
  }
  function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }
  function makeConfig(tempConfig) {
    Object.keys(defaultSettings).forEach((key) => {
      if (tempConfig[key] === void 0) {
        tempConfig[key] = defaultSettings[key];
      }
    });
    Object.keys(tempConfig).forEach((key) => {
      if (defaultSettings[key] === void 0) {
        delete tempConfig[key];
      }
    });
    saveConfig(tempConfig);
    return tempConfig;
  }
  function initConfig() {
    try {
      let tempConfig = JSON.parse(getLocalStorage(`${localStorageKey}:settings`));
      if (tempConfig && typeof tempConfig === "object") {
        return makeConfig(tempConfig);
      }
      throw "";
    } catch (e) {
      return makeConfig({});
    }
  }
  var CONFIG = initConfig("init");
  function saveConfig(item, value) {
    if (item && typeof item === "string" && value !== void 0) {
      let tempConfig = initConfig();
      tempConfig[item] = value;
      setLocalStorage(`${localStorageKey}:settings`, JSON.stringify(tempConfig));
      return;
    }
    if (item && typeof item === "object") {
      setLocalStorage(`${localStorageKey}:settings`, JSON.stringify(item));
      return;
    }
    setLocalStorage(`${localStorageKey}:settings`, JSON.stringify(CONFIG));
  }
  function getConfig() {
    return CONFIG;
  }

  // src/components/SettingsUI/MenuComponents.jsx
  var CONFIG2 = getConfig();
  function Heading({ start = false, children = "Title" } = {}) {
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", {
      className: "popup-row"
    }, start ? /* @__PURE__ */ import_react.default.createElement(LittleSpaceItem, null) : null, /* @__PURE__ */ import_react.default.createElement("h3", {
      className: "div-title"
    }, children), /* @__PURE__ */ import_react.default.createElement("hr", {
      className: "divider"
    })));
  }
  function DescriptionItem({ children = "Description" } = {}) {
    const hasHighlight = import_react.default.Children.toArray(children).some((child) => child.type && child.type.name === "Highlight");
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, hasHighlight ? /* @__PURE__ */ import_react.default.createElement("div", {
      className: "popup-row"
    }, /* @__PURE__ */ import_react.default.createElement("p", {
      className: "col description"
    }, /* @__PURE__ */ import_react.default.createElement("span", null, children))) : /* @__PURE__ */ import_react.default.createElement("div", {
      className: "popup-row"
    }, /* @__PURE__ */ import_react.default.createElement("p", {
      className: "col description"
    }, children)));
  }
  function Highlight({ children = "Highlight", color = "" } = {}) {
    return /* @__PURE__ */ import_react.default.createElement("span", {
      className: color ? " " + color : ""
    }, children);
  }
  function LinkItem({ href = "https://www.youtube.com/", children = "YouTube" } = {}) {
    return /* @__PURE__ */ import_react.default.createElement("div", {
      className: "popup-row"
    }, /* @__PURE__ */ import_react.default.createElement("a", {
      className: "demo",
      href
    }, children));
  }
  function LittleSpaceItem() {
    return /* @__PURE__ */ import_react.default.createElement("div", {
      className: "popup-row"
    }, /* @__PURE__ */ import_react.default.createElement("div", {
      className: "little-space"
    }));
  }
  function SpaceItem() {
    return /* @__PURE__ */ import_react.default.createElement("div", {
      className: "popup-row"
    }, /* @__PURE__ */ import_react.default.createElement("hr", {
      className: "space"
    }));
  }
  function InputItem({ field = void 0, onChangeHandler: onChangeHandlerCallback = () => {
  } } = {}) {
    if (field === void 0)
      return null;
    const [inputValue, setInputValue] = (0, import_react.useState)(CONFIG2[field]);
    function onChangeHandler(e) {
      setInputValue(e.target.value);
      CONFIG2[field] = e.target.value;
      saveConfig(field, CONFIG2[field]);
      onChangeHandlerCallback(e);
    }
    return /* @__PURE__ */ import_react.default.createElement("div", {
      className: "popup-row"
    }, /* @__PURE__ */ import_react.default.createElement("input", {
      placeholder: "Your API Key",
      value: inputValue,
      className: "inputbox",
      onChange: onChangeHandler
    }));
  }
  function DynamicInputItem({ value = void 0, isLastItem = false, onChangeHandler: onChangeHandlerCallback = () => {
  }, onClickHandler: onClickHandlerCallback = () => {
  } }) {
    if (value === void 0)
      return null;
    const [inputValue, setInputValue] = (0, import_react.useState)(value);
    (0, import_react.useEffect)(() => {
      setInputValue(value);
    }, [value]);
    function onChangeHandler(e) {
      setInputValue(e.target.value);
      onChangeHandlerCallback(e.target.value);
    }
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", {
      className: "popup-row"
    }, /* @__PURE__ */ import_react.default.createElement("div", {
      className: "input-wrapper"
    }, /* @__PURE__ */ import_react.default.createElement("input", {
      className: isLastItem ? "inputbox last-item" : "inputbox",
      value: inputValue,
      placeholder: "Your API key",
      onChange: onChangeHandler
    }), /* @__PURE__ */ import_react.default.createElement("button", {
      className: "checkbox",
      type: "button",
      onClick: onClickHandlerCallback
    }, /* @__PURE__ */ import_react.default.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      dangerouslySetInnerHTML: { __html: Spicetify.SVGIcons.x }
    })))), /* @__PURE__ */ import_react.default.createElement(LittleSpaceItem, null));
  }
  function DynamicMultipleInputItem({ color = "", children = "Button" } = {}) {
    const [backupApiKeys, setbackupApiKeys] = (0, import_react.useState)(CONFIG2.backupApiKeys);
    function updateInput(value, index) {
      let tempBackupApiKeys = [...backupApiKeys];
      tempBackupApiKeys[index] = value;
      setbackupApiKeys(tempBackupApiKeys);
    }
    function deleteApiKey(index) {
      let tempBackupApiKeys = [...backupApiKeys];
      tempBackupApiKeys.splice(index, 1);
      setTimeout(() => {
        setbackupApiKeys(tempBackupApiKeys);
      }, 10);
    }
    function createNewInput() {
      if (backupApiKeys[backupApiKeys.length - 1] || backupApiKeys.length === 0) {
        setbackupApiKeys([...backupApiKeys, ""]);
      }
      setTimeout(() => {
        var _a;
        (_a = document.querySelector(".inputbox.last-item")) == null ? void 0 : _a.focus();
      }, 10);
    }
    const isFirstRender = (0, import_react.useRef)(true);
    (0, import_react.useEffect)(() => {
      if (isFirstRender.current) {
        return isFirstRender.current = false;
      }
      CONFIG2.backupApiKeys = backupApiKeys.filter(Boolean);
      saveConfig("backupApiKeys", CONFIG2.backupApiKeys);
    }, [backupApiKeys]);
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, backupApiKeys.map((value, index) => {
      return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(DynamicInputItem, {
        value,
        isLastItem: index === backupApiKeys.length - 1,
        onChangeHandler: (value2) => {
          updateInput(value2, index);
        },
        onClickHandler: () => {
          deleteApiKey(index);
        }
      }));
    }), /* @__PURE__ */ import_react.default.createElement("div", {
      className: "popup-row"
    }, /* @__PURE__ */ import_react.default.createElement("button", {
      className: "login-button center-button" + (color ? " " + color : ""),
      type: "button",
      onClick: createNewInput
    }, children)));
  }

  // src/components/SettingsUI/SettingsUI.jsx
  function SettingsUI() {
    return /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "tetrax-settings-menu",
      "aria-label": "YouTube API key"
    }, /* @__PURE__ */ import_react2.default.createElement(Heading, {
      start: "true"
    }, "Info"), /* @__PURE__ */ import_react2.default.createElement(DescriptionItem, null, "By Using your ", /* @__PURE__ */ import_react2.default.createElement(Highlight, {
      color: "red-text"
    }, "Own API Key"), " the exact video will ", /* @__PURE__ */ import_react2.default.createElement(Highlight, {
      color: "red-text"
    }, "open directly on YouTube"), ". If not only the relavent search page will be opened."), /* @__PURE__ */ import_react2.default.createElement(LinkItem, {
      href: "https://www.youtube.com/watch?v=44OBOSBd73M"
    }, "How to get my API key? ( 1 min YouTube video )"), /* @__PURE__ */ import_react2.default.createElement(SpaceItem, null), /* @__PURE__ */ import_react2.default.createElement(Heading, null, "Enter your API key :"), /* @__PURE__ */ import_react2.default.createElement(LittleSpaceItem, null), /* @__PURE__ */ import_react2.default.createElement(InputItem, {
      field: "YouTubeApiKey"
    }), /* @__PURE__ */ import_react2.default.createElement(SpaceItem, null), /* @__PURE__ */ import_react2.default.createElement(Heading, null, "Backup API Keys (optional)"), /* @__PURE__ */ import_react2.default.createElement(DescriptionItem, null, "If your API quota got ", /* @__PURE__ */ import_react2.default.createElement(Highlight, {
      color: "red-text"
    }, "exceeded"), " you will be taken to the ", /* @__PURE__ */ import_react2.default.createElement(Highlight, {
      color: "red-text"
    }, "relavent search page"), ". You can open", " ", /* @__PURE__ */ import_react2.default.createElement(Highlight, {
      color: "red-text"
    }, "100 video songs"), " directly a day for a single API Key. If you don't want to be redirected to the search page you can add more API keys to", " ", /* @__PURE__ */ import_react2.default.createElement(Highlight, {
      color: "red-text"
    }, "increase quota"), "."), /* @__PURE__ */ import_react2.default.createElement(DynamicMultipleInputItem, null, "Add another API key"));
  }

  // src/utils/utils.js
  var CONFIG3 = getConfig();
  function isCached(uri) {
    let cachedYoutubeVideoID = CONFIG3.cached[uri];
    if (cachedYoutubeVideoID !== null && cachedYoutubeVideoID !== void 0) {
      return cachedYoutubeVideoID;
    } else {
      return null;
    }
  }
  function trimName(name) {
    return name.replace(/\(.+?\)/g, "").replace(/\[.+?\]/g, "").replace(/\s\-\s.+?$/, "").replace(/,.+?$/, "").trim();
  }
  function openYouTubeRelaventSearchPage(searchString) {
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchString)}`);
  }
  function playYouTubeVideo(id) {
    window.open(`https://www.youtube.com/watch?v=${id}`);
  }

  // src/utils/api.js
  var CONFIG4 = getConfig();
  async function fetchTrackInfo(uri) {
    let spotifyRes = await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/tracks/" + uri.split(":")[2]);
    if (spotifyRes !== null && spotifyRes !== void 0)
      return { searchString: spotifyRes.album.artists.map((artist) => artist.name).join(", ") + " - " + spotifyRes.name + " video song", trimmedSongName: trimName(spotifyRes.name) };
  }
  async function fetchVideoID(searchString, apiKey) {
    try {
      let youtubeRes = await Spicetify.CosmosAsync.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(searchString)}&type=video&key=${apiKey}`);
      if (youtubeRes !== null && youtubeRes !== void 0 && typeof youtubeRes === "object")
        return { firstVideoID: youtubeRes.items[0].id.videoId, allVideos: youtubeRes.items };
    } catch (e) {
      return { firstVideoID: null, allVideos: null };
    }
  }
  async function fetchVideoIdWithAllApiKeys(searchString) {
    for (let apiKey of CONFIG4.backupApiKeys) {
      let { firstVideoID = null, allVideos = null } = await fetchVideoID(searchString, apiKey);
      if (firstVideoID) {
        return { firstVideoID, allVideos };
      }
    }
    return { firstVideoID: null, allVideos: null };
  }

  // src/constants/svg.js
  var YouTubeSVG = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="19px" height="19px"><path fill="currentColor" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><path fill="var(--spice-main)" d="M20 31L20 17 32 24z"/></svg>`;

  // src/playOnYouTube.js
  async function playOnYouTube() {
    let CONFIG5 = getConfig();
    let isCtrlPressed = false;
    function shouldAddToTrack(uri) {
      let uriObj = Spicetify.URI.fromString(uri[0]);
      switch (uriObj.type) {
        case Spicetify.URI.Type.TRACK:
          return true;
      }
      return false;
    }
    async function playYouTubeVideoFromTrackID(rawUri) {
      const uri = rawUri[0];
      let cachedVideoID = isCached(uri);
      if (cachedVideoID && !isCtrlPressed) {
        playYouTubeVideo(cachedVideoID);
        return;
      }
      let { searchString = null, trimmedSongName = null } = await fetchTrackInfo(uri);
      if (searchString === null)
        return;
      if (!CONFIG5.YouTubeApiKey || isCtrlPressed) {
        openYouTubeRelaventSearchPage(searchString);
        return;
      }
      let { firstVideoID = null, allVideos = null } = await fetchVideoID(searchString, CONFIG5.YouTubeApiKey);
      if (!firstVideoID) {
        if (CONFIG5.backupApiKeys.length) {
          let { firstVideoID: tempFirstVideoID = null, allVideos: tempAllVideos = null } = await fetchVideoIdWithAllApiKeys(searchString);
          if (!tempFirstVideoID) {
            openYouTubeRelaventSearchPage(searchString);
            return;
          }
          firstVideoID = tempFirstVideoID;
          allVideos = tempAllVideos;
        } else {
          openYouTubeRelaventSearchPage(searchString);
          return;
        }
      }
      let youtubeVideoKey = firstVideoID;
      allVideos.some((video) => {
        if (video.snippet.title.toLowerCase().includes(trimmedSongName.toLowerCase())) {
          youtubeVideoKey = video.id.videoId;
          return true;
        }
        return false;
      });
      CONFIG5.cached[uri] = youtubeVideoKey;
      saveConfig("cached", CONFIG5.cached);
      playYouTubeVideo(youtubeVideoKey);
      isCtrlPressed = false;
      trackContextMenu.name = "Play on YouTube";
    }
    new Spicetify.Menu.Item(
      "Play on YouTube",
      false,
      () => {
        Spicetify.PopupModal.display({
          title: "YouTube API key",
          content: SettingsUI(),
          isLarge: true
        });
      },
      YouTubeSVG
    ).register();
    let trackContextMenu = new Spicetify.ContextMenu.Item("Play on YouTube", playYouTubeVideoFromTrackID, shouldAddToTrack, YouTubeSVG);
    trackContextMenu.register();
    window.addEventListener("keydown", (event) => {
      if (event.repeat)
        return;
      if (event.key == "Control") {
        isCtrlPressed = true;
        trackContextMenu.name = "Search on YouTube";
      }
    });
    window.addEventListener("keyup", (event) => {
      if (event.repeat)
        return;
      if (event.key == "Control") {
        isCtrlPressed = false;
        trackContextMenu.name = "Play on YouTube";
      }
    });
    addEventListener("blur", () => {
      isCtrlPressed = false;
      trackContextMenu.name = "Play on YouTube";
    });
  }

  // src/app.tsx
  async function initPlayOnYouTube() {
    if (!((Spicetify == null ? void 0 : Spicetify.Menu) && (Spicetify == null ? void 0 : Spicetify.ContextMenu))) {
      setTimeout(initPlayOnYouTube, 300);
      return;
    }
    await playOnYouTube();
  }

  // node_modules/spicetify-creator/dist/temp/index.jsx
  (async () => {
    await initPlayOnYouTube();
  })();
})();
(async () => {
    if (!document.getElementById(`playOnYouTube`)) {
      var el = document.createElement('style');
      el.id = `playOnYouTube`;
      el.textContent = (String.raw`
  /* C:/Users/ragha/AppData/Local/Temp/tmp-11388-Ide35P3PTb6w/1870822cd390/SettingsUI.css */
.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row::after {
  content: "";
  display: table;
  clear: both;
}
.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .col {
  display: flex;
  padding: 10px 0;
  align-items: center;
}
.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .col.description {
  float: left;
  padding-right: 15px;
}
.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .col.action {
  float: right;
  text-align: right;
}
.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .div-title {
  color: var(--spice-text);
}
.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .divider {
  height: 2px;
  border-width: 0;
  background-color: var(--spice-button-disabled);
}
.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .space {
  margin-bottom: 20px;
  visibility: hidden;
}
.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .demo {
  font-size: 13px;
  color: #59ce8f;
}
.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .little-space {
  margin-bottom: 10px;
}
.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .inputbox {
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 15px;
  border: 0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
}
.tetrax-settings-menu[aria-label="YouTube API key"] .popup-row .input-wrapper {
  display: flex;
}
.tetrax-settings-menu[aria-label="YouTube API key"] button.checkbox {
  align-items: center;
  border: 0px;
  border-radius: 50%;
  background-color: rgba(var(--spice-rgb-shadow), 0.7);
  color: var(--spice-text);
  cursor: pointer;
  display: flex;
  -webkit-margin-start: 12px;
  margin-inline-start: 12px;
  padding: 8px;
}
.tetrax-settings-menu[aria-label="YouTube API key"] button.checkbox.disabled {
  color: rgba(var(--spice-rgb-text), 0.3);
}
.tetrax-settings-menu[aria-label="YouTube API key"] select {
  color: var(--spice-text);
  background: rgba(var(--spice-rgb-shadow), 0.7);
  border: 0;
  height: 32px;
}
.tetrax-settings-menu[aria-label="YouTube API key"] ::-webkit-scrollbar {
  width: 8px;
}
.tetrax-settings-menu[aria-label="YouTube API key"] .login-button {
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
.tetrax-settings-menu[aria-label="YouTube API key"] .center-button {
  display: block;
  margin: 10px auto;
}
.tetrax-settings-menu[aria-label="YouTube API key"] .green-btn {
  background-color: #6bcb77;
  color: #25316d;
}
.tetrax-settings-menu[aria-label="YouTube API key"] .red-btn {
  background-color: #bf616a;
}
.tetrax-settings-menu[aria-label="YouTube API key"] .green-text {
  color: #6bcb77;
}
.tetrax-settings-menu[aria-label="YouTube API key"] .red-text {
  color: #bf616a;
}

      `).trim();
      document.head.appendChild(el);
    }
  })()