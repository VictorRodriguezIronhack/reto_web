import { Link } from 'react-router-dom'
const PhoneCard = ({phone}) => {
    return ( 
        <li>
            <h2>

                <Link to={`/detalles/${phone.id}`}>Detalles: {phone.name}</Link>
            </h2>
        </li>
     )
}

export default PhoneCard