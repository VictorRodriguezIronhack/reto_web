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
    <nav className="bg-indigo-200 shadow-lg sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-3">
        <div className="flex">
          <div className="flex justify-between space-x-12">
            <div className="flex content-center">
              <a href="/" className="flex items-center py-2 px-2">
                <img
                  src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-phone-casino-icongeek26-linear-colour-icongeek26.png"
                  alt="Logo"
                  className="h-8 w-8 mr-2"
                />
                <span className="font-semibold text-black hover:text-indigo-900 text-lg">
                  The Phone Cave
                </span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="/"
                className="py-2 px-2 text-black hover:border-b-4 hover:text-indigo-900 hover:border-indigo-900 font-semibold "
              >
                Home
              </a>
              <a
                href="/phones"
                className="py-2 px-2 text-black font-semibold hover:border-b-4 hover:text-indigo-900 hover:border-indigo-900 transition duration-300"
              >
                Phones
              </a>
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
        <div className="hidden mobile-menu">
          <ul className="">
            <li className="active">
              <a
                href="/"
                className="block text-sm px-2 py-4 text-black hover:bg-gray-50 font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/phones"
                className="block text-sm px-2 py-4 hover:bg-gray-50 transition duration-300"
              >
                Phones
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
