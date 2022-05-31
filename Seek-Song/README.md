# Seek-Song

This Extension Seeks Song when you press `1 to 9` for `10 % to 90 %` of the song like YouTube.

`left arrow` and `right arrow` Seeks backward/forward for `10` seconds like YouTube.

`up arrow` and `down arrow` for increase/decrease volume like YouTube.

<br />

![Screenshot](https://raw.githubusercontent.com/Tetrax-10/Spicetify-Extensions/master/Seek-Song/screenshot.gif)

<br />

## Get it on Spicetify Marketplace

Step 1 : Follow [Spicetify Marketplace](https://github.com/spicetify/spicetify-marketplace) readme and install it.

Step 2 : Open Spotify App -> Marketplace -> Extensions

Step 3 : Search `Seek Song` Click Install Buttton. Done!

<br />

## Install Manually
Copy `seekSong.js` into your [Spicetify](https://github.com/spicetify/spicetify-cli) extensions directory:
| **Platform** | **Path**                                                                            |
|------------|-----------------------------------------------------------------------------------|
| **Linux**      | `~/.config/spicetify/Extensions` or `$XDG_CONFIG_HOME/.config/spicetify/Extensions/` |
| **MacOS**      | `~/spicetify_data/Extensions` or `$SPICETIFY_CONFIG/Extensions`                      |
| **Windows**    | `%userprofile%\.spicetify\Extensions\`                                              |

After putting the extension file into the correct folder, run the following command to install the extension:
```
spicetify config extensions seekSong.js
spicetify apply
```

<br />

## To alter seek seconds

Open [seekSong.js](https://github.com/Tetrax-10/Spicetify-Extensions/blob/master/Seek-Song/seekSong.js) in line number 9 just change the value (in seconds).


```javascript
let skipBackwardValue = 10;
let skipForwardValue = 10;
```

<br />

## Support
🌟 Like it? Gimme Some Love ! 💕

[![Github Stars badge](https://img.shields.io/github/stars/Tetrax-10/Spicetify-Extensions?logo=github&style=social)](https://github.com/Tetrax-10/Spicetify-Extensions)
