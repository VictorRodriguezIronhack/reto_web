import { Card, ListGroupItem, ListGroup } from "react-bootstrap"


const PhoneDetails = (props) => {






    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require(`../images/${props.imageFileName}`)} />
            <Card.Body>
                <Card.Title>{props.manufacturer}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Color: {props.color}</ListGroupItem>
                <ListGroupItem>Pantalla: {props.screen}</ListGroupItem>
                <ListGroupItem>Procesador: {props.processor}</ListGroupItem>
                <ListGroupItem>RAM: {props.ram}</ListGroupItem>
            </ListGroup>
            <br />
            <Card.Title> PVP: {props.price}€</Card.Title>

        </Card>




    )
}

export default PhoneDetails