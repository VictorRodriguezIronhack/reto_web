import { Routes, Route } from 'react-router-dom'
import LandingPage from "../pages/LandingPage"
import PhonePage from "../pages/PhonePage"
const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<LandingPage />} />
            <Route path="/phones" element={<PhonePage />} />

            <Route path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
    )
}
export default AppRoutes