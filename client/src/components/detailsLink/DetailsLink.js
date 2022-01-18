import { Link } from 'react-router-dom';

function DetailsLink({phone, children}){
	return(
		<Link to={`${phone._id}`} >	
			{children}
		</Link>
	);
}

export default DetailsLink;