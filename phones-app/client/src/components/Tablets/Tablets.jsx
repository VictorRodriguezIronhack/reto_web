import React from 'react'
import tablet from '../img/tablets.png'
import {Image, Container,Row,Col} from 'react-bootstrap'
import './Tablet.css'

function Tablets() {
  return (
      <div className='box'>
    <Container>
              <Row className="justify-content-md-center">
                  <Col xs={12} sm={4} md={4}>
<Image className='ship' src={tablet} alt="tablet"/>
                  </Col>
              </Row>
    </Container>
      </div>
  )
}

export default Tablets