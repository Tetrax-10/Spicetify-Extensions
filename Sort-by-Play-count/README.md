# Sort By Play Count

Sorts Songs by :

* Play Count - No of people listened to that song

* Scrobbles - How many times every single listener has listened to that song

* Personal Scrobbles - How many times you have listened to that song

Using Last.FM

<br />

![Screenshot](https://raw.githubusercontent.com/Tetrax-10/Spicetify-Extensions/master/Sort-by-Play-count/screenshot.png)

![Screenshot](https://raw.githubusercontent.com/Tetrax-10/Spicetify-Extensions/master/Sort-by-Play-count/screenshot3.png)

<br />

## Need to Connect Spotify and Last.FM for Personal Scrobbles to Work

Step 1 : Make a [Last.FM Account](https://www.last.fm/join)

Step 2 : Connect [Spotify Scrobbling](https://www.last.fm/settings/applications)

Step 3 : Paste your `UserName` in Spotify by going to User (on top right) -> Sort By Play Count -> Register Username

![Screenshot](https://raw.githubusercontent.com/Tetrax-10/Spicetify-Extensions/master/Sort-by-Play-count/screenshot2.png)

<br />

## Get it on Spicetify Marketplace

Step 1 : Follow [Spicetify Marketplace](https://github.com/spicetify/spicetify-marketplace) readme and install it.

Step 2 : Open Spotify App -> Marketplace -> Extensions

Step 3 : Search `Sort By Play Count` Click Install Buttton. Done!

<br />

## Install Manually (Recommended)
Copy `sortByPlayCount.js` into your [Spicetify](https://github.com/spicetify/spicetify-cli) extensions directory:
| **Platform** | **Path**                                                                            |
|------------|-----------------------------------------------------------------------------------|
| **Linux**      | `~/.config/spicetify/Extensions` or `$XDG_CONFIG_HOME/.config/spicetify/Extensions/` |
| **MacOS**      | `~/spicetify_data/Extensions` or `$SPICETIFY_CONFIG/Extensions`                      |
| **Windows**    | `%appdata%\spicetify\Extensions`                                              |

After putting the extension file into the correct folder, run the following command to install the extension:
```
spicetify config extensions sortByPlayCount.js
spicetify apply
```

<br />

# Credits
[@LucasBares](https://github.com/LucasBares) for Last.FM Register PopupModal

<br />

## Support
🌟 Like it? Gimme Some Love ! 💕

[![Github Stars badge](https://img.shields.io/github/stars/Tetrax-10/Spicetify-Extensions?logo=github&style=social)](https://github.com/Tetrax-10/Spicetify-Extensions)
