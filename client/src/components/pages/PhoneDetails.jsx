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
    <section className="text-gray-700 body-font overflow-hidden">
      <div className="container p-3 mx-auto rounded">
        <div className="lg:w-4/5 mx-auto flex flex-wrap bg-white">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full px-4 object-cover object-center rounded border border-gray-200"
            src={`/assets/images/${phoneInfo.imageFileName}`}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {phoneInfo.manufacturer}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {phoneInfo.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{phoneInfo.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="mr-3">Color: </span>
                <button
                  className={`border-2 border-gray-300 ml-1 bg-${phoneInfo.color} rounded-full w-6 h-6 focus:outline-none`}
                ></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3 text-sm text-gray-400 font-semibold">
                  {phoneInfo.screen}
                </span>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3 text-sm text-gray-400 font-semibold">
                  {phoneInfo.processor}
                </span>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3 text-sm text-gray-400 font-semibold">
                  {phoneInfo.ram} RAM
                </span>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-4xl text-indigo-600">
                {phoneInfo.price} €
              </span>
              <button className="flex ml-40 bg-transparent hover:bg-indigo-200 text-indigo-600 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded-full">
                Button
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 hover:bg-red-500 p-0 border-0 inline-flex items-center justify-center text-red-500 hover:text-white ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhoneDetails
