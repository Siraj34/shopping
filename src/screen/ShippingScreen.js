import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getShipping, selectShipping } from '../reducer/sliceReducer'
import { useNavigate } from 'react-router-dom'
import CheckoutSteps from '../compenents/CheckoutSteps'
export default function ShippingScreen() {
  const shipping = useSelector(selectShipping)
  const [fullName, setfullName] = useState('')
  const [adress, setAdress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')
  const dispatch = useDispatch()
  const navegate = useNavigate()

  function handler(e) {
    e.preventDefault()
    dispatch(
      getShipping({
        fullName: fullName,
        adress: adress,
        city: city,
        postalCode: postalCode,
        country: country,
      })
    )
    navegate('/payment')
  }

  return (
    <div className="b bg-slate-300 md:justify-around md:items-center h-screen  overflow-y-auto">
      <div>
        <div className=" md:flex md:flex-col justify-around items-center ">
          <div className="m-1 p-1 text-black font-bold  items-center">
            <h1>
              {' '}
              <CheckoutSteps step1 step2></CheckoutSteps>
            </h1>
            <h1> Shipping Adress</h1>
          </div>
          <form className=" md:flex md:flex-col ">
            <div className="m-2 p-2 text-black font-bold ">
              <h1>Full Name</h1>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setfullName(e.target.value)}
                className=" md:w-[500px]"
              />
            </div>
            <div className="m-2 p-2 text-black font-bold ">
              <h1>Adress</h1>
              <input
                type="text"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                className=" md:w-[500px]"
              />
            </div>
            <div className="m-2 p-2 text-black font-bold ">
              <h1>City</h1>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className=" md:w-[500px]"
              />
            </div>
            <div className="m-2 p-2 text-black font-bold ">
              <h1>Postal Code</h1>
              <input
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className=" md:w-[500px]"
              />
            </div>
            <div className="m-2 p-2 text-black font-bold ">
              <h1>Country</h1>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className=" md:w-[500px]"
              />
            </div>
            <div className="m-1 p-2 text-black font-bold ">
              <button
                onClick={handler}
                className="bg bg-amber-200 h-11 w-[300px] rounded-full"
              >
                {' '}
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
