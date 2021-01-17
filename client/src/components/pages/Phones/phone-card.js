import { Col, Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import './phone-card.css'

function PhoneCard(props) {

    return (
        <Col lg={4}>
            <Card className="phone-card">
                <Card.Img className="phone-card-img" variant="top" src={props.imageFileName} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Link to={`/detalles/${props._id}`}>
                        <Button className= "btn btn-primary btn-block btn-large">Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
} 


export default PhoneCard