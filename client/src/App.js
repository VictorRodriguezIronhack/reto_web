import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Phones from "./components/pages/Phones";
import PhoneDetails from "./components/pages/PhoneDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Phones />} />
          <Route path="/allphones/details/:id" element={<PhoneDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// <Switch>
//   <Route path="/">
//     <Phones />
//   </Route>
//   {/* <Route path="/phoneDetails" exact render={() => <PhonesDetails />} /> */}
// </Switch>
