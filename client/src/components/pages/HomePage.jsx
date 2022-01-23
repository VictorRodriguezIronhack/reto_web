import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <main className="relative pt-2">
        <h1 className="font-bold text-center text-gray-100 text-2xl py-6">
          Welcome to <span className="text-indigo-300">the Phone Cave!</span>
        </h1>
        <h2 className="font-bold text-center text-gray-100 text-4xl">
          Check the stock of our awesome{' '}
          <Link to="/phones">
            <b className="text-indigo-300 hover:text-indigo-900 underline">
              phones
            </b>
          </Link>
          !
        </h2>
      </main>
    </>
  )
}

export default HomePage
