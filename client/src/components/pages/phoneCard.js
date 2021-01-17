import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './phoneCard.css'

const PhoneCard = ({_id, name, price, imageFileName, }) => {
    return (
        <Card >
            <Card.Img className="image" variant="top" src={imageFileName} />
        <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Price:<strong>{price}$</strong> 
            </Card.Text>
            <Link to={`/phone/${_id}`} >Details</Link>
        </Card.Body>
        </Card>
    )
}

export default PhoneCard