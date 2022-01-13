import './PhonesList.css';
import PhonesListItem from '../phonesListItem/PhonesListItem';

function PhonesList({ phones }) {
	return(
		<div className="phones-list-container">
			{phones?.map(phone => <PhonesListItem key={phone.id} phone={phone} />)}
		</div>
	)
}

export default PhonesList;