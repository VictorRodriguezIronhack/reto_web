import { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from './../context/auth.context';

const API_URL = process.env.REACT_APP_API_URL;

function LoginPage(props) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errorMessage, setErrorMessage ] = useState(undefined);

	const { logInUser } = useContext(AuthContext);

	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		const requestBody = { email, password };

		axios
			.post(`${API_URL}/auth/login`, requestBody)
			.then((response) => {
				console.log('JWT token', response.data.authToken);

				const token = response.data.authToken;
				logInUser(token);
				props.history.push('/');
			})
			.catch((error) => {
				const errorDescription = error.response.data.message;
				setErrorMessage(errorDescription);
			});
	};

	return (
		<div className="LoginPage">
			<h1>Login</h1>

			<form onSubmit={handleLoginSubmit}>
				<div className="form-group">
					<label>Email</label>
					<input type="text" name="email" value={email} onChange={handleEmail} className="form-control" />

					<label>Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={handlePassword}
						className="form-control"
					/>

					<button type="submit" className="btn btn-success btn-signup-login">
						Login
					</button>
				</div>
			</form>
			{errorMessage && <p className="error-message">{errorMessage}</p>}

			<p>
				Don't have an account yet?{' '}
				<Link to={'/signup'} className="colorBlue">
					{' '}
					Sign Up
				</Link>
			</p>
		</div>
	);
}

export default LoginPage;
