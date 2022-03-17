import { Routes, Route } from "react-router-dom";
import TelephoneList from "../pages/TelephoneList/TelephoneList"


const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/telefonos" element={<TelephoneList />} />
      </Routes>
    );
}

export default AppRoutes;