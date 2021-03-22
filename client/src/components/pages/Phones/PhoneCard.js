import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Phones.css'



const PhoneCard = ({ name, imageFileName, _id }) => {

    return (
        <Col md={4} className="phone-card" style={{ marginTop: 40 }}>
            <Card>
                <Card.Img variant="top" src={imageFileName} />
                <Card.Body>
                    <div style={{ fontFamily: 'Cormorant Unicase' }}> Take a look to:
                    <Link to={`/details/${_id}`} className="namedesign"> <h2>{name}</h2> </Link></div>
                </Card.Body>
            </Card>
        </Col>
    )
}


export default PhoneCard
