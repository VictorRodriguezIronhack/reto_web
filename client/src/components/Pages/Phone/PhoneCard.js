import { Col, Card } from 'react-bootstrap'
import './PhoneCard.css'
import { Link } from 'react-router-dom'

const PhoneCard = ({ name, _id, image, price, user, loggedUser }) => {
    return (
        <Col lg={4}>
            <Card className="phone-card">
                <Card.Body>

                    <Card.Title className="name">{name}
                    
                    
                    </Card.Title>
                    <img className="img" src={image}></img>
                    <h4 className="price">{price}$</h4>
                    <Link className="btn btn-dark btn-block btn-sm" to={`/phone/${_id}`}>Ver detalles</Link>
                    {
                        
                        loggedUser ? 
                        
                            loggedUser._id === user ?
                            <>
                                <Link className="btn btn-dark btn-block btn-sm" to={`/edit-phone/${_id}`}>Editar</Link>
                                  </>
                                : null
                  
                    : null
                    
                    }
                </Card.Body>
            </Card>
        </Col>
    )
}

export default PhoneCard