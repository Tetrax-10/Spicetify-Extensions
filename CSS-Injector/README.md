# Hide-Sidebar-Items

This Extension Hides Sidebar Items

Sidebar Config won't hide `liked songs`, `create playlist`, `your podcast` from Spotify version `1.1.84`, So this extension is used to hide them.

![Screenshot](https://raw.githubusercontent.com/Tetrax-10/Spicetify-Extensions/master/Hide-Sidebar-Items/screenshot.png)

<br />
<br />

## Get it on Spicetify Marketplace

Step 1 : Follow [Spicetify Marketplace](https://github.com/spicetify/spicetify-marketplace) readme and install it.

Step 2 : Open Spotify App -> Marketplace -> Extensions

Step 3 : Search `Hide Sidebar Items` Click Install Buttton. Done!

<br />
<br />

## Install Manually
Copy `hideSidebarItems.js` into your [Spicetify](https://github.com/spicetify/spicetify-cli) extensions directory:
| **Platform** | **Path**                                                                            |
|------------|-----------------------------------------------------------------------------------|
| **Linux**      | `~/.config/spicetify/Extensions` or `$XDG_CONFIG_HOME/.config/spicetify/Extensions/` |
| **MacOS**      | `~/spicetify_data/Extensions` or `$SPICETIFY_CONFIG/Extensions`                      |
| **Windows**    | `%userprofile%\.spicetify\Extensions\`                                              |

After putting the extension file into the correct folder, run the following command to install the extension:
```
spicetify config extensions hideSidebarItems.js
spicetify apply
```

<br />
<br />

## To disable a feature (everything enabled by default)

Open [hideSidebarItems.js](https://github.com/Tetrax-10/Spicetify-Extensions/blob/master/Hide-Sidebar-Items/hideSidebarItems.js) in line number 11 just change the value to false to disable that feature


```javascript
let SETTINGS = {
    Hide_Liked_Songs_Feature: true,
    Hide_Create_Playlist_Feature: true,
    Hide_Your_Episodes_Feature: false,
};
```
I disable `Hide_Your_Episodes_Feature` for me as I use [hidePodcasts.js](https://github.com/theRealPadster/spicetify-hide-podcasts/blob/main/hidePodcasts.js) Extension

<br />
<br />

## Credits

[CharlieS1103](https://github.com/CharlieS1103) - [readme.md](https://github.com/CharlieS1103/spicetify-extensions/blob/main/adblock/README.md)

## Support
🌟 Like it? Gimme Some Love ! 💕

[![Github Stars badge](https://img.shields.io/github/stars/Tetrax-10/Spicetify-Extensions?logo=github&style=social)](https://github.com/Tetrax-10/Spicetify-Extensions)
