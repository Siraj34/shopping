import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './compenents/Product'

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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/product/:category" element={<ProductScreen />} />
        <Route path="/" element={<Product />} />
        <Route path="/signin" element={<SigninScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:_id" element={<OrderScreen />} />
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
