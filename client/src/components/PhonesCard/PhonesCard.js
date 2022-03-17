import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./PhonesCard.css"



function PhonesCard({phones}) {
    return (
        <div className='PhonesList'>
            <Card className="PhoneCard">
                <Card.Img variant="top" src={phones.imageFileName} />
                <Card.Body>
                    <Card.Title className='phoneName'>{phones.name}</Card.Title>
                    <Link to={`/detalles/${phones.id}`} className="cardLink">
                        <div className="d-grid gap-2">
                            <Button variant="dark">Ver detalles</Button>
                        </div>
                    </Link>
                </Card.Body>
            </Card >
        </div>
    )
}

export default PhonesCard