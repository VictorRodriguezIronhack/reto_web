import { Route, Routes } from "react-router-dom"
import HomePage from "../page/HomePage/HomePage"
import PhoneDetailPage from "../page/PhoneDetailPage/PhoneDetailPage"

const AppRoutes = () => {
    return (
        <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/:id' element={<PhoneDetailPage />} />

        </Routes>
    )
}

export default AppRoutes