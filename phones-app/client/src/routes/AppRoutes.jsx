import React from "react"
import { Routes, Route } from 'react-router-dom'
import HomePage from "../pages/HomePage"
import PhonePage from "../pages/PhonePage"
import Contact from "../pages/Contact"
import TabletPage from "../pages/TabletPage"
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
           <Route path="/phones" element={<PhonePage/>}/>
           <Route path="/contact" element={<Contact/>}/>
            <Route path="/tablets" element={<TabletPage />} />
        </Routes>
    )
}
export default AppRoutes