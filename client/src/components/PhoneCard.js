import { Col, Row } from 'react-bootstrap'


export const PhoneCard = ({ id, name, manufacturer, description, setView, setPhoneId }) => {

    return (

        <Col xs={12} sm={4} md={4} lg={4}>
            <h3>{name}</h3>
            <p>Manufacturer: {manufacturer}</p>
            <p>Description: {description}</p>
        </Col>

    )




}