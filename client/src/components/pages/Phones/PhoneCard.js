
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const PhoneCard = ({ _id, name, price, imageFileName}) => {


    return (
        <Card>
            <Card.Img variant="top" src={imageFileName} style={{ width: '100%' }}/>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                              {price}
              </Card.Text>
                <Link to={`/detallestelefono/${_id}`}><Button variant="dark">More Details</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default PhoneCard