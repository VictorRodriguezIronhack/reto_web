import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//CSS
import './SignupPage.css';

//Upload service - cloudinary
import UploadService from '../../services/upload.service';
import { Button, Spinner } from 'react-bootstrap';

const API_URL = process.env.REACT_APP_API_URL;

function SignupPage(props) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ name, setName ] = useState('');
	const [ errorMessage, setErrorMessage ] = useState(undefined);

	//Cloudinary
	const [ image, setImage ] = useState('');
	const [ isLoading, setIsLoading ] = useState(false);

	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);
	const handleName = (e) => setName(e.target.value);

	const handleSignupSubmit = (e) => {
		e.preventDefault();
		// Create an object representing the request body
		const requestBody = { email, password, name, image };

		// Make an axios request to the API
		// If POST request is successful redirect to login page
		// If the request resolves with an error, set the error message in the state
		axios
			.post(`${API_URL}/auth/signup`, requestBody)
			.then((response) => props.history.push('/login'))
			.catch((error) => {
				const errorDescription = error.response.data.message;
				setErrorMessage(errorDescription);
			});
	};

	const handleInputFile = (e) => {
		setIsLoading(true);

		const upload = new UploadService();

		let formData = new FormData();
		formData.append('file', e.target.files[0]);

		upload
			.fileUpload(formData)
			.then((response) => {
				setIsLoading(false);
				setImage(response.data.imageUrl);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="SignupPage">
			<h1>Sign Up</h1>

			<form onSubmit={handleSignupSubmit}>
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

					<label>Name</label>
					<input type="text" name="name" value={name} onChange={handleName} className="form-control" />

					<label>Avatar:</label>
					<input type="file" name="file" onChange={handleInputFile} className="form-control" />
					<div>
						<div className="margin-topSmall">
							{image ? (
								<img src={image} alt="avatar" style={{ width: '40px' }} className="imageSignup" />
							) : null}
						</div>
						{isLoading ? (
							<Button variant="primary" disabled>
								<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
								Loading...
							</Button>
						) : (
							<button type="submit" className="btn btn-success btn-signup-login">
								Sign Up
							</button>
						)}
					</div>
				</div>
			</form>

			{errorMessage && <p className="error-message">{errorMessage}</p>}

			<p>
				Already have account?{' '}
				<Link to={'/login'} className="colorBlue">
					{' '}
					Login
				</Link>
			</p>
		</div>
	);
}

export default SignupPage;
