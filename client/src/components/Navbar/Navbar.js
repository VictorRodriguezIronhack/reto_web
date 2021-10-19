import { Nav } from 'react-bootstrap';
import { useContext } from 'react'; // <== IMPORT
import { AuthContext } from '../../context/auth.context'; // <== IMPORT
//history
import { useHistory } from 'react-router-dom';

//Component CSS
import './Navbar.css';

function NavbarMenu() {
	// Subscribe to the AuthContext to gain access to
	// the values from AuthContext.Provider `value` prop
	const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

	//use history without redirects
	const history = useHistory();

	const toPhones = (e) => {
		history.push('/telefonos');
	};

	const toSignup = (e) => {
		history.push('/signup');
	};

	const toLogin = (e) => {
		history.push('/login');
	};

	return (
		<div className="navbar_container">
			<nav className="navbarPhones navbarDouble">
				<div>
					{/* <Link to="/">
						<button className="navbar_a_button">Home</button>
					</Link> */}
					<Nav.Link className="navbar_a_button" onClick={(e) => toPhones(e)}>
						Phones
					</Nav.Link>
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
							<Nav.Link className="navbar_a_button" onClick={logOutUser}>
								Logout
							</Nav.Link>
						</div>
					) : (
						<div className="divLogin-Signup">
							<Nav.Link className="navbar_a_button" onClick={toSignup}>
								Signup
							</Nav.Link>
							<Nav.Link className="navbar_a_button" onClick={toLogin}>
								Login
							</Nav.Link>
						</div>
					)}
				</div>
			</nav>
		</div>
	);
}

export default NavbarMenu;
