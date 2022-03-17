import { Routes, Route } from "react-router-dom"

import PhonesPage from "../pages/PhonesPage/PhonesPage"
import PhoneDetailsPage from "./../pages/PhoneDetailsPage/PhoneDetailsPage"
import ErrorPage from "./../pages/ErrorPage/ErrorPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<PhonesPage />} />
            <Route path="/telefonos/:telefono_id" element={<PhoneDetailsPage  />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRoutes