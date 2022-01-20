import React, { useState, useEffect } from 'react'
import PhoneService from '../../services/phones.service'
import PhoneList from './PhoneList'
import Spinner from '../shared/Spinner'
import SearchBar from './SearchBar'

const phonesService = new PhoneService()

const PhonePage = () => {
  const [phones, setPhones] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      getPhonesList()
    }, 2000)
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
      <SearchBar phones={phones} />
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
