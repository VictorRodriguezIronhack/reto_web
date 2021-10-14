import PhoneItem from './PhoneItem'
import { Row } from 'react-bootstrap'


const PhonesList = ({ getPhones, phones }) => {

  const displayPhones = () => phones.map(phone => {
    return <PhoneItem
      key={`${phone.id} - ${phone.name}`}
      {...phone}
      getPhones={getPhones}
    />
  })

  return (
    phones.length > 0 &&
    <Row>
      {displayPhones(phones)}
    </Row>
  )

}


export default PhonesList
