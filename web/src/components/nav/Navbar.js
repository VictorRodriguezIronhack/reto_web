import { useContext, Fragment } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { logout } from '../../services/users-service';
import { AuthContext } from '../../contexts/AuthStore';

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

        <nav className="navbar navbar-expand-lg navbar-light" >
            <div className="container justify-content-around">
                <h4 className="text-secondary mt-2 pb-3 border-bottom border-secondary w-100"><i class="fas fa-mobile-alt text-secondary me-3"></i>The Phone Cave</h4>
                <div className="navbar-nav">

                    {!isAuthenticated() && (
                        <Fragment>
                            <ul className="nav align-items-center" id="navbarSupportedContent">
                                <li className="nav-link nav-item text-secondary me-3" href="/login" >| Login</li>
                                <li className="nav-link nav-item text-secondary me-5" href="/register" tabIndex="-1" aria-disabled="true">|  Register</li>
                                <li className="nav-item ms-5"><i className="fas fa-shopping-cart text-secondary"> 0</i></li>
                            </ul>
                        </Fragment>
                    )}

                    {isAuthenticated() && (
                        <Fragment>
                            {/* <li className="nav-item"><NavLink className={`nav-link text-secondary pe-5 ${user.role === "admin" ? "text-danger" : 'd-none'} `} activeClassName="active" to="/users-list">Zona admin</NavLink></li> */}
                            {/* <li className="nav-item"><Link className={`nav-link text-secondary pe-5 ${user.role === "guest" ? "text-secondary" : 'text-danger'} `} to="/create-house">¿Tienes una vivienda solidaria?</Link></li> */}
                            <li className="nav-item"><Link className={`nav-link text-secondary pe-5 ${user.role === "guest" ? "text-secondary" : 'text-danger'} `} to="/bookings">Mis reservas</Link></li>

                            <li className="nav-item">
                                Bienvenido/a {user.name}
                                <li className="nav-item ps-5"><button type="submit" className="btn btn-link link-unstyled text-secondary" onClick={handleLogout}><h6><i class="fas fa-sign-out-alt"></i></h6></button></li>
                            </li>
                        </Fragment>
                    )}

                </div>
            </div>

        </nav>
    );
}

export default Navbar;