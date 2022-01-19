import { Link } from 'react-router-dom';

function DetailsLink({id , children}){
	return(
		<Link to={`${id}`} >	
			{children}
		</Link>
	);
}

export default DetailsLink;