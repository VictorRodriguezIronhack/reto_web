import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './TelephoneCard.css'

const TelephoneCard = ({ id, name, imageFileName, description }) => {
    return (
        <Row className='phone-card'>
            <Col xs={12} sm={4} md={12} lg={4}>
                <img src={`/images/${imageFileName}`} alt={name} className='phone-img' />
            </Col>
            <Col xs={12} sm={8} md={12} lg={12}>
                <h2>{name}</h2>
                <p style={{textAlign: 'justify'}}>{description}</p>
                <div className='button'>
                    <Link className="info-btn" to={`/${id}`}>See details</Link>
                </div>
            </Col>
        </Row>
    )
}

export default TelephoneCard