import { Outlet } from 'react-router-dom'
import HeaderBar from './components/HeaderBar'
import SideBar from './components/Sidebar'
import './index.less'

export default function LayoutPages() {
    return (
        <div className='layout-wrap'>
            <HeaderBar></HeaderBar>
            <div className='content-wrap'>
                <SideBar></SideBar>
                <main className='content'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
