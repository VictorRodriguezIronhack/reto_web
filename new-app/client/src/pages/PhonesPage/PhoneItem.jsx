import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const PhoneItem = ({ id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram }) => {

  return (
    <Col>
      <Card>
        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Link to={`/phones/${id}`}><Card.Title><b>{name}</b></Card.Title></Link>
        </Card.Body>
      </Card>
    </Col>
  )

}


export default PhoneItem
