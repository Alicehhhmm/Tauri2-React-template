import { useState, useEffect } from 'react'
import { setTheme } from '@tauri-apps/api/app'
import { PiCloudSunLight, PiCloudMoon } from 'react-icons/pi'

export default function ChangeTheme() {
    const [isDark, setIsDark] = useState<boolean>(true)

    function applyTheme(isDark: boolean) {
        const html = document.querySelector('html')
        console.log('html', html)

        isDark ? html?.classList.add('dark') : html?.classList.remove('dark')
        localStorage && localStorage.setItem('theme', isDark ? 'dark' : '')
    }

    function toggleDark() {
        setIsDark(!isDark)
        applyTheme(isDark)
        setTheme(isDark ? 'dark' : 'light')
    }

    useEffect(() => {
        applyTheme(isDark)
    }, [])

    return (
        <>
            <button className='swith' onClick={toggleDark}>
                {isDark ? <PiCloudSunLight size={32} color='#ffc900' /> : <PiCloudMoon size={32} color='rgb(0, 255, 255)' />}
            </button>
        </>
    )
}
