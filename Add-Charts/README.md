# Spicetify-Extensions

This Extension adds other countries exclusive Charts to your Spotify App's Browse Page

## Add Custom Chart
Open Spotify Web and navigate to this [page](https://open.spotify.com/search)

click inspect element on the chart you want, copy the name, image, href, backgroundColor.

paste them on ChartDataBase in [AddCharts.js](https://github.com/Tetrax-10/Spicetify-Extensions/blob/master/Add-Charts/AddCharts.js)

### This to :

```html
<a draggable="false" class="Em2LrSSfvrgXQoajs6cm" href="/genre/0JQ5DAqbMKFE33XAyDiPIr" style="background-color: rgb(240, 55, 165)"
            ><div>
                <img aria-hidden="false" draggable="false" loading="lazy" src="https://t.scdn.co/images/2117dadfdd254825b3fbc52e3652ed56.jpeg" alt="" class="mMx2LUixlnN_Fu45JpFB tV9cjMpTPaykKsn2OVsw" />
                <h3 class="i2yp6pOoZpYZLd5QWguN">Tamil</h3>
            </div>
        </a>
```

### This :
```javascript
let ChartDataBase = {
    Chart1: {
        name: "Tamil",
        image: "https://t.scdn.co/images/2117dadfdd254825b3fbc52e3652ed56.jpeg",
        href: "/genre/0JQ5DAqbMKFE33XAyDiPIr",
        backgroundColor: "rgb(240, 55, 165)",
    },
};
```

If you want an other country's chart use a VPN and connect to that country. Change country in Spotify Settings from [here](https://www.spotify.com/us/account/profile/)

now you can see that chart in you browse page and you can follow the above steps

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
