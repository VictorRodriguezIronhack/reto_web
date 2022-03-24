import Footer from "./components/Footer/Footer.jsx";
import Bar  from "./components/Navbar/Bar.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";


function App() {
  return (
    <>
    <Bar/>
      <AppRoutes />
      <Footer/>
    </>

  );
}

export default App;
