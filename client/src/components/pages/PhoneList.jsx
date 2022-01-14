import React from 'react'
import { Link } from 'react-router-dom'

const PhoneList = ({ elm }) => {
  return (
    <li>
      <Link to={`/${elm.id}`}>
        <h5>
          {elm.manufacturer} {elm.name}
        </h5>
      </Link>
    </li>
  )
}

export default PhoneList
