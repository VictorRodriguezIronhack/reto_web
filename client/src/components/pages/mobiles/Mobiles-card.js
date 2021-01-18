import { Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Mobiles-card.css'


function MobileCard(props) {
    
    return (

        <>

            <Col lg={3} md={6} sm={12}>
                <Card style={{height: '400px', marginBottom: '30px', textAlign:'center'}}>
                <Card.Img className="mobile-img" src={props.imageFileName} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                  
                        <Link style={{marginBottom:'1px'}} to={`/modelo/${props._id}`}>
                            <Button variant="light">Ver detalles</Button>  
                        </Link>
                    
                </Card.Body>
            </Card>
            </Col>
           
        </>

    )
}

export default MobileCard