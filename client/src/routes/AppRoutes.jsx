import { Routes, Route } from "react-router-dom";
import PhonePage from "../pages/PhonePage/PhonePage";
import PhoneDetailPage from "../pages/PhoneDetailPage/PhoneDetailPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PhonePage />} />
      <Route path="/phones/:id" element={<PhoneDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
