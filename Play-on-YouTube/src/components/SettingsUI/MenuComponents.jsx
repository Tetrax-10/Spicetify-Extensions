import React, { useState, useEffect, useRef } from "react"

import { getConfig, saveConfig } from "../../utils/config"

let CONFIG = getConfig()

export function Heading({ start = false, children = "Title" } = {}) {
    return (
        <>
            <div className="popup-row">
                {start ? <LittleSpaceItem /> : null}
                <h3 className="div-title">{children}</h3>
                <hr className="divider"></hr>
            </div>
        </>
    )
}

export function ButtonItem({ color = "", children = "Button", onClickHandler = () => {} } = {}) {
    return (
        <button className={"login-button" + (color ? " " + color : "")} onClick={onClickHandler}>
            {children}
        </button>
    )
}

export function DescriptionItem({ children = "Description" } = {}) {
    const hasHighlight = React.Children.toArray(children).some((child) => child.type && child.type.name === "Highlight")

    return (
        <>
            {hasHighlight ? (
                <div className="popup-row">
                    <p className="col description">
                        <span>{children}</span>
                    </p>
                </div>
            ) : (
                <div className="popup-row">
                    <p className="col description">{children}</p>
                </div>
            )}
        </>
    )
}

export function Highlight({ children = "Highlight", color = "" } = {}) {
    return <span className={color ? " " + color : ""}>{children}</span>
}

export function LinkItem({ href = "https://www.youtube.com/", children = "YouTube" } = {}) {
    return (
        <div className="popup-row">
            <a className="demo" href={href}>
                {children}
            </a>
        </div>
    )
}

export function DividerItem() {
    return (
        <div className="popup-row">
            <hr className="divider"></hr>
        </div>
    )
}

export function LittleSpaceItem() {
    return (
        <div className="popup-row">
            <div className="little-space"></div>
        </div>
    )
}

export function SpaceItem() {
    return (
        <div className="popup-row">
            <hr className="space"></hr>
        </div>
    )
}

export function InputItem({ field = undefined, onChangeHandler: onChangeHandlerCallback = () => {} } = {}) {
    if (field === undefined) return null

    const [inputValue, setInputValue] = useState(CONFIG[field])

    function onChangeHandler(e) {
        setInputValue(e.target.value)
        CONFIG[field] = e.target.value
        saveConfig(field, CONFIG[field])
        onChangeHandlerCallback(e)
    }

    return (
        <div className="popup-row">
            <input placeholder="Your API Key" value={inputValue} className="inputbox" onChange={onChangeHandler}></input>
        </div>
    )
}

export function DynamicInputItem({ value = undefined, onChangeHandler: onChangeHandlerCallback = () => {}, onClickHandler: onClickHandlerCallback = () => {} }) {
    if (value === undefined) return null

    const [inputValue, setInputValue] = useState(value)

    useEffect(() => {
        setInputValue(value)
    }, [value])

    function onChangeHandler(e) {
        setInputValue(e.target.value)
        onChangeHandlerCallback(e.target.value)
    }

    return (
        <>
            <div className="popup-row">
                <div className="input-wrapper">
                    <input className="inputbox" value={inputValue} placeholder="Your API key" onChange={onChangeHandler}></input>
                    <button className="checkbox" type="button" onClick={onClickHandlerCallback}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" dangerouslySetInnerHTML={{ __html: Spicetify.SVGIcons.x }}></svg>
                    </button>
                </div>
            </div>
            <LittleSpaceItem />
        </>
    )
}

export function DynamicMultipleInputItem({ color = "", children = "Button" } = {}) {
    const [backupApiKeys, setbackupApiKeys] = useState(CONFIG.backupApiKeys)

    function updateInput(value, index) {
        let tempBackupApiKeys = [...backupApiKeys]
        tempBackupApiKeys[index] = value
        setbackupApiKeys(tempBackupApiKeys)
    }

    function deleteApiKey(index) {
        let tempBackupApiKeys = [...backupApiKeys]
        tempBackupApiKeys.splice(index, 1)

        // BUG: when clicking the last delete button the Popup modal closes due to setbackupApiKeys()
        setbackupApiKeys(tempBackupApiKeys) // removing this line doesn't cause this issue
    }

    function createNewInput() {
        if (backupApiKeys[backupApiKeys.length - 1] || backupApiKeys.length === 0) {
            setbackupApiKeys([...backupApiKeys, ""])
        }
    }

    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) {
            return (isFirstRender.current = false)
        }

        CONFIG.backupApiKeys = backupApiKeys.filter(Boolean)
        saveConfig("backupApiKeys", CONFIG.backupApiKeys)
    }, [backupApiKeys])

    return (
        <>
            {backupApiKeys.map((value, index) => {
                return (
                    <>
                        <DynamicInputItem
                            value={value}
                            onChangeHandler={(value) => {
                                updateInput(value, index)
                            }}
                            onClickHandler={() => {
                                deleteApiKey(index)
                            }}
                        />
                    </>
                )
            })}
            <div className="popup-row">
                <button className={"login-button center-button" + (color ? " " + color : "")} type="button" onClick={createNewInput}>
                    {children}
                </button>
            </div>
        </>
    )
}
