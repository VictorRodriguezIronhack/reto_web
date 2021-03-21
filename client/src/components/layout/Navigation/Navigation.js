import { useState } from 'react'
import { Navbar } from 'react-bootstrap'
import './Navigation.css'

import { Link } from 'react-router-dom'

const Navigation = () => {

    const [changeClass, setChangeClass] = useState(false)
    document.addEventListener('scroll', (e) => scrollNav(e))

    function scrollNav(e) {
        const scrollTop = window.pageYOffset
        if (scrollTop > 1) setChangeClass(true)
        else if (scrollTop === 0) setChangeClass(false)
    }


    return (
        <Navbar expand="md" className={changeClass ? "navb filled" : "navb"} fixed="top" >
            <Link to="/">
                <Navbar.Brand> <img
                    alt=""
                    src='https://img.icons8.com/plasticine/2x/phone.png'
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                />{' '}</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

        </Navbar >
    )
}

export default Navigation