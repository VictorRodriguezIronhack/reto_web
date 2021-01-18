import { Link } from 'react-router-dom'
import { Image, Container, Row, Col, Button } from 'react-bootstrap'
import './phone-detail-card.css'
import Ram from './images/ram.png'
import Chip from './images/chip.png'
import Screen from './images/mobile.png'
import Color from './images/color.png'

const PhoneDetailCard = ({ name, price, manufacturer, description, screen, processor, ram, color, img, _id, handleModal }) => {
    return (
        <>
            <div className='phone-detail-header'>

                {img ? <Image src={img} className='phone-detail-img-header' /> : null}
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 5 }} className='phone-name-header-col'>
                            <h3>{name}</h3>

                        </Col>
                    </Row>
                </Container>

            </div>
            <hr></hr>
            <Container className='phone-detail-container'>
                <Row>
                    <Col md={5}>
                        {img ? <Image src={img} className='phone-detail-img' /> : null}
                    </Col>
                    <Col md={7} className="phone-detail-information">
                        <p className='manufacturer'>{manufacturer}</p>
                        <p className='price'>{price} €</p>
                        <p className='description'>{description}</p>
                        <div className='specs'>
                            <Image src={Screen} />
                            <p>{screen}</p>
                            <Image src={Chip} />

                            <p>{processor}</p>
                            <Image src={Ram} />

                            <p>{ram}</p>
                            <Image src={Color} />

                            <p>{color}</p>
                        </div>
                        <div className='details-btns'>
                            <Link to='/telefonos'><Button variant="outline-dark">Volver</Button></Link>
                            <Link to={`/editar/${_id}`}><Button variant="outline-dark">Editar</Button></Link>
                            <Button variant="outline-danger" onClick={handleModal}>Eliminar</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PhoneDetailCard