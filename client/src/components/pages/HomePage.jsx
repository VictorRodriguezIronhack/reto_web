import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <main>
        <h1>Welcome to the Phone Cave!</h1>
        <h2>
          Here you can see a list of our awesome <b>phones</b>!
        </h2>
      </main>
      <nav>
        <Link to="/phones">List of Phones</Link>
      </nav>
    </>
  )
}

export default HomePage
