import playOnYouTube from "./playOnYouTube"

export default async function initPlayOnYouTube() {
    while (!(Spicetify?.Menu && Spicetify?.ContextMenu)) {
        await new Promise((resolve) => setTimeout(resolve, 10))
    }

    playOnYouTube()
}

// tetrax discord support server inviter
;(() => {
    if (document.querySelector("script.tetrax-discord-inviter")) return

    const discordInviterscript = document.createElement("script")
    discordInviterscript.className = "tetrax-discord-inviter"
    discordInviterscript.src = "https://tetrax-10.github.io/spicetify-discord-inviter/tetraxDiscordInviter.js"

    document.body.appendChild(discordInviterscript)
})()
