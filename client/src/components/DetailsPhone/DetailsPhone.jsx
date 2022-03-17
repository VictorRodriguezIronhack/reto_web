import { Link } from 'react-router-dom'
const DetailsPhone = ({id, name}) => {
    return ( 
        <>
            <h1>Detalles</h1>
        <li>
            <h2>
                <Link to={`/detalles/${id}`}>{name}</Link>
            </h2>
        </li>
        </>
     )
}

export default DetailsPhone