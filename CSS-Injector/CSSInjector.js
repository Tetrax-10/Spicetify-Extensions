// @ts-chec

// NAME: Hide Sidebar Items
// AUTHOR: Tetrax-10
// DESCRIPTION: Hide sidebar items like liked songs, create playlist, your podcast.

/// <reference path="../globals.d.ts" />

// you can get CSS snippets from https://github.com/spicetify/spicetify-marketplace/blob/main/snippets.json
let cssInjectorStyle = `

/* Insert Your custom CSS */

`;

(async function cssInjector() {
    const { Platform } = Spicetify;
    if (!Platform) {
        setTimeout(cssInjector, 300);
        return;
    }
    initCssInjector();
})();

function initCssInjector() {
    let body = document.querySelector("body");

    function injectCSS(cssStyle, check) {
        if (!body.classList.contains(check)) {
            let styleElement = document.createElement("style");
            styleElement.innerHTML = cssStyle;
            styleElement.id = check;
            body.appendChild(styleElement);
            body.classList.add(check);
        }
    }

    function removeInjectedCSS(id) {
        let styleElement = document.getElementById(id);
        if (body.classList.contains(id) && styleElement) {
            styleElement.remove();
            body.classList.remove(id);
        }
    }

    (function main() {
        injectCSS(cssInjectorStyle, "css-injector--has-injected-default");
    })();
}
