import React from "react"
import { Routes, Route } from 'react-router-dom'
import HomePage from "../pages/HomePage"
import PhonePage from "../pages/PhonePage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
           <Route path="/phones" element={<PhonePage/>}/>
        </Routes>
    )
}
export default AppRoutes