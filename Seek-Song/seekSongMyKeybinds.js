// @ts-chec

// NAME: Seek Song
// AUTHOR: Tetrax-10
// DESCRIPTION: Brings YouTube Keybinds in Spotify

/// <reference path="../dev/globals.d.ts" />

(async function seekSong() {
    if (!Spicetify.Player) {
        setTimeout(seekSong, 300);
        return;
    }

    let skipBackwardValue = 10;
    let skipForwardValue = 10;
    let ScrollValue = 10;
    let app = await waitForElement(".Root__main-view .os-viewport");

    function setProgressPercent(percent) {
        Spicetify.Player.seek((percent / 100) * getSongLength());
    }

    function getSongLength() {
        return Spicetify.Player.getDuration();
    }

    function eventTriggerWithKey(key, functionToExecute) {
        Spicetify.Mousetrap.bind(key, functionToExecute);
    }

    async function waitForElement(selector, timeout = null, location = document.body) {
        return new Promise((resolve) => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver(async () => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                } else {
                    if (timeout) {
                        async function timeOver() {
                            return new Promise((resolve) => {
                                setTimeout(() => {
                                    observer.disconnect();
                                    resolve(false);
                                }, timeout);
                            });
                        }
                        resolve(await timeOver());
                    }
                }
            });

            observer.observe(location, {
                childList: true,
                subtree: true,
            });
        });
    }

    function appScrollDown() {
        if (app) {
            let scrollInterval = setInterval(() => {
                app.scrollTop += ScrollValue;
            }, 10);
            document.addEventListener("keyup", () => {
                clearInterval(scrollInterval);
            });
        }
    }

    function appScrollUp() {
        if (app) {
            let scrollInterval = setInterval(() => {
                app.scrollTop -= ScrollValue;
            }, 10);
            document.addEventListener("keyup", () => {
                clearInterval(scrollInterval);
            });
        }
    }

    ////////////////////////////////////// Main ////////////////////////////////////

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
    eventTriggerWithKey(",", () => {
        Spicetify.Player.skipBack(1000);
    });
    eventTriggerWithKey(".", () => {
        Spicetify.Player.skipForward(1000);
    });
    eventTriggerWithKey("left", () => {
        Spicetify.Player.skipBack(skipBackwardValue * 1000);
    });
    eventTriggerWithKey("right", () => {
        Spicetify.Player.skipForward(skipForwardValue * 1000);
    });
    eventTriggerWithKey("up", () => {
        Spicetify.Player.next();
    });
    eventTriggerWithKey("down", () => {
        Spicetify.Player.seek(0);
        Spicetify.Player.back();
    });
    eventTriggerWithKey("+", () => {
        Spicetify.Player.increaseVolume();
    });
    eventTriggerWithKey("-", () => {
        Spicetify.Player.decreaseVolume();
    });

    eventTriggerWithKey("/", appScrollUp);
    eventTriggerWithKey("*", appScrollDown);
})();
