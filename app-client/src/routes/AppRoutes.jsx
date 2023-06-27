import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import PhoneDetailsPage from '../pages/PhoneDetailsPage/PhoneDetailsPage'


const AppRoutes = () => {


    return (
        <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/telefonos/:id' element={<PhoneDetailsPage />} />

        </Routes >



    )
}

export default AppRoutes