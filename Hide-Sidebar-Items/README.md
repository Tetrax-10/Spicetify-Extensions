# Hide-Sidebar-Items

This Extension Hides Sidebar Items

Sidebar Config won't hide `liked songs`, `create playlist`, `your podcast` from Spotify version `1.1.84`, So this extension is used to hide them.

![Screenshot](https://raw.githubusercontent.com/Tetrax-10/Spicetify-Extensions/master/Hide-Sidebar-Items/screenshot.png)

## To disable a feature (everything enabled by default)

Open [hideSidebarItems.js](https://github.com/Tetrax-10/Spicetify-Extensions/blob/master/Hide-Sidebar-Items/hideSidebarItems.js) in line number 11 just change the value to false to disable that feature

### This to :

```javascript
let SETTINGS = {
    Hide_Liked_Songs_Feature: true,
    Hide_Create_Playlist_Feature: true,
    Hide_Your_Episodes_Feature: false,
};
```
I disable `Hide_Your_Episodes_Feature` for me as I use [hidePodcasts.js](https://github.com/theRealPadster/spicetify-hide-podcasts/blob/main/hidePodcasts.js) Extension

## Install
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
## Install Manually
Follow the above steps but instead of running commands edit your `config-xpui.ini` file. Add `hideSidebarItems.js`, separating them by the `|` character.

Example:

```ini
[AdditionalOptions]
...
extensions = autoSkipExplicit.js|shuffle+.js|trashbin.js|hideSidebarItems.js
```

Then run:

```
spicetify apply
```

## Credits

[CharlieS1103](https://github.com/CharlieS1103) - [readme.md](https://github.com/CharlieS1103/spicetify-extensions/blob/main/adblock/README.md)
