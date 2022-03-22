import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PhoneList from "../pages/TelephoneList/PhoneList";


const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/telefonos" element={<PhoneList />} />
      </Routes>
    );
}

export default AppRoutes;