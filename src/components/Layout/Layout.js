import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

import "./Layout.css"

function Layout(props) {
    return (
        <section id="layout">
            <Navbar/>

            {props.children}

            <Footer/>
        </section>    
    );
  }
  
  export default Layout;
  