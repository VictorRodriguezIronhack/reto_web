import { Routes, Route } from 'react-router-dom'
import PhoneListPage from '../pages/PhoneListPage'
import IndexPage from '../pages/IndexPage'


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/phoneList" element={<PhoneListPage />} />
        </Routes>
    )
}
export default AppRoutes