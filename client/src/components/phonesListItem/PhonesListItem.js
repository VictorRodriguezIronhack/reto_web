import './PhonesListItem.css';

function PhonesListItem({phone}){
	return(

			<div className="phones-list-item">
				<h4>{phone.name}</h4>
			</div>

	)
}

export default PhonesListItem;