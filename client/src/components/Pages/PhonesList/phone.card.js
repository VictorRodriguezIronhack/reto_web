import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const PhoneCard = ({ id, name, imageFileName, manufacturer }) => {

    return (

        <Col md={3}>
            <Card style={{marginBottom: 20, borderColor: 'rgba(0, 0, 0, 0.5)', borderWidth: 3, boxShadow: '2px 2px 2px 3px rgba(0, 0, 0, 0.2)'}}>
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/${imageFileName}`} style={{ width: 200, height: 200, margin: 'auto', marginTop:20, objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text style={{marginBottom: 30}}>{manufacturer}</Card.Text>
                    <Link className="btn btn-info btn-sm" style={{ position: 'absolute', top: 310, bottom: 10, left: 50, right: 50, textAlign: 'center' }} to={`/phone/${id}`}>Ver detalles</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default PhoneCard