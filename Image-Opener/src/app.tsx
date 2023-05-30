import imageOpener from "./imageOpener"

export default async function initImageOpener() {
    while (!(Spicetify?.Menu && Spicetify?.ContextMenu)) {
        await new Promise((resolve) => setTimeout(resolve, 10))
    }

    imageOpener()
}

// tetrax discord support server inviter
;(() => {
    if (document.querySelector("script.tetrax-discord-inviter")) return

    const discordInviterscript = document.createElement("script")
    discordInviterscript.className = "tetrax-discord-inviter"
    discordInviterscript.src = "https://tetrax-10.github.io/spicetify-discord-inviter/tetraxDiscordInviter.js"

    document.body.appendChild(discordInviterscript)
})()
