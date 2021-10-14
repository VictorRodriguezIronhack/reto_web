import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import { PhoneService } from './services/phone.service'
import { PhoneCard } from './components/PhoneCard';
import { Row, Container, Spinner } from 'react-bootstrap'

function App() {
  const ApiHandler = new PhoneService()

  const [phones, setPhones] = useState('')
  const [view, setView] = useState('phones')
  const [selectedPhone, setSelectedPhone] = useState()
  const [loading, setLoading] = useState(true)


  const loadPhones = () => {

    ApiHandler.getPhones()
      .then(response => {
        setPhones(response.data.phones)

        setTimeout(() => {

          setLoading(false)
        }, 2000);
      })
      .catch(err => console.log(err))

  }

  const setId = (id) => {
    const phone = phones.filter(elm => elm.id === id)
    setSelectedPhone(...phone)
  }


  useEffect(() => {

    loadPhones()

  }, [])


  return (
    <Container>

      {loading ?

        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        :
        <>
          <h1 className={'text-center mb-5'}>{view === 'phones' ? ' Phones' : 'Phone'}</h1>
          <Row>
            {
              view === 'phones' ?

                phones ?

                  phones.map(elm => {
                    return (

                      <PhoneCard key={elm.id} {...elm} setView={setView} setId={setId} view={view} />

                    )
                  })
                  : null

                : <PhoneCard  {...selectedPhone} view={view} setView={setView} />
            }
          </Row>
        </>
      }
    </Container>
  );
}

export default App;
