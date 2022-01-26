import './PhonesList.css';
import PhonesListItem from '../phonesListItem/PhonesListItem';

import { AllPhonesContext } from '../../contexts/AllPhonesContext';
import { useState, useEffect, useContext } from "react";
import ProductListContainer from '../../elements/ProductListContainer';

function PhonesList() {

	const {allPhones} = useContext(AllPhonesContext);

	const [listPhones, setListPhones] = useState([]);
	
	useEffect(() => {

		function getPhones() {
			setListPhones(allPhones.phones);
		}
		getPhones();
		
	} , [allPhones.phones]);

	console.log(listPhones);


	return(
		<ProductListContainer>
			{listPhones?.map(phone => <PhonesListItem key= {phone._id} phone={phone} />)}
		</ProductListContainer>
	)
}

export default PhonesList;