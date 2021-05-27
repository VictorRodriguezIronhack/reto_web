import './PhoneCard.css'
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap'

const PhoneCard = ({_id, name, imageFileName, manufacturer, price}) => {

    const link = `/phone/${_id}`
    return(
        <Col md={3} className="phone-card">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageFileName} alt={name}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {manufacturer}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>$ {price}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href={link}>Get the {name}</Card.Link>
            </Card.Body>
            </Card>
        </Col>
    )
}

export default PhoneCard