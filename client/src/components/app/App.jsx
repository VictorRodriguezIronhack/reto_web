import React, { useState, useEffect } from 'react'
import * as PATHS from '../../utils/paths'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PhonePage from '../pages/PhonePage'
import PhoneDetails from '../pages/PhoneDetails'
import Navbar from '../layout/Navbar'
import ShoppingCart from '../pages/ShoppingCart'
import { CartProvider } from '../context/CartContext'

const App = () => {
  const [shoppingCart, setShoppingCart] = useState([])
  const [countCart, setCountCart] = useState(0)

  const addPhone = (phone) => {
    setShoppingCart([...shoppingCart, phone])
  }

  const countItems = () => setCountCart(shoppingCart.length)

  useEffect(() => {
    countItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shoppingCart])

  return (
    <div className="App">
      <CartProvider value={{ addPhone, shoppingCart, setCountCart }}>
        <Navbar count={countCart} />
        <Routes>
          <Route path={PATHS.HOMEPAGE} element={<HomePage />} />
          <Route path={PATHS.PHONESPAGE} element={<PhonePage />} />
          <Route path={PATHS.PHONEDETAILS} element={<PhoneDetails />} />
          <Route path={PATHS.CART} element={<ShoppingCart />} />
        </Routes>
      </CartProvider>
    </div>
  )
}

export default App
