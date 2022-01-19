import React, { useState, useEffect } from 'react'
import PhoneService from '../../services/phones.service'
import PhoneList from './PhoneList'
import Spinner from '../shared/Spinner'

const phonesService = new PhoneService()

const PhonePage = () => {
  const [phones, setPhones] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      getPhonesList()
    }, 3000)
  }, [])

  const getPhonesList = () => {
    phonesService
      .getAllPhones()
      .then((res) => setPhones(res.data))
      .catch((err) => console.error(err))
    setLoading(false)
  }

  return (
    <div className="pt-2">
      <h2 className="font-bold text-center text-gray-100 text-2xl py-6">
        A list of all our phones
      </h2>
      <div>{loading && <Spinner />}</div>
      <div className="grid lg:grid-cols-3 px-10">
        {phones?.map((elm) => (
          <PhoneList elm={elm} key={elm.id} />
        ))}
      </div>
    </div>
  )
}

export default PhonePage
