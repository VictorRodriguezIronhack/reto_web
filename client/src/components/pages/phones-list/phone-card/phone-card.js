import { Link } from 'react-router-dom'
import { Image, Col } from 'react-bootstrap'
import './phone-card.css'

const PhoneCard = ({ name, manufacturer, price, img, _id }) => {



    return (
        <Col xs={8} sm={6} md={4} className='phone-list-col'>
            <Link to={`telefonos/${_id}`} className='phone-link'>
                <div className='div-phone-shadow'>
                    <Image className='phone-list-img' src={img} alt={`${name} image`} />
                    <h3>{name}</h3>
                    <h4>{manufacturer}</h4>
                    <p>{price}€</p>
                </div>
            </Link>
        </Col>

    )
}

export default PhoneCard