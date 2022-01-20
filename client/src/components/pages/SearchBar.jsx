import React, { useState, useEffect } from 'react'

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState('')

  const handleSearch = (e) => {
    setSearchText(e.currentTarget.value.toLowerCase())
  }

  useEffect(() => {
    props.searchProduct(searchText)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText])

  return (
    <div className="flex items-center justify-center max-w-lg mx-auto shadow rounded border-0 p-3">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 w-full rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search a phone..."
        onChange={handleSearch}
      />
      <div className="sticky top-0 ml-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </div>
  )
}

export default SearchBar
