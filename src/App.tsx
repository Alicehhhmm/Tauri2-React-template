import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutPages from '@/layout'
import HomePage from './pages/home'
import AboutPage from './pages/about'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LayoutPages />}>
                    <Route path='home' element={<HomePage />} />
                    <Route path='about' element={<AboutPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
