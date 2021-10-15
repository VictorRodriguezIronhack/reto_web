//Componentes
import { Spinner } from 'react-bootstrap';
//Axios usage
import axios from 'axios';
//use Effect needed
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

function Phones() {
	//Coming from GET
	const [ infoPhone, setInfoPhone ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const { id } = useParams();

	const getInfoPhone = () => {
		// Get the token from the localStorage
		const storedToken = localStorage.getItem('authToken');

		axios
			.get(`${API_URL}/telefonos/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then((response) => {
				setInfoPhone(response.data);
				//console.log(response.data);
				setIsLoading(true);
			})
			.catch((error) => console.log(error));
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getInfoPhone();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="container_phones">
			<nav aria-label="breadcrumb" className="navbar_breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<a href="/">Home</a>
					</li>
					<li className="breadcrumb-item">
						<a href="/telefonos">Phones</a>
					</li>
					<li className="breadcrumb-item active" aria-current="page">
						Details
					</li>
				</ol>
			</nav>
			<h1 className="title_phones">Phone details</h1>
			<div className="container">
				<div className="row">
					<div className="card-deck">
						{isLoading ? (
							<div className="card marginBottom">
								<img
									className="card-img-top image-Phone"
									src={'../../public/' + infoPhone.imageFileName}
									alt="Phone"
								/>
								<div className="card-body">
									<h3 className="card-title">
										{infoPhone.name} - {infoPhone.manufacturer}
									</h3>
									<p className="card-text noMargin infoTextPhone">{infoPhone.description}</p>
									<p className="card-text noMargin">Color: {infoPhone.color}</p>
									<p className="card-text noMargin">Screen: {infoPhone.screen}</p>
									<p className="card-text noMargin">Processor: {infoPhone.processor}</p>
									<p className="card-text noMargin">Ram: {infoPhone.ram}</p>
									<p className="card-text noMargin boldText">
										Price: <span className="greenText">{infoPhone.price}€</span>
									</p>
								</div>
							</div>
						) : (
							<Spinner animation="border" role="status" className="margin50__bottom margin50__top">
								<span className="visually-hidden">Loading...</span>
							</Spinner>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Phones;
