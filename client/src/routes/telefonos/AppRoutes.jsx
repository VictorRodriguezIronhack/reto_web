import TelefonosLista from "../../pages/TelefonosLista";
import DetallesTelefonos from "../../pages/DetallesTelefonos";
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<TelefonosLista />} />

            <Route path="/detalles/:id" element={<DetallesTelefonos />} />

        </Routes>
    )
}

export default AppRoutes