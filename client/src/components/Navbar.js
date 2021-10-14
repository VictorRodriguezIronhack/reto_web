import { Link } from 'react-router-dom';
import { useContext } from 'react'; // <== IMPORT
import { AuthContext } from './../context/auth.context'; // <== IMPORT

function Navbar() {
	// Subscribe to the AuthContext to gain access to
	// the values from AuthContext.Provider `value` prop
	const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

	return (
		<nav className="navbarPhones">
			<Link to="/">
				<button>Home</button>
			</Link>
			<Link to="/telefonos">
				<button>Phones</button>
			</Link>
			{isLoggedIn ? (
				<div>
					<button onClick={logOutUser}>Logout</button>
					<span>{user.name}</span>
				</div>
			) : (
				<div>
					<Link to="/signup">
						{' '}
						<button>Signup</button>{' '}
					</Link>
					<Link to="/login">
						{' '}
						<button>Login</button>{' '}
					</Link>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
