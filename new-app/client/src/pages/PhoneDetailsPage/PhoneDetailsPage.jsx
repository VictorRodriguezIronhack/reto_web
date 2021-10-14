import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import PhonesService from '../../services/phones.service'
import { Container } from 'react-bootstrap'
// import img from '../../components/Images/PhonesImages'

const phonesService = new PhonesService()


const PhoneDetailsPage = () => {

  const [phone, setPhone] = useState(undefined)
  const { id } = useParams()


  const getPhone = () => {

    phonesService
      .getPhone(id)
      .then(res => setPhone(res.data))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getPhone()
  }, [])


  return (
    <Container>
      {phone ?
        <section>
          <h1>{phone.name}</h1>
          {/* <img src={} /> */}
          <p><b>Manufacturer:</b>{phone.manufacturer}</p>
          <p><b>Description:</b>{phone.description}</p>
          <p><b>Color:</b>{phone.color}</p>
          <p><b>Price:</b>${phone.price}</p>
          <p><b>Screen:</b>{phone.screen}</p>
          <p><b>Processor:</b>{phone.processor}</p>
          <p><b>RAM:</b>{phone.ram}</p>
        </section>
        :
        <p>Not available.</p>
      }
    </Container>
  )

}


export default PhoneDetailsPage
