import './Navbar.scss';

function Navbar() {
    return (
        <div className="menu">
            <div className="label">The PhoneCave <i className="fas fa-mobile-alt"></i></div>
            <div className="spacer"></div>
            <div className="item"><span>Phones</span></div>
            <div className="item"><span>Login</span></div>
            <div className="item"><span>Register</span></div>
        </div>
    );
}

export default Navbar;