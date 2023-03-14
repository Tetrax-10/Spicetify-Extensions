// @ts-chec

// NAME: Play on YouTube
// AUTHOR: Tetrax-10
// DESCRIPTION: Plays the Video Song of a Track in YouTube

/// <reference path="../dev/globals.d.ts" />

(async function playOnYouTube() {
    if (!Spicetify.ContextMenu) {
        setTimeout(playOnYouTube, 300);
        return;
    }

    let YouTubeApiKey = "AIzaSyACDngJWrORcuLtE4FMG0PIKRZTCckVnkA";
    let YouTubeSVG = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="19px" height="19px"><path fill="currentColor" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><path fill="var(--spice-main)" d="M20 31L20 17 32 24z"/></svg>`;

    function shouldAddToTrack(uri) {
        let uriObj = Spicetify.URI.fromString(uri[0]);
        switch (uriObj.type) {
            case Spicetify.URI.Type.TRACK:
                return true;
        }
        return false;
    }

    async function playYouTubeVideoFromTrackID(uri) {
        try {
            let rawRes = await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/tracks/" + uri[0].split(":")[2]);
            let trimmedSongName = rawRes.name
                .replace(/\(.+?\)/g, "")
                .replace(/\[.+?\]/g, "")
                .replace(/\s\-\s.+?$/, "")
                .replace(/,.+?$/, "")
                .trim();
            let searchString = rawRes.album.artists.map((a) => a.name).join(", ") + " - " + rawRes.name + " video song";
            let youtubeRes = await Spicetify.CosmosAsync.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(searchString)}&type=video&key=${YouTubeApiKey}`);
            let youtubeVideoKey = youtubeRes.items[0].id.videoId;

            youtubeRes.items.every((video) => {
                if (video.snippet.title.includes(trimmedSongName)) {
                    youtubeVideoKey = video.id.videoId;
                    return false;
                }
                return true;
            });

            window.open(`https://www.youtube.com/watch?v=${youtubeVideoKey}`);
        } catch (error) {
            console.log(error);
        }
    }

    new Spicetify.ContextMenu.Item("Play on YouTube", playYouTubeVideoFromTrackID, shouldAddToTrack, YouTubeSVG).register();
})();
