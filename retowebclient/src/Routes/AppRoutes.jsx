import { Routes, Route } from 'react-router-dom'
import ProductDetailsPage from '../Pages/ProductDetailsPage/ProductDetailsPage'
import ProductListPage from '../Pages/ProductListPage/ProductListPage'



const AppRoutes = () => {


    return (
        <Routes>
            <Route path='/' element={<ProductListPage />} />
            <Route path="/detalles/:product_id" element={<ProductDetailsPage />} />
        </Routes>
    )
}

export default AppRoutes