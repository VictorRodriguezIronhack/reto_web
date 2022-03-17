import { Route, Routes } from 'react-router-dom'
import DetailsPhone from '../components/DetailsPhone/DetailsPhone'
import IndexPage from '../pages/IndexPage/IndexPage'


const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<IndexPage />} />
            <Route path='/detalles/:id' element={<DetailsPhone />} />
        </Routes>
    )
}
export default AppRoutes