import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ShoppingCart } from '../../images/shopping-cart.svg'

const Navbar = ({ count }) => {
  useEffect(() => {
    const btn = document.querySelector('button.mobile-menu-button')
    const menu = document.querySelector('.mobile-menu')

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden')
    })
  }, [])

  return (
    <nav className="bg-indigo-200 shadow-lg sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-3">
        <div className="flex">
          <div className="flex justify-between space-x-12">
            <div className="flex content-center">
              <Link to="/" className="flex items-center py-2 px-2">
                <img
                  src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-phone-casino-icongeek26-linear-colour-icongeek26.png"
                  alt="Logo"
                  className="h-8 w-8 mr-2"
                />
                <span className="font-semibold text-black hover:text-indigo-900 text-lg">
                  The Phone Cave
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="py-2 px-2 text-black hover:border-b-4 hover:text-indigo-900 hover:border-indigo-900 font-semibold "
              >
                Home
              </Link>
              <Link
                to="/phones"
                className="py-2 px-2 text-black font-semibold hover:border-b-4 hover:text-indigo-900 hover:border-indigo-900 transition duration-300"
              >
                Phones
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button className="absolute top-1 right-2 outline-none mobile-menu-button px-2 py-2">
                <svg
                  className=" w-6 h-6 text-black hover:text-indigo-900 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Link to="/cart" className="absolute top-0 inset-x-1/2 pt-1">
          <p
            style={{
              color: 'black',
              marginLeft: '2rem',
              height: '3px',
            }}
          >
            {count}
          </p>
          <ShoppingCart
            fill="black"
            style={{
              width: '30px',
              height: '30px',
            }}
          />
        </Link>
        <div className="hidden mobile-menu">
          <ul className="">
            <li className="active">
              <Link
                to="/"
                className="block text-sm px-2 py-4 text-black hover:bg-gray-50 font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/phones"
                className="block text-sm px-2 py-4 hover:bg-gray-50 transition duration-300"
              >
                Phones
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
