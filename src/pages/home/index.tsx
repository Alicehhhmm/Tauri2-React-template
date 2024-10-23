import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import tauriLogo from '/tauriicon.png'
import './index.less'

export default function HomePage() {
    const [count, setCount] = useState(0)

    return (
        <section className='section'>
            <div>
                <a href='https://tauri.app' target='_blank'>
                    <img src={tauriLogo} className='logo' alt='Tauri logo' />
                </a>
                <a href='https://vitejs.dev' target='_blank'>
                    <img src={viteLogo} className='logo' alt='Vite logo' />
                </a>
                <a href='https://react.dev' target='_blank'>
                    <img src={reactLogo} className='logo react' alt='React logo' />
                </a>
            </div>
            <h1>Tauri2 + Vite + React</h1>
            <div className='card'>
                <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
        </section>
    )
}
