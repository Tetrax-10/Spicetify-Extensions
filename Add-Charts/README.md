# Spicetify-Extensions

This Extension adds other countries exclusive Charts to your Spotify App's Browse Page

### Note :

Currently this extension only shows the default playlists of a chart not the regional based once.
(some charts/playlist may not work)

## Install
Copy `AddCharts.js` into your [Spicetify](https://github.com/khanhas/spicetify-cli) extensions directory:
| **Platform** | **Path**                                                                            |
|------------|-----------------------------------------------------------------------------------|
| **Linux**      | `~/.config/spicetify/Extensions` or `$XDG_CONFIG_HOME/.config/spicetify/Extensions/` |
| **MacOS**      | `~/spicetify_data/Extensions` or `$SPICETIFY_CONFIG/Extensions`                      |
| **Windows**    | `%userprofile%\.spicetify\Extensions\`                                              |

After putting the extension file into the correct folder, run the following command to install the extension:
```
spicetify config extensions AddCharts.js
spicetify apply
```
Note: Using the `config` command to add the extension will always append the file name to the existing extensions list. It does not replace the whole key's value.

Or you can manually edit your `config-xpui.ini` file. Add your desired extension filenames in the extensions key, separated them by the | character.
Example:

```ini
[AdditionalOptions]
...
extensions = autoSkipExplicit.js|shuffle+.js|trashbin.js|AddCharts.js
```

Then run:

```
spicetify apply
```

## Credits
[theRealPadster](https://github.com/theRealPadster) - [code](https://github.com/theRealPadster/spicetify-hide-podcasts/blob/main/hidePodcasts.js) refference

[CharlieS1103](https://github.com/CharlieS1103) - [readme.md](https://github.com/CharlieS1103/spicetify-extensions/blob/main/adblock/README.md)
