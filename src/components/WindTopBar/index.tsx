import { useState, useEffect } from 'react'
import { getCurrentWindow, Window } from '@tauri-apps/api/window'
import { WebviewWindow } from '@tauri-apps/api/WebviewWindow'
import './index.less'

export default function WindTopBar() {
    const [isMax, setIsMax] = useState(false)
    let currentWindow = WebviewWindow.getCurrent()

    const handleMinimize = () => {
        // window.minimize()

        const appWindow = new Window('main')
        // appWindow.minimize()

        getCurrentWindow().minimize()

        console.log('handleMinimize', appWindow)
    }

    const handleMaximize = () => {
        console.log('handleMaximize', currentWindow)
        currentWindow.maximize()
        setIsMax(!isMax)
    }

    const handleUnMaximize = () => {
        console.log('handleUnMaximize', currentWindow)
        currentWindow.unmaximize()
        setIsMax(!isMax)
    }

    const handleClose = () => {
        currentWindow.close()
    }

    return (
        <>
            <div data-tauri-drag-region className='titlebar'>
                <div className='titlebar-button' id='titlebar-minimize' onClick={handleMinimize}>
                    <img src='https://api.iconify.design/mdi:window-minimize.svg' alt='minimize' />
                </div>
                <div className='titlebar-button' id='titlebar-maximize' onClick={isMax ? handleUnMaximize : handleMaximize}>
                    <img src='https://api.iconify.design/mdi:window-maximize.svg' alt='maximize' />
                </div>
                <div className='titlebar-button' id='titlebar-close' onClick={handleClose}>
                    <img src='https://api.iconify.design/mdi:close.svg' alt='close' />
                </div>
            </div>
        </>
    )
}
