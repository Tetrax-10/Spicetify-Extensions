# CSS-Injector

This Extension Injects your custom CSS, snippets.

This is in early stage in upcomming updates you can enable or disable a particular CSS block and also insert CSS from inside Spotify App.

<br />

![Screenshot](https://raw.githubusercontent.com/Tetrax-10/Spicetify-Extensions/master/CSS-Injector/screenshot.png)

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

## To Inject a CSS

Open [CSSInjector.js](https://github.com/Tetrax-10/Spicetify-Extensions/blob/master/CSS-Injector/CSSInjector.js) in line number 10 just paste your CSS inside the variable


```javascript
let cssInjectorStyle = `

/* hides playlist scrollbar */
.os-scrollbar:nth-child(6) .os-scrollbar-handle {
    visibility: hidden;
}

/* Insert Your custom CSS */

`;
```

<br />

## Support
🌟 Like it? Gimme Some Love ! 💕

[![Github Stars badge](https://img.shields.io/github/stars/Tetrax-10/Spicetify-Extensions?logo=github&style=social)](https://github.com/Tetrax-10/Spicetify-Extensions)
