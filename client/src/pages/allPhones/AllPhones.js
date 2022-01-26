import './AllPhones.css';

import PhonesList from '../../components/phonesList/PhonesList';
import MainNav from '../../components/mainNav/MainNav';



function AllPhones({phones}){

	return(
		<div className="all-phones-container">

			<MainNav/>
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