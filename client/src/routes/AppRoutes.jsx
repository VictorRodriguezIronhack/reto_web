import { Routes, Route } from "react-router-dom";
import DetailPage from "../pages/detailPage/DetailPage";
import IndexPage from "../pages/indexPage/IndexPage";




const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<IndexPage />}
                ></Route>
                <Route
                    path="/:id"
                    element={<DetailPage />}
                ></Route>
            </Routes>

        </>
    )
}

export default AppRoutes