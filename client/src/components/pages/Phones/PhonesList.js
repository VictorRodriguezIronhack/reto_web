import PhoneCard from './PhoneCard'
import {Row} from 'react-bootstrap'

const PhonesList = ({phones}) => {
    return(
        <Row>
            {phones?.map(elm => <PhoneCard key={elm._id} {...elm}></PhoneCard>)}
        </Row>
    )
}

export default PhonesList