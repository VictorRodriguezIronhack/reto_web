import React, { useState, useEffect } from 'react'

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState('')
  const [sortValue, setSortValue] = useState('')

  const handleSearch = (e) => {
    setSearchText(e.currentTarget.value.toLowerCase())
  }

  const handleSelect = (e) => {
    setSortValue(e.currentTarget.value)
  }

  useEffect(() => {
    props.searchProduct(searchText)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText])

  useEffect(() => {
    props.sortProducts(sortValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortValue])

  return (
    <div className="flex items-center justify-center mx-auto">
      <div className="flex items-center justify-center w-2/5 shadow rounded border-0 p-3">
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
      <div>
        <label>
          <select
            className="border-2 border-gray-300 bg-white h-10 px-5 w-full rounded-lg text-sm text-gray-400 focus:text-black focus:outline-none"
            id="value"
            name="value"
            onChange={handleSelect}
          >
            <option value="">Filter products</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default SearchBar
