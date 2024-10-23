import { NavLink } from 'react-router-dom'
import './index.less'

export default function SideBar() {
    return (
        <>
            <div className='sidebar'>
                <ul>
                    <li>
                        <NavLink to='/'>root</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                </ul>
                <footer className='footer'>&copy; 2024 by Norush</footer>
            </div>
        </>
    )
}
