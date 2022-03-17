import { Row, Col } from "react-bootstrap"
import PhoneCard from "../PhoneCard/PhoneCard"


const PhoneList = ({ phones }) => {

    return (
        <Row>
            {phones.map(phone => {
                return <Col md={4} key={phone.id}> <PhoneCard {...phone} /> </Col>
            })}
        </Row>
    )
}

export default PhoneList


