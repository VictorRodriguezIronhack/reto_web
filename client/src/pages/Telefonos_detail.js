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
				console.log(response.data);
				setIsLoading(true);
			})
			.catch((error) => console.log(error));
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllInfoPhones();
	}, []);

	return (
		<div>
			<h1>Phone Page</h1>
			<div className="carousel__Div">
				{infoPhones.map((infoPhone) => (
					<div className="PhoneDiv__Container" key={infoPhone.idPhone}>
						<div className="card-deck">
							<div className="card marginBottom">
								<img className="card-img-top image-Phone" src={infoPhone.imageFileName} alt="Phone" />
								<div className="card-body">
									<h3 className="card-title">
										{infoPhone.name} - {infoPhone.manufacturer}
									</h3>
									<p className="card-text noMargin infoTextPhone">{infoPhone.description}</p>
									<p className="card-text noMargin">Color: {infoPhone.color}</p>
									<p className="card-text noMargin">Screen: {infoPhone.screen}</p>
									<p className="card-text noMargin">Processor: {infoPhone.processor}</p>
									<p className="card-text noMargin">Ram: {infoPhone.ram}</p>
									<p className="card-text noMargin">ID: {infoPhone._id}</p>
									<p className="card-text noMargin boldText">
										Price: <span class="greenText">{infoPhone.price}€</span>
									</p>
								</div>
								<div className="card-footer">
									<small className="text-muted">
										<button class="btn btn-danger">Details</button>
									</small>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Phones;
