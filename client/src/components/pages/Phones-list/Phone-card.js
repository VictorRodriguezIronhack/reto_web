import {Col, Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const PhoneCard = props => {

    return(
    <Col md={4}>
        <Card className="phone-card">
        <Card.Img variant="top" src={props.imageUrl[0]} />
        <Card.Body>
         <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.brand}</Card.Text>
        {props.discount == 0 ?
            <Card.Text>Precio: {props.price[0]}€</Card.Text>
        :
        
        <Card.Text> Precio:  <span>  </span>
        <span style={{ textDecorationLine: 'line-through' }}>{props.price[0]}€</span> <span>  </span>
        <span>{(props.price[0]-(props.price[0] * (props.discount / 100 ))).toFixed(2)}€</span></Card.Text>}
        <Link to ={`/telefonos/${props._id}`} className="btn btn-light btn-block">Más detalles</Link>
        </Card.Body>
        </Card>
    </Col>
    )
}

export default PhoneCard