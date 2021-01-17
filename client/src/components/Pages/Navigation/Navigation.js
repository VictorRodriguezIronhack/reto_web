import './Navigation.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import PostAddIcon from '@material-ui/icons/PostAdd';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CreateIcon from '@material-ui/icons/Create';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import AuthService from './../../../Service/Auth.service'
import smartphone from './smartphone.png'

const Navigation = props => {

    console.log('Navigation props', props)

    const [burger, setBurger] = useState({
        burger1: "spinner diagonal part-1",
        burger2: "spinner horizontal",
        burger3: "spinner diagonal part-2",
        sidebar: "sidebarMenu",
        SubSidebar: "SubSidebarMenu",
        open: false,
    })

    const handleBurgerClick = () => {
        if (burger.open === false) {
            setBurger({
                burger1: "spinner diagonal part-1 Checked",
                burger2: "spinner horizontal Checked",
                burger3: "spinner diagonal part-2 Checked",
                sidebar: "sidebarMenu Checked",
                SubSidebar: "SubSidebarMenu Checked",
                open: true,
            })
        } else {
            setBurger({
                burger1: "spinner diagonal part-1",
                burger2: "spinner horizontal",
                burger3: "spinner diagonal part-2",
                sidebar: "sidebarMenu",
                SubSidebar: "SubSidebarMenu",
                open: false,
            })
        }
    }

    const handleHideClick = () => {
        setBurger({
            burger1: "spinner diagonal part-1",
            burger2: "spinner horizontal",
            burger3: "spinner diagonal part-2",
            sidebar: "sidebarMenu",
            SubSidebar: "SubSidebarMenu",
            open: false,
        })
    }
    const logout = () => {
        const authService = new AuthService()

        authService
            .logout()
            .then(res => props.storeUser(undefined))
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="Navbar Dark">
                <div className="Burger" onClick={() => handleBurgerClick()}>
                    <div className={burger.burger1}></div>
                    <div className={burger.burger2}></div>
                    <div className={burger.burger3}></div>
                </div>

                <Link onClick={() => handleHideClick()} to="/" style={{ margin: "0 auto", marginLeft: "calc(50% - 20px)" }}>
                    <img src={smartphone} width="40" height="40" style={{ marginTop: "10px" }} alt="myAlt"></img>
                </Link>

            </div>
            <div className={burger.SubSidebar} onClick={() => handleHideClick()}></div>

            {/* MODAL */}
            {/* <div className={burger.sidebar}> */}
            <div className={[burger.sidebar, "Navbar Dark"].join(" ")}>


                {/* LINKS */}
                <Link onClick={() => handleHideClick()} className="BarLink" to="/phones"><li><AddToHomeScreenIcon className="BarIcon" /> Phones</li></Link>
                {props.loggedUser

                    ?
                    <>
                        <Link onClick={() => handleHideClick()} className="BarLink" to="/nuevo-telefono"><li><PeopleAltIcon className="BarIcon" /> New phone</li></Link>
                        
                        <Link onClick={() => logout()} className="BarLink" ><li><CreateIcon className="BarIcon" /> Logout</li></Link>
                    </>
                    :
                    <>
                        <Link onClick={() => handleHideClick()} className="BarLink" to="/login"><li><PeopleAltIcon className="BarIcon" /> Login</li></Link>
                        <Link onClick={() => handleHideClick()} className="BarLink" to="/signup"><li><CreateIcon className="BarIcon" /> Signup</li></Link>
                    </>
                }
            </div>
        </>
    );
}

export default Navigation;