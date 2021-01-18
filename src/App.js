import React from 'react';

import './App.css';
import PhoneService from './services/PhoneService'
import { Card, Button, Spinner, Col, Container, Row, Table } from 'react-bootstrap';


class App extends React.Component {

  state = {
    phonesData: [],
    showList: true,
    showDetails: false,
    phoneSelected: {}
  }

  phoneService = new PhoneService()

  componentDidMount = () => {
    this.phoneService.getPhones()
      .then((result) => {
        console.log(result)
        this.setState({ phonesData: result })
      })
      .catch((err) => console.log(err))
  }

  renderList() {
    return (
      <div className="phones-list" style={{ visibility: this.state.visibilityList }}>
        {this.state.phonesData.map((phone, index) => {
          return (
            <div className="phone-card" key={index}
            >
              <Card>
                <Card.Link onClick={() => {
                   this.setState({ phoneSelected: phone });
                   this.showDetails() 
                }}>
                  <Card.Body>
                    <Card.Img variant="top" src={`images/${phone.imageFileName}`} />
                    <Card.Title>{phone.name}</Card.Title>
                  </Card.Body>
                </Card.Link>
              </Card>
            </div>
          )
        }
        )}
      </div>

    )
  }

  showList() {
    this.setState({ showList: true, showDetails: false })
  }

  showDetails() {
    this.setState({ showList: false, showDetails: true })
  }

  renderDetails() {
    const phone = this.state.phoneSelected
    return (
      <div className="phone-details">
        <Container>

        
        <Button onClick={() => { this.showList() }}>Return to the list</Button>
        <Card>
          <Card.Body>
            <Row>

            
            <Col xs={12} md={3}>
            <Card.Img variant="top" src={`images/${phone.imageFileName}`} />
            </Col>

            <Col xs={12} md={9}>
            <Card.Title>{phone.name}</Card.Title>
            <Card.Text>
            <p>Price: {phone.price}</p>
            <p>Color: {phone.color}</p>
            <p>Description: {phone.description}</p>

            <Table  bordered hover>
                <tbody>
                  <tr>
                    <td className="propierties">Manufacturer</td>
                    <td>{phone.manufacturer}</td>
                  </tr>
                  <tr>
                    <td className="propierties">Processor</td>
                    <td>{phone.processor}</td>
                  </tr>
                  <tr>
                    <td className="propierties">Ram</td>
                    <td>{phone.ram}</td>
                  </tr>
                  <tr>
                    <td className="propierties">Screen</td>
                    <td>{phone.screen}</td>
                  </tr>
                </tbody>
              </Table>
            
            </Card.Text>
</Col>
</Row>
          </Card.Body>
        </Card>
        </Container>

      </div>
    )

  }

  renderSpinner = () => {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }

  render() {
    return (
      <div className="App">
        <h2>Phones list</h2>
        
<div>
  {this.state.showList && <div>{this.renderList()}</div>}
  {this.state.showDetails && <div>{this.renderDetails()}</div>}
</div>
        

      </div>
    );
  }

}

export default App;
