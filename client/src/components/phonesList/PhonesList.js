import './PhonesList.css';
import PhonesListItem from '../phonesListItem/PhonesListItem';
import DetailsLink from '../detailsLink/DetailsLink';
import useAllPhones from '../../hooks/useAllPhones';
import { useState, useEffect } from "react";

function PhonesList() {

	const {allPhones, loading} = useAllPhones();

	const [listPhones, setListPhones] = useState([]);
	


	useEffect (() => {
		setListPhones(allPhones);
	} , [allPhones]);

	return(
		<div className="phones-list-container">
			{listPhones?.map(phone => <DetailsLink phone={phone} key={phone._id}>
				<PhonesListItem key= {phone._id} phone={phone} />
			</DetailsLink>)}
		</div>
	)
}

export default PhonesList;