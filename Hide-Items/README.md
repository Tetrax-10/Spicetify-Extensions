# Hide-Items

This Extension Hides Some Useless Items you can hide or unhide it any time.

<br />

![Screenshot](https://raw.githubusercontent.com/Tetrax-10/Spicetify-Extensions/master/Hide-Items/screenshot.png)

<br />

## Get it on Spicetify Marketplace

Step 1 : Follow [Spicetify Marketplace](https://github.com/spicetify/spicetify-marketplace) readme and install it.

Step 2 : Open Spotify App -> Marketplace -> Extensions

Step 3 : Search `Hide Items` Click Install Buttton. Done!

<br />

## Install Manually
Copy `hideItems.js` into your [Spicetify](https://github.com/spicetify/spicetify-cli) extensions directory:
| **Platform** | **Path**                                                                            |
|------------|-----------------------------------------------------------------------------------|
| **Linux**      | `~/.config/spicetify/Extensions` or `$XDG_CONFIG_HOME/.config/spicetify/Extensions/` |
| **MacOS**      | `~/spicetify_data/Extensions` or `$SPICETIFY_CONFIG/Extensions`                      |
| **Windows**    | `%userprofile%\.spicetify\Extensions\`                                              |

After putting the extension file into the correct folder, run the following command to install the extension:
```
spicetify config extensions hideItems.js
spicetify apply
```

<br />

## To disable a feature (everything enabled by default)

Open [hideItems.js](https://github.com/Tetrax-10/Spicetify-Extensions/blob/master/Hide-Items/hideItems.js) in line number 12 just change the value to false to disable that feature


```javascript
let SETTINGS_Hide_Items = {
    Hide_Liked_Songs_Feature: true,
    Hide_Create_Playlist_Feature: true,
    Hide_Your_Podcast_Feature: false,
    Hide_Homepage_Charts_Feature: true, // beta development
};
```
I disable `Hide_Your_Episodes_Feature` for me as I use [hidePodcasts.js](https://github.com/theRealPadster/spicetify-hide-podcasts/blob/main/hidePodcasts.js) Extension

<br />

## To unhide a chart (all recommendation hidden by default)

Open [hideItems.js](https://github.com/Tetrax-10/Spicetify-Extensions/blob/master/Hide-Items/hideItems.js) in line number 20 just add the name of the chart topic (case sensitive)

make sure you apply the extension after editing

```javascript
let UNHIDE_Home_Charts = ["Your playlists", "Popular new releases"];
```



## Support
🌟 Like it? Gimme Some Love ! 💕

[![Github Stars badge](https://img.shields.io/github/stars/Tetrax-10/Spicetify-Extensions?logo=github&style=social)](https://github.com/Tetrax-10/Spicetify-Extensions)
