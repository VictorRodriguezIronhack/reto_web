import './PhoneCard.css'
import { Link } from 'react-router-dom'
import { Col, Card } from 'react-bootstrap'

const PhoneCard = ({ productId, name, manufacturer, description, color, price, imageFileName, screen, processor, ram }) => {

    return (


        < Col sm={6} md={4} lg={3} >
            <Card className="phone-card mt-5">
                <Card.Img variant="top" src={imageFileName} alt={name} />
                <Card.Body>
                    <Card.Title className="phone-name mb-2">{manufacturer} {name}</Card.Title>
                    <Card.Text className="details  mb-2">
                        <p className="phone-description">{description.substring(0, 100)}...</p>
                        <p className="phone-price">{price} €</p>
                    </Card.Text>
                    {/* <Link to={`/phone/${phone_id}`}>View More</Link> */}
                    <Link to={`/phone/${productId}`} className="btn btn-block btn-outline-secondary">View More</Link>
                </Card.Body>
            </Card>
        </Col >

    )
}

export default PhoneCard