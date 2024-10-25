import { useState, useEffect } from 'react'
import { setTheme } from '@tauri-apps/api/app'
import { PiCloudSunLight, PiCloudMoon } from 'react-icons/pi'

export default function ChangeTheme() {
    // current theme
    const [isDark, setIsDark] = useState(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) return storedTheme === 'dark'
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(() => {
        applyTheme(isDark)
    }, [isDark])

    function applyTheme(isDark: boolean) {
        const html = document.querySelector('html')
        html && (isDark ? html.classList.add('dark') : html.classList.remove('dark'))
        localStorage.setItem('theme', isDark ? 'dark' : 'light')
        setTheme(isDark ? 'dark' : 'light')
    }

    function toggleDark() {
        const newIsDark = !isDark
        setIsDark(newIsDark)
        applyTheme(newIsDark)
    }

    return (
        <button className='switch' onClick={toggleDark}>
            {isDark ? <PiCloudSunLight size={32} color='#ffc900' /> : <PiCloudMoon size={32} color='#00ffff' />}
        </button>
    )
}
