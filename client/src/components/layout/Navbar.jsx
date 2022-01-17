import React, { useEffect } from 'react'

const Navbar = () => {
  useEffect(() => {
    const btn = document.querySelector('button.mobile-menu-button')
    const menu = document.querySelector('.mobile-menu')

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden')
    })
  }, [])

  return (
    <nav className="bg-indigo-500 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* TODO: links as Links from react-router */}
              <a href="/home" className="flex items-center py-4 px-2">
                <img
                  src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-phone-casino-icongeek26-linear-colour-icongeek26.png"
                  alt="Logo"
                  className="h-8 w-8 mr-2"
                />
                <span className="font-semibold text-white hover:text-black text-lg">
                  The Phone Cave
                </span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="/"
                className="py-4 px-2 text-gray-50 border-b-4 border-gray-50 font-semibold "
              >
                Home
              </a>
              <a
                href="/phones"
                className="py-4 px-2 text-gray-50 font-semibold hover:text-black transition duration-300"
              >
                Phones
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg
                  className=" w-6 h-6 text-gray-50 hover:text-black "
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
        <div className="hidden mobile-menu">
          <ul className="">
            <li className="active">
              {/* TODO: Links, correct links texts */}
              <a
                href="index.html"
                className="block text-sm px-2 py-4 text-black bg-green-50 font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-sm px-2 py-4 hover:bg-green-50 transition duration-300"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
