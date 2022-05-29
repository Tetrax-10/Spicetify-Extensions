# CSS-Injector

This Extension Injects your custom CSS, snippets.

This is in early stage in upcomming updates you can enable or disable a particular CSS block and also insert CSS from inside Spotify App.

<br />

![Screenshot](https://raw.githubusercontent.com/Tetrax-10/Spicetify-Extensions/master/CSS-Injector/screenshot.png)

<br />

## Before Injection

![Screenshot](https://raw.githubusercontent.com/Tetrax-10/Spicetify-Extensions/master/CSS-Injector/before%20injection.png)

## After Injection

![Screenshot](https://raw.githubusercontent.com/Tetrax-10/Spicetify-Extensions/master/CSS-Injector/after%20injection.png)

<br />

## Get it on Spicetify Marketplace

Step 1 : Follow [Spicetify Marketplace](https://github.com/spicetify/spicetify-marketplace) readme and install it.

Step 2 : Open Spotify App -> Marketplace -> Extensions

Step 3 : Search `CSS Injector` Click Install Buttton. Done!

<br />

## Install Manually
Copy `CSSInjector.js` into your [Spicetify](https://github.com/spicetify/spicetify-cli) extensions directory:
| **Platform** | **Path**                                                                            |
|------------|-----------------------------------------------------------------------------------|
| **Linux**      | `~/.config/spicetify/Extensions` or `$XDG_CONFIG_HOME/.config/spicetify/Extensions/` |
| **MacOS**      | `~/spicetify_data/Extensions` or `$SPICETIFY_CONFIG/Extensions`                      |
| **Windows**    | `%userprofile%\.spicetify\Extensions\`                                              |

After putting the extension file into the correct folder, run the following command to install the extension:
```
spicetify config extensions CSSInjector.js
spicetify apply
```

<br />

# Tutorial

## To Inject a CSS [Don't paste this, its just for example]

Open [CSSInjector.js](https://github.com/Tetrax-10/Spicetify-Extensions/blob/master/CSS-Injector/CSSInjector.js) in line number 10 just paste your CSS inside the variable


```javascript
let cssInjectorStyle = `

/* Insert Your custom CSS */

`;
```

<br />

## My Custom CSS [Don't paste this, its just for example]

I use [SpotifyNoPremium](https://github.com/Daksh777/SpotifyNoPremium) theme, it gets updated frequently with help of a `bat` / `sh` file.

So if I put my CSS inside that theme's `user.css` after updating it wipes my custom CSS. So I use this extension to inject my theme.

### If you like my theme Its Available in [Spicetify Marketplace](https://github.com/spicetify/spicetify-marketplace) or here

```css
/* hides playlist scrollbar */
.os-scrollbar:nth-child(6) .os-scrollbar-handle {
    visibility: hidden;
}

/* Smooth Reveal Playlist Gradient */
.main-entityHeader-overlay,
.main-actionBarBackground-background,
.main-entityHeader-overlay,
.main-entityHeader-backgroundColor {
    -webkit-transition: 1s;
}

/* remove top bar extension round container */
.main-topBar-historyButtons .main-topBar-button {
    background-color: unset;
}

/* change top bar color */
.main-topBar-background {
    background-color: unset !important;
}
.main-topBar-overlay {
    background-color: var(--spice-main);
}

/* remove gradient shadow in sidebar above playlist */
.Y8edH1Yjo4xrW_58czQj {
    display: none !important;
}

/* remove gradient color on home screen */
.n87ifzfQlmGX8vkeYGDL {
    display: none !important;
}

/* change divider color in sidebar */
.FBPrcmuqo3yv5UfWSRl5 {
    background-color: var(--spice-nav-active);
}

/* notification */
.main-userWidget-notificationIndicator {
    display: none !important;
}
.main-userWidget-box {
    color: var(--spice-subtext);
    background-color: transparent !important;
}
.main-userWidget-chevron {
    display: none;
}

/* change search bar appearance */
input {
    background-color: var(--spice-main-secondary) !important;
    border-radius: 0 !important;
    padding: 6px 10px 6px 48px;
    color: var(--spice-text) !important;
}

/* change scrollbar appearance */
.os-theme-spotify.os-host-transition > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle {
    border-radius: 4px;
    width: 6px;
    background-color: var(--spice-button-disabled);
}
.os-theme-spotify.os-host-transition > .os-scrollbar-vertical > .os-scrollbar-track {
    width: 6px;
}

/* all images */
.main-image-image {
    border-radius: 5%;
}

/* player cover image */
.cover-art-image {
    border-radius: 10%;
}

/* small cover image in playlist row */
.main-trackList-rowImage {
    border-radius: 10%;
}

/* small profile photo on top right */
.main-avatar-image {
    border-radius: 50%;
}
```

## Support
🌟 Like it? Gimme Some Love ! 💕

[![Github Stars badge](https://img.shields.io/github/stars/Tetrax-10/Spicetify-Extensions?logo=github&style=social)](https://github.com/Tetrax-10/Spicetify-Extensions)
