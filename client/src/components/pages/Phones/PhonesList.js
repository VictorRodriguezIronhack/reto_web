import PhoneCard from './PhoneCard'
import { Row } from 'react-bootstrap'
import './Phones.css'

const PhonesList = ({ phones }) => {

    return (
        <Row >
            {phones?.map(elm => <PhoneCard key={elm._id} {...elm} />)}
        </Row>
    )
}


export default PhonesList