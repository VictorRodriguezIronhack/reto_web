import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import PhonesList from './components/PhonesList'
import Header from './components/Header'

function App() {

  return (
    <Container>
      <Header title='Reto Web' />
      <Row>
        <Col md={6}>
          <PhonesList />
        </Col>
        <Col md={6}>
          <h2>login</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
