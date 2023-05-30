# Seek Song

This Extension Seeks Song when you press `1 to 9` for `10 % to 90 %` of the song like YouTube.

`left arrow` and `right arrow` Seeks `10 seconds` backward and forward like YouTube.

`up arrow` and `down arrow` Increase and Decrease volume like YouTube.

`,` and `.` Seeks `1 Second` backward and forward like YouTube.

`+` and `-` to change tracks.

Wanna discuss or having issues with my extensions? Ping `@Tetrax-10` on Discord

<p align="left"><a href="https://discord.gg/DaUbPmbDwr"><img src="https://raw.githubusercontent.com/Tetrax-10/Nord-Spotify/master/assets/join-discord-button.png" width="150px"></a></p>

<br />

# Demo Video

![Screenshot](https://raw.githubusercontent.com/Tetrax-10/Spicetify-Extensions/master/Seek-Song/screenshot.gif)

<br />

## Get it on Spicetify Marketplace

Step 1 : Follow [Spicetify Marketplace](https://github.com/spicetify/spicetify-marketplace) readme and install it.

Step 2 : Open Spotify App -> Marketplace -> Extensions

Step 3 : Search `Seek Song` Click Install Buttton. Done!

<br />

## Install Manually

Copy `seekSong.js` into your [Spicetify](https://github.com/spicetify/spicetify-cli) extensions directory:
| **Platform** | **Path** |
|------------|-----------------------------------------------------------------------------------|
| **Linux** | `~/.config/spicetify/Extensions` or `$XDG_CONFIG_HOME/.config/spicetify/Extensions/` |
| **MacOS** | `~/spicetify_data/Extensions` or `$SPICETIFY_CONFIG/Extensions` |
| **Windows** | `%appdata%\spicetify\Extensions` |

After putting the extension file into the correct folder, run the following command to install the extension:

```
spicetify config extensions seekSong.js
spicetify apply
```

<br />

## To alter seek seconds

Open [seekSong.js](https://github.com/Tetrax-10/Spicetify-Extensions/blob/master/Seek-Song/seekSong.js) in line number 9 just change the value (in seconds).

```javascript
let skipBackwardValue = 10
let skipForwardValue = 10
```

<br />

## Support

🌟 Like it? Gimme Some Love ! 💕

[![Github Stars badge](https://img.shields.io/github/stars/Tetrax-10/Spicetify-Extensions?logo=github&style=social)](https://github.com/Tetrax-10/Spicetify-Extensions)
