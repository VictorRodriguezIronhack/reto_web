import './PhonesList.css';
import PhonesListItem from '../phonesListItem/PhonesListItem';
import DetailsLink from '../detailsLink/DetailsLink';
import { AllPhonesContext } from '../../contexts/AllPhonesContext';
import { useState, useEffect, useContext } from "react";

function PhonesList() {

	const {allPhones, setAllPhones} = useContext(AllPhonesContext);

	const [listPhones, setListPhones] = useState([]);
	
	useEffect(() => {

		function getPhones() {
			setListPhones(allPhones.phones);
		}
		getPhones();
		
	} , [allPhones.phones]);

	console.log(listPhones);


	return(
		<div className="phones-list-container">
			{listPhones?.map(phone => <DetailsLink id={phone._id} key={phone._id}>
				<PhonesListItem key= {phone._id} phone={phone} />
			</DetailsLink>)}
		</div>
	)
}

export default PhonesList;