import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./PhoneCard.css"


function PhoneCard({phone}) {

    const { id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = phone

    return (
        <Card className="PhoneCard">
            <Card.Img variant="top" src={require(`../../images/${imageFileName}`)} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Link to={`/telefonos/${id}`} state={{ phone }} className="cardLink">
                    <div className="d-grid gap-2">
                        <Button className="cardButton">Phone Details</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card >
    )
}

export default PhoneCard