import React, { useState, useEffect } from 'react'
import PhoneService from '../../services/phones.service'
import PhoneList from './PhoneList'

const phonesService = new PhoneService()

const PhonePage = () => {
  const [phones, setPhones] = useState(null)

  useEffect(() => {
    getPhonesList()
  }, [])

  const getPhonesList = () => {
    phonesService
      .getAllPhones()
      .then((res) => setPhones(res.data))
      .catch((err) => console.error(err))
  }
  return (
    <div className="pt-2">
      <h2>A list of all our phones</h2>
      <ul>
        {phones?.map((elm) => (
          <PhoneList elm={elm} key={elm.id} />
        ))}
      </ul>
    </div>
  )
}

export default PhonePage
