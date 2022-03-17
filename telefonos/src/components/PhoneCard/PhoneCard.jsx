import { Col } from "react-bootstrap"
import "./PhoneCard.css"


const PhoneCard = ({ phone, setPhoneDetails, setNeedsDetails }) => {
    const { name } = phone
    return (

        <Col xs={12} className="phone-card clickable-card" onClick={() => {
            setPhoneDetails(phone)
            setNeedsDetails(true)
        }}>
            <span>{name}</span>
        </Col>
    )
}
export default PhoneCard