// @ts-chec

// NAME: Hide Sidebar Items
// AUTHOR: Tetrax-10
// DESCRIPTION: Hide sidebar items like liked songs, create playlist, your podcast.

/// <reference path="../globals.d.ts" />

let skipBackwardValue = 10;
let skipForwardValue = 10;

(async function seekSong() {
    const { Platform } = Spicetify;
    if (!Platform) {
        setTimeout(seekSong, 300);
        return;
    }
    initSeekSong();
})();

function initSeekSong() {
    function setProgressPercent(percent) {
        Spicetify.Player.seek((percent / 100) * getSongLength());
    }

    function getSongLength() {
        return Spicetify.Player.getDuration();
    }

    function eventTriggerWithKey(key, functionToExecute) {
        Spicetify.Mousetrap.bind(key, functionToExecute);
    }

    function main() {
        window.addEventListener(
            "keydown",
            function (e) {
                if (["ArrowUp", "ArrowDown"].indexOf(e.code) > -1) {
                    e.preventDefault();
                }
            },
            false
        );

        eventTriggerWithKey("0", () => {
            Spicetify.Player.seek(0);
        });
        eventTriggerWithKey("1", () => {
            setProgressPercent(10);
        });
        eventTriggerWithKey("2", () => {
            setProgressPercent(20);
        });
        eventTriggerWithKey("3", () => {
            setProgressPercent(30);
        });
        eventTriggerWithKey("4", () => {
            setProgressPercent(40);
        });
        eventTriggerWithKey("5", () => {
            setProgressPercent(50);
        });
        eventTriggerWithKey("6", () => {
            setProgressPercent(60);
        });
        eventTriggerWithKey("7", () => {
            setProgressPercent(70);
        });
        eventTriggerWithKey("8", () => {
            setProgressPercent(80);
        });
        eventTriggerWithKey("9", () => {
            setProgressPercent(90);
        });
        eventTriggerWithKey("left", () => {
            Spicetify.Player.skipBack(skipBackwardValue * 1000);
        });
        eventTriggerWithKey("right", () => {
            Spicetify.Player.skipForward(skipForwardValue * 1000);
        });
        eventTriggerWithKey("up", () => {
            Spicetify.Player.increaseVolume();
        });
        eventTriggerWithKey("down", () => {
            Spicetify.Player.decreaseVolume();
        });
    }
    main();
}
