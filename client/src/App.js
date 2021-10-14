import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import { PhoneService } from './services/phone.service'
import { PhoneCard } from './components/PhoneCard';
import { Row, Container } from 'react-bootstrap'

function App() {
  const ApiHandler = new PhoneService()

  const [phones, setPhones] = useState('')
  const [view, setView] = useState('phones')
  const [phoneId, setPhoneId] = useState()


  const loadPhones = () => {

    ApiHandler.getPhones()
      .then(response => setPhones(response.data.phones))
      .catch(err => console.log(err))

  }


  useEffect(() => {

    loadPhones()

  }, [])


  return (
    <Container>

      <h1 className={'text-center'}>Phones</h1>
      <Row>
        {
          view === 'phones' ?

            phones ?
              phones.map(elm => {
                return (

                  <PhoneCard {...elm} setView={setView} setPhoneId={setPhoneId} />

                )
              })
              : null
            : null
        }
      </Row>

    </Container>
  );
}

export default App;
