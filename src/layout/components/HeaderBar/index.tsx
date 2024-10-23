import { NavLink } from 'react-router-dom'
import './index.less'

export default function HeaderBar() {
    return (
        <>
            <header className='header'>
                <nav>
                    <ul>
                        <li className='nav-item'>File</li>
                        <li className='nav-item'>Tauri</li>
                        <li className='nav-item active'>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li className='nav-item'>Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
