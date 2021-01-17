import { Col, Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const PhoneCard = ({ imageFileName, name, _id, manufacturer }) => {
    return (
        <Col lg={3} className="text-center mt-5 mr-4 d-flex justify-content-center">
            <div className="phone-card" key={_id}>
                <h6 className="mb-4"><span className="mr-2">{manufacturer.toUpperCase()}</span>{name.toUpperCase()}</h6>
                <Link to={`/phones/${_id}`}>  
                    <Card.Img variant="top" src={imageFileName} className="phone-list-img" />          
                </Link> 
            </div>      
        </Col>
    )
}  

export default PhoneCard
