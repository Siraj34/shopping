import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios, { Axios } from 'axios'
import {
  getClear,
  selectCart,
  selectClear,
  selectPayment,
  selectShipping,
  selectSignin,
  selectTotal,
  selectTotalShip,
} from '../reducer/sliceReducer'
import { Link, useNavigate } from 'react-router-dom'
import CheckoutSteps from '../compenents/CheckoutSteps'

export default function PlaceOrderScreen() {
  const shipping = useSelector(selectShipping)
  const paymentMethod = useSelector(selectPayment)
  const items = useSelector(selectCart)
  const total = useSelector(selectTotal)
  const clear = useSelector(selectClear)
  const [total1, setTotal1] = useState(0.0)
  const [total3, setTotal3] = useState(0.0)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100
  console.log(shipping)
  //round2(0.15 * total.price)
  const place = async () => {
    try {
      const { data } = await axios.post('/api/orders', {
        orderItems: items,
        shippingAddress: shipping,
        paymentMethod: paymentMethod,
        itemsPrice: total,
        taxPrice: total1,
        totalPrice: total3,
      })
      dispatch(getClear(data))
      navigate(`/order/${clear.order._id}`)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const items = round2(0.15 * total)

    setTotal1(items)
  }, [items])

  useEffect(() => {
    const items = round2(total + total1)
    setTotal3(items)
  }, [items, total1])

  console.log(shipping)
  return (
    <div className="h-screen flex overflow-y-auto justify-between i text-black font-bold bg-emerald-500 ">
      <div className="ga m-3 p-2 w-[600px]">
        <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <div className=" m-3">
          <title className="m-3">Preview Order</title>

          <h1 className="my-3">Preview Order</h1>
        </div>

        <div className=" m-3 p-3 border border-indigo-600  w-full justify-between">
          <p>Shipping </p>
          <div className="m-3 p-3 text-black font-bold ">
            <div>
              <strong className="m-3"> Name : {shipping?.fullName}</strong>
              <div>
                <strong className="m-2 text-black">Address:</strong>
                {shipping.adress},{shipping.city},{shipping.postalCode},
                {shipping.country}
              </div>
            </div>
          </div>

          <Link to={'/shipping'} className="">
            <button className="w-full bg-orange-950 text-white font-bold">
              {' '}
              Edit
            </button>
          </Link>
        </div>

        <div className=" m-3 p-3 border border-indigo-600  w-full">
          <p>Payment </p>
          <div className="m-3 p-3 text-black font-bold ">
            <strong className="m-3"> Method: {paymentMethod}</strong>
          </div>

          <Link to={'/payment'} className="">
            <button className="w-full bg-orange-950 text-white font-bold">
              {' '}
              Edit
            </button>
          </Link>
        </div>

        <div className=" m-3 p-3 border border-indigo-600  w-full">
          <p>items</p>
          <div className="m-3 p-3 text-black font-bold ">
            {items?.map((item) => (
              <div className="flex">
                <div>
                  <img src={item?.image} alt="" className="w-[40px]" />
                  <Link to={`/product/${item.category}`}></Link>
                </div>
                <div className="flex m-2 px-2">
                  <p className="m-3">quantity{''} : price</p>
                  <p className="m-3">${item?.price}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to={'/cart'} className="">
            <button className="w-full bg-orange-950 text-white font-bold">
              {' '}
              Edit
            </button>
          </Link>
        </div>
      </div>

      <ul
        className="   items-end m-7 py-7 gap-10 text-white top-0 text-center bg-slate-600  h-64 md:w-[400px] 
        "
      >
        <div className="tex text-center m-3 p-3  ">
          <li className="">Order Summury : {''}</li>
          <li className=" ">
            <div>
              <span className="">
                items {''} : {total}
              </span>
            </div>

            <div>
              <span className="">
                taxi{''} : {total1}
              </span>
            </div>
          </li>
        </div>

        <li className="">
          <div className="">
            <div>
              {' '}
              <span className="p-4 font-bold ">
                {' '}
                All Total{''} : {total3}
              </span>
            </div>
          </div>

          <div className="m-3">
            <button disabled={items.length === 0} className=" w-[100px]">
              {' '}
              <button
                className="bg bg-amber-200 h-11 w-24 rounded-full"
                onClick={place}
              >
                Place Order
              </button>
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}
