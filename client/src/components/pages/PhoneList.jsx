import React from 'react'
import { Link } from 'react-router-dom'

const PhoneList = ({ elm }) => {
  return (
    <div className="col-span-1 flex flex-col bg-white border-2 rounded p-4 m-2">
      <img
        src={`/assets/images/${elm.imageFileName}`}
        className="w-full h-48 object-contain"
        alt="product external view"
      />
      <div className="flex-1 p-3">
        <h5 className="mb-2 text-2xl font-bold text-gray-900 text-center">
          {elm.manufacturer} {elm.name}
        </h5>
      </div>
      <div className="bg-indigo-100 rounded-2xl h-auto p-2 m-2">
        <p className="text-2xl font-bold text-indigo-900 text-center content-center">
          {elm.price} €
        </p>
      </div>
      <div className="text-center p-2">
        <Link to={`/details/${elm.id}`}>
          <button
            type="button"
            className="bg-transparent hover:bg-indigo-200 text-indigo-900 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded-full"
          >
            See details!{console.log(elm.imageFileName)}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PhoneList
