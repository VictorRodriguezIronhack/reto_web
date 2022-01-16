import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PhoneService from '../../services/phones.service'

const phonesService = new PhoneService()

const PhoneDetails = () => {
  const { id } = useParams()
  const [phoneInfo, setPhoneInfo] = useState({
    name: '',
    manufacturer: '',
    description: '',
    color: '',
    price: 0,
    imageFileName: '',
    screen: '',
    processor: '',
    ram: 0,
  })

  useEffect(() => {
    getPhoneInfo(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getPhoneInfo = (id) => {
    phonesService
      .getOnePhone(id)
      .then((res) => {
        setPhoneInfo(res.data)
      })
      .catch((err) => console.error(err))
  }

  return (
    <div>
      <p>Name: {phoneInfo.name}</p>
      <p>Manufacturer: {phoneInfo.manufacturer}</p>
      <p>Description: {phoneInfo.description}</p>
      <p>Color: {phoneInfo.color}</p>
      <p>Price: {phoneInfo.price} €</p>
      <p>Screen: {phoneInfo.screen}</p>
      <p>Processor: {phoneInfo.processor}</p>
      <p>Ram: {phoneInfo.ram}</p>
    </div>
  )
}

export default PhoneDetails
