import { Outlet } from 'react-router-dom'
import HeaderBar from './components/HeaderBar'
import SideBar from './components/Sidebar'
import WindTopBar from '@/components/WindTopBar'
import './index.less'

export default function LayoutPages() {
    return (
        <div className='layout-wrap'>
            <WindTopBar />
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
