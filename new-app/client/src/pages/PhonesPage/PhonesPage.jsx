import { useState, useEffect } from 'react'
import PhonesService from '../../services/phones.service'
import PhonesList from './PhonesList'
import { Container } from 'react-bootstrap'

const phonesService = new PhonesService()


const PhonesPage = () => {

  const [phones, setPhones] = useState(null)

  useEffect(() => {
    getPhones()
  }, [])

  const getPhones = () => {

    phonesService
      .getPhones()
      .then(res => setPhones(res.data))
      .catch(err => console.error(err))
  }

  return (
    <Container>
      <h1 className="mb-5 text-center">Phones</h1>

      {phones?.length ?
        <PhonesList getPhones={getPhones} phones={phones} />
        :
        <p>No phones available.</p>
      }
    </Container>
  )

}


export default PhonesPage
