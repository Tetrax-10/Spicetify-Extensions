import React from "react"

import "./SettingsUI.scss"

import { DescriptionItem, Highlight, LinkItem, SpaceItem, LittleSpaceItem, InputItem, Heading, DynamicMultipleInputItem } from "./MenuComponents"

export default function SettingsUI() {
    return (
        <div className="tetrax-settings-menu" aria-label="YouTube API key">
            <Heading start="true">Info</Heading>
            <DescriptionItem>
                By Using your <Highlight color="red-text">Own API Key</Highlight> the exact video will <Highlight color="red-text">open directly on YouTube</Highlight>. If not only the relavent search
                page will be opened.
            </DescriptionItem>
            <LinkItem href="https://www.youtube.com/watch?v=44OBOSBd73M">How to get my API key? ( 1 min YouTube video )</LinkItem>
            <SpaceItem />
            <Heading>Enter your API key :</Heading>
            <LittleSpaceItem />
            <InputItem field="YouTubeApiKey" />
            <SpaceItem />
            <Heading>Backup API Keys (optional)</Heading>
            <DescriptionItem>
                If your API quota got <Highlight color="red-text">exceeded</Highlight> you will be taken to the <Highlight color="red-text">relavent search page</Highlight>. You can open{" "}
                <Highlight color="red-text">100 video songs</Highlight> directly a day for a single API Key. If you don't want to be redirected to the search page you can add more API keys to{" "}
                <Highlight color="red-text">increase quota</Highlight>.
            </DescriptionItem>
            <DynamicMultipleInputItem>Add another API key</DynamicMultipleInputItem>
        </div>
    )
}
