import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const PhoneCard = props => {

    return (
        <Col lg={4}>
            <Card className="phone-card">
                <Card.Img variant="top" src={props.imageFileName} />
                <Card.Body>
                    <div className='card'>
                        <Card.Title id='title' style={{ textAlign: 'center', fontFamily: 'Merriweather' }} >{props.name}</Card.Title>
                        <Link to={`/detalles/${props._id}`} className="btn btn-sm btn-dark">Details</Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default PhoneCard
