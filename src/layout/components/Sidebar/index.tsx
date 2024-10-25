import { NavLink } from 'react-router-dom'
import { MENU_NAV_MAP } from './menu-config'
import './index.less'

export default function SideBar() {
    return (
        <>
            <div className='sidebar'>
                <ul>
                    {MENU_NAV_MAP.map(menu => (
                        <li key={menu.path} className='navli'>
                            <span>{menu.icon}</span>
                            <NavLink to={menu.path}>{menu.label}</NavLink>
                        </li>
                    ))}
                </ul>
                <footer className='footer'>&copy; 2024 by Norush</footer>
            </div>
        </>
    )
}
