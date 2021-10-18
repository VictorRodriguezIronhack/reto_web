import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useContext } from 'react'; // <== IMPORT
import { AuthContext } from '../../context/auth.context'; // <== IMPORT

//Component CSS
import './Navbar.css';

function NavbarMenu() {
	// Subscribe to the AuthContext to gain access to
	// the values from AuthContext.Provider `value` prop
	const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

	return (
		<div className="navbar_container">
			<nav className="navbarPhones navbarDouble">
				<div>
					{/* <Link to="/">
						<button className="navbar_a_button">Home</button>
					</Link> */}
					<Link to="/telefonos">
						<button className="navbar_a_button">Phones</button>
					</Link>
				</div>
				<div>
					{isLoggedIn ? (
						<div className="max__WidthNavbar">
							<span className="user__Name">
								Welcome, <span className="bolder">{user.name}</span>
							</span>
							{user.image ? (
								<Nav.Link className="noPointer">
									<img
										src={user.image}
										className="imgAvatar"
										alt="avatar"
										// onClick={toUserProfile}
										style={{ pointerEvents: 'all' }}
									/>
								</Nav.Link>
							) : null}
							<button onClick={logOutUser} className="navbar_a_button">
								Logout
							</button>
						</div>
					) : (
						<div>
							<Link to="/signup">
								<button className="navbar_a_button">Signup</button>
							</Link>
							<Link to="/login">
								<button className="navbar_a_button">Login</button>
							</Link>
						</div>
					)}
				</div>
			</nav>
		</div>
	);
}

export default NavbarMenu;
