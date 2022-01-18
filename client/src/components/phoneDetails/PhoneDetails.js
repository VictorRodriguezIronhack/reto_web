import './PhoneDetails.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import usePhoneByID from '../../hooks/usePhoneById';

function PhoneDetails(){

	const {id} = useParams();
	
	const {phoneById} = usePhoneByID(id);
	
	const [phone, setPhone] = useState([]);

	useEffect(() => {
		setPhone(phoneById);
		console.log(phoneById);
	}, [phoneById]);


	const { name, manufacturer, description, price, color, screen, processor, imageFileName, ram} = phone;
	
	return(
		<div className="phone-details-container">
			<div className="phone-details-title">
				<h1>{name}</h1>
				<h2>By {manufacturer}</h2>
			</div>
			<div className='phone-details-img'>
				<img src={`/${imageFileName}`} alt={name}/>
			</div>
			<div className='phone-details-info'>
				<div className="phone-details-description">
					<p>{description}</p>
				</div>
				<div className="phone-details-features">
					<ul>
						<li> Precio: {price}€</li>
						<li> Color: {color}</li>
						<li> Pantalla: {screen}</li>
						<li> Procesador: {processor}</li>
						<li> RAM: {ram}</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default PhoneDetails;