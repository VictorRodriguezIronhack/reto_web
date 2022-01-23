import React, { useState, useEffect } from 'react'
import PhoneService from '../../services/phones.service'
import PhoneList from './PhoneList'
import Spinner from '../shared/Spinner'
import SearchBar from './SearchBar'

const phonesService = new PhoneService()

const PhonePage = () => {
  const [phones, setPhones] = useState([])
  const [phonesCopy, setCopy] = useState([])
  const [loading, setLoading] = useState(false)
  const [sortBy, setSortBy] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      getPhonesList()
    }, 2000)
  }, [])

  const getPhonesList = () => {
    phonesService
      .getAllPhones()
      .then((res) => {
        setPhones(res.data)
        setCopy(res.data)
      })
      .catch((err) => console.error(err))
    setLoading(false)
  }

  const searchProduct = (value) => {
    let filteredProducts = phonesCopy.filter(
      (phone) =>
        phone.name
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(
            value
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
          ) ||
        phone.manufacturer
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(
            value
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
          )
    )
    setPhones(filteredProducts)
  }

  const sortProducts = (value) => {
    if (value === 'asc') {
      let sortedProducts = phonesCopy.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      )
      setPhones(sortedProducts)
      setSortBy(!sortBy)
    } else {
      let sortedProducts = phonesCopy.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      )
      setPhones(sortedProducts)
      setSortBy(!sortBy)
    }
  }

  return (
    <div className="pt-2">
      <SearchBar
        phones={phones}
        searchProduct={searchProduct}
        sortProducts={sortProducts}
      />
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
