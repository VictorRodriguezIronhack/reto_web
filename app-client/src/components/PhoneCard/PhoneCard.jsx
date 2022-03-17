import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './PhoneCard.css'

const PhoneCard = ({ name, manufacturer, imageFileName, price, _id }) => {

    return (

        <>
            <Card className='phoneCard'>
                <Card.Img variant="top" src={imageFileName} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>By {manufacturer}</Card.Title>
                    <Card.Text>Precio: {price}€</Card.Text>
                    <Link to={`/telefonos/${_id}`}>
                        <div className="d-grid gap-2">
                            <Button variant="dark">Ver detalles</Button>
                        </div>
                    </Link>
                </Card.Body>
            </Card >

        </>
    )
}

export default PhoneCard