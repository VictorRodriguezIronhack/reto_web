import { useContext, Fragment } from 'react';
import { /*Link, NavLink,*/ useHistory } from 'react-router-dom';
import { logout } from '../../services/users-service';
import { AuthContext } from '../../contexts/AuthStore';
import './navbar.css';

function Navbar() {
    const { user, isAuthenticated, onUserChange } = useContext(AuthContext);
    const history = useHistory();
    console.log(user);
    async function handleLogout() {
        await logout();
        onUserChange(undefined);
        history.push('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
            <div className="container justify-content-end">
                <a href="/home" className="title text-white mY-2 pb-3 border-bottom border-secondary w-100">
                    <h4 className="text-white" link="/home">
                        <i className="fas fa-mobile-alt text-white me-3" link="/home"></i>
                        The Phone Cave
                    </h4>
                </a>
                
                <div className="navbar-nav ">

                    {!isAuthenticated() && (
                        <Fragment>
                            <ul className="nav align-items-center" id="navbarSupportedContent">
                                <a className="nav-link nav-item text-secondary me-3" href="/login" >| Login</a>
                                <a className="nav-link nav-item text-secondary me-3" href="/register" tabIndex="-1" aria-disabled="true">|  Register</a>
                                <i className="fas fa-user-lock text-secondary me-3"></i>
                            </ul>
                        </Fragment>
                    )}

                    {isAuthenticated() && (
                        <Fragment>
                            <ul className="nav align-items-center" id="navbarSupportedContent">
                                <li className="nav-item text-secondary me-5"><h6>Welcome {user.name}</h6></li>
                                <li><a className="nav-item me-4" href="/#"><i className="fas fa-shopping-cart text-secondary"> 0</i></a></li>
                                <li className="nav-item mt-2"><button type="submit" className="btn btn-link link-unstyled text-secondary" onClick={handleLogout}><h6><i className="fas fa-sign-out-alt"></i></h6></button></li>
                            </ul>
                        </Fragment>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;