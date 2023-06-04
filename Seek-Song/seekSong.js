// @ts-chec

// NAME: Seek Song
// AUTHOR: Tetrax-10
// DESCRIPTION: Brings YouTube Keybinds in Spotify

/// <reference path="../dev/globals.d.ts" />

;(async function seekSong() {
    if (!Spicetify.Player) {
        setTimeout(seekSong, 300)
        return
    }

    let skipBackwardValue = 10
    let skipForwardValue = 10

    function setProgressPercent(percent) {
        Spicetify.Player.seek((percent / 100) * getSongLength())
    }

    function getSongLength() {
        return Spicetify.Player.getDuration()
    }

    function eventTriggerWithKey(key, functionToExecute) {
        Spicetify.Mousetrap.bind(key, functionToExecute)
    }

    ////////////////////////////////////// Main ////////////////////////////////////

    window.addEventListener(
        "keydown",
        function (e) {
            if (["ArrowUp", "ArrowDown"].indexOf(e.code) > -1) {
                e.preventDefault()
            }
        },
        false
    )

    eventTriggerWithKey("0", () => {
        Spicetify.Player.seek(0)
    })
    eventTriggerWithKey("1", () => {
        setProgressPercent(10)
    })
    eventTriggerWithKey("2", () => {
        setProgressPercent(20)
    })
    eventTriggerWithKey("3", () => {
        setProgressPercent(30)
    })
    eventTriggerWithKey("4", () => {
        setProgressPercent(40)
    })
    eventTriggerWithKey("5", () => {
        setProgressPercent(50)
    })
    eventTriggerWithKey("6", () => {
        setProgressPercent(60)
    })
    eventTriggerWithKey("7", () => {
        setProgressPercent(70)
    })
    eventTriggerWithKey("8", () => {
        setProgressPercent(80)
    })
    eventTriggerWithKey("9", () => {
        setProgressPercent(90)
    })
    eventTriggerWithKey(",", () => {
        Spicetify.Player.skipBack(1000)
    })
    eventTriggerWithKey(".", () => {
        Spicetify.Player.skipForward(1000)
    })
    eventTriggerWithKey("left", () => {
        Spicetify.Player.skipBack(skipBackwardValue * 1000)
    })
    eventTriggerWithKey("right", () => {
        Spicetify.Player.skipForward(skipForwardValue * 1000)
    })
    eventTriggerWithKey("up", () => {
        Spicetify.Player.increaseVolume()
    })
    eventTriggerWithKey("down", () => {
        Spicetify.Player.decreaseVolume()
    })
    eventTriggerWithKey("-", () => {
        Spicetify.Player.seek(0)
        Spicetify.Player.back()
    })
    eventTriggerWithKey("+", () => {
        Spicetify.Player.next()
    })
    eventTriggerWithKey("=", () => {
        Spicetify.Player.next()
    })
})()
