import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './compenents/Product'
import FootScreen from './compenents/Footscreen'
import Header from './compenents/Header'
import Cart from './compenents/Cart'
import ProductScreen from './screen/ProductScreen'
import SigninScreen from './screen/SigninScreen'
import SignUpScreen from './screen/SignUpScreen'
import Footer from './Footer'
import ShippingScreen from './screen/ShippingScreen'
import PaymentScreen from './screen/PaymentScreen'
import PlaceOrderScreen from './screen/PlaceOrderScreen'
import OrderScreen from './screen/OrderScreen'
import OrderHistoryScreen from './screen/OrderHistoryScreen'
import ProfileScreen from './screen/ProfileScreen'
import DashboardScreen from './screen/DashboardScreen'
import Home from './compenents/Home'

import Contact from './compenents/Contact'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState('')
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home setSearch={setSearch} search={search} />}
        />
      </Routes>
      <Routes>
        <Route
          path="/"
          exact="true"
          element={<Product setSearch={setSearch} search={search} />}
        />
        <Route path="/product/:category" element={<ProductScreen />} />
        <Route path="/signin" element={<SigninScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/orderhistory" element={<OrderHistoryScreen />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Contact />
      <FootScreen />
      <Footer />
    </BrowserRouter>
  )
}

export default App
