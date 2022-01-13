import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import TelefonosPage from '../pages/TelefonosPage/TelefonosPage'


function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/telefonos" element={<TelefonosPage />} />
        </Routes>
    )
}

export default AppRoutes