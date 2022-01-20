import './PhoneDetails.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import usePhoneByID from '../../hooks/usePhoneById';
import MainNav from '../../components/mainNav/MainNav';
import AddToCart from '../../components/addToCart.js/AddToCart';
import {DetailsContainer, DetailsCard, DetailsCardInfo} from '../../elements/DetailsContainer';

function PhoneDetails(){

	const {id} = useParams();
	
	const {phoneById} = usePhoneByID(id);
	
	const [phone, setPhone] = useState([]);

	useEffect(() => {
		setPhone(phoneById);
	}, [phoneById]);


	const { name, manufacturer, description, price, color, screen, processor, imageFileName, ram} = phone;
	
	return(
		<>
			<MainNav/>
			<DetailsContainer>
				<DetailsCard>
							<div>
									<h1>{name}</h1>
									<h2>By {manufacturer}</h2>
							</div>
						<DetailsCardInfo>
							<div>
								<img src={`/${imageFileName}`} alt={name} />
							</div>
							<div className="phone-details-features">
								<div className="phone-details-description">
									<p>{description}</p>
								</div>
								<ul>
									<li> Color: {color}</li>
									<li> Screen: {screen}</li>
									<li> Processor: {processor}</li>
									<li> RAM: {ram}</li>
								</ul>
							</div>
						</DetailsCardInfo>
						<DetailsCardInfo>
							<div>
								<h2>{price}€</h2>
							</div>
							<AddToCart phone={phone} />
						</DetailsCardInfo>
				</DetailsCard>	
			</DetailsContainer>
		</>
	);
}

export default PhoneDetails;