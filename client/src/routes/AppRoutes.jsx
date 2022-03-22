import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import TelephoneList from "../pages/TelephoneList/TelephoneList"


const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/telefonos" element={<TelephoneList />} />
      </Routes>
    );
}

export default AppRoutes;