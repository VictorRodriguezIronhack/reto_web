import React, { useState, useEffect, useContext } from 'react'
import CartContext from '../context/CartContext'

const ShoppingCart = () => {
  const { shoppingCart, setCountCart } = useContext(CartContext)
  const [total, setTotal] = useState(undefined)

  const cartFilled = shoppingCart?.length !== 0
  useEffect(() => {
    cartFilled && totalPrice()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shoppingCart.length])

  const totalPrice = () => {
    let sum = shoppingCart?.reduce((sum, li) => ({
      price: sum.price + li.price,
    }))
    setTotal(sum)
  }

  const deleteItem = (item) => {
    let index = shoppingCart.indexOf(item)
    shoppingCart.splice(index, 1)
    setCountCart(shoppingCart.length)
  }

  return (
    <>
      <h2 className="font-bold text-center text-gray-100 text-2xl py-6">
        Your purchase
      </h2>
      <div className="container flex justify-center mx-auto">
        <div className="flex flex-col">
          <div className="w-full">
            <div className="border-b border-gray-200 shadow">
              <table className="divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-2 text-xs text-gray-500"></th>
                    <th className="px-6 py-2 text-xs text-gray-500">Product</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Price</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Delete</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Total</th>
                  </tr>
                </thead>

                {shoppingCart.map((elm, i) => (
                  <tbody key={i} className="bg-white divide-y divide-gray-300">
                    <tr className="whitespace-nowrap">
                      <td className='px-6 py-4 text-sm text-gray-500"'>
                        <img
                          style={{
                            width: '60px',
                            height: '70px',
                            objectFit: 'cover',
                            marginLeft: '30px',
                          }}
                          src={`/assets/images/${elm.imageFileName}`}
                          alt={elm?.name}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {elm?.manufacturer} {elm?.name}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        {elm.price?.toFixed(2)} €
                      </td>
                      <td className="px-6 py-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 ml-5 text-red-400 cursor-pointer"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          onClick={() => deleteItem(elm)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                ))}

                <tbody className="bg-indigo-100 divide-y divide-gray-300">
                  <tr>
                    <td className="px-6 py-2 text-xs text-gray-500"></td>
                    <td className="px-6 py-2 text-xs text-gray-500"></td>
                    <td className="px-6 py-2 text-xs text-gray-500"></td>
                    <td className="px-6 py-2 text-xs text-gray-500"></td>
                    <td className="px-6 py-2 font-bold text-indigo-900">
                      {total?.price?.toFixed(2)} €
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingCart
