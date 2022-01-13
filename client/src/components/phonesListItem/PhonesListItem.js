import './PhonesListItem.css';
import { Link } from 'react-router-dom';

function PhonesListItem({phone}){
	return(
		<Link to={`/${phone.id}`}>
			<div className="phones-list-item">
				<h4>{phone.name}</h4>
			</div>
		</Link>
	)
}

export default PhonesListItem;