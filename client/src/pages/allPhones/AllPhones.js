import './AllPhones.css';

import PhonesList from '../../components/phonesList/PhonesList';
import Cart from '../../components/cart/Cart';



function AllPhones({phones}){

	return(
		<div className="all-phones-container">
			
				<Cart />

			<div className="all-phones-title">
				<h1>Teléfonos</h1>
			</div>
			<div>
				<PhonesList phones={phones} />
			</div>
		</div>
	);
}

export default AllPhones;