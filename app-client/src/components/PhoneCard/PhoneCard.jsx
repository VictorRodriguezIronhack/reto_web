import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './PhoneCard.css'

const PhoneCard = ({ name, manufacturer, imageFileName, price, _id }) => {

    return (

        <>
            <Card className='phoneCard'>
                <Link to={`/telefonos/${_id}`}>
                    <Card.Img variant="top" src={imageFileName} />
                </Link>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>By {manufacturer}</Card.Title>
                    <Card.Text>Precio: {price}€</Card.Text>
                </Card.Body>
                <Link to={`/telefonos/${_id}`}>
                    <div className="d-grid gap-2 col-9 mx-auto">
                        <Button variant="dark">Ver detalles</Button>
                    </div>
                </Link>
            </Card >

        </>
    )
}

export default PhoneCard