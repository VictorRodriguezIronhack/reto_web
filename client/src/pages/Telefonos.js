//Componentes
import { Spinner } from 'react-bootstrap';
//Axios usage
import axios from 'axios';
//use Effect needed
import { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

function Phones() {
	//Coming from GET
	const [ infoPhones, setInfoPhones ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);

	const getAllInfoPhones = () => {
		// Get the token from the localStorage
		const storedToken = localStorage.getItem('authToken');

		// Send the token through the request "Authorization" Headers
		axios
			.get(`${API_URL}/telefonos`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then((response) => {
				setInfoPhones(response.data);
				//console.log(response.data);
				setIsLoading(true);
			})
			.catch((error) => console.log(error));
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllInfoPhones();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="container_phones">
			<nav aria-label="breadcrumb" className="navbar_breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<a href="/">Home</a>
					</li>
					<li className="breadcrumb-item active" aria-current="page">
						Phones
					</li>
				</ol>
			</nav>
			<h1 className="title_phones">Our phones</h1>

			<div className="container">
				<div className="row">
					{isLoading ? (
						infoPhones.map((infoPhone) => (
							<div className="col-sm" key={infoPhone._id}>
								<div className="card marginBottom">
									<img
										className="card-img-top image-Phone"
										src={infoPhone.imageFileName}
										alt="Phone"
									/>
									<div className="card-body">
										<h3 className="card-title">
											{infoPhone.name} - {infoPhone.manufacturer}
										</h3>
										<p className="card-text noMargin infoTextPhone">{infoPhone.description}</p>
										<p>
											Price: <span className="greenText">{infoPhone.price}€</span>
										</p>
									</div>
									<div className="card-footer">
										<small className="text-muted">
											<a className="btn btn-danger" href={/telefonos/ + infoPhone._id}>
												Details
											</a>
										</small>
									</div>
								</div>
							</div>
						))
					) : (
						<div>
							<Spinner animation="border" role="status" className="margin50__bottom margin50__top">
								<span className="visually-hidden">Loading...</span>
							</Spinner>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Phones;
