import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders, selectClear, selectOrders } from '../reducer/sliceReducer'
import { Link } from 'react-router-dom'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import axios from 'axios'

export default function OrderScreen() {
  const clear = useSelector(selectClear)
  const orders = useSelector(selectOrders)
  const dispatch = useDispatch()

  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer()

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [{ amount: { value: clear.order.totalPrice } }],
      })
      .then((orderId) => {
        return orderId
      })
  }

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        const { data } = await axios.put(
          `https://dataend-app.vercel.app/api/orders/${clear.order._id}/pay`,
          details
        )
        dispatch(getOrders(data))
        alert('Get Success')
      } catch (error) {
        console.log(error)
      }
    })
  }

  function onError(err) {
    console.log(err)
  }
  useEffect(() => {
    const loadPaypalScript = async () => {
      const { data: clientId } = await axios.get(
        'https://dataend-app.vercel.app/api/keys/paypal'
      )
      paypalDispatch({
        type: 'resetOptions',
        value: {
          'client-id': clientId,
          currency: 'USD',
        },
      })
      paypalDispatch({ type: 'setLoadingStatus', value: 'pending' })
    }
    loadPaypalScript()
  }, [paypalDispatch])

  console.log(clear)
  return (
    <div className="h-screen md:flex overflow-y-auto md:justify-between i text-black font-bold bg-emerald-500 ">
      <div className="ga m-3 p-2 md:w-[600px]">
        <div className=" m-3">
          <title className="m-3"> Order {clear.order.id}</title>

          <h1 className="my-3"> Order {clear.order._id}</h1>
        </div>

        <div className=" m-3 p-3 border border-indigo-600  w-full justify-between">
          <p>Shipping </p>
          <div className="m-3 p-3 text-black font-bold ">
            <strong className="m-3">
              {' '}
              Name : {clear.order.shippingAddress?.fullName}
            </strong>
            <div>
              {' '}
              <strong className="m-2 text-black">Address {''}:</strong>
              {clear.order.shippingAddress?.adress},
              {clear.order.shippingAddress?.city},
              {clear.order.shippingAddress?.postalCode},
              {clear.order.shippingAddress?.country}
            </div>
          </div>

          <div className="">
            <button className="w-full bg-orange-300 text-white font-bold">
              {clear.isDeliverd ? (
                <span>Deliverd at {clear.delivered}</span>
              ) : (
                <span>Not Delivered</span>
              )}
            </button>
          </div>
        </div>

        <div className=" m-3 p-3 border border-indigo-600  w-full">
          <p>Payment </p>
          <div className="m-3 p-3 text-black font-bold ">
            <strong className="m-3">
              {' '}
              Method: {clear.order.paymentMethod}
            </strong>
          </div>

          <div to={'/payment'} className="">
            <button className="w-full bg-orange-300 text-white font-bold">
              {orders?.order?.isPaid ? (
                <span>Paid at {orders?.order?.paidAt}</span>
              ) : (
                <span>Not Paid</span>
              )}
            </button>
          </div>
        </div>

        <div className=" m-3 p-3 border border-indigo-600  w-full">
          <p>items</p>
          <div className="m-3 p-3 text-black font-bold ">
            {clear.order.orderItems?.map((item) => (
              <div className="flex" key={item.title}>
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

          <button className="w-full bg-orange-950 text-white font-bold">
            {' '}
          </button>
        </div>
      </div>

      <ul
        className="   items-end m-7 py-7 gap-10 text-white  
         top-0 text-center bg-slate-600 h-80 md:w-[400px] 
        "
      >
        <div className="tex text-center m-3 p-3  ">
          <li className="">Order Summury : {''}</li>
          <li className=" ">
            <div>
              <span className="">
                items {''} : {clear.order.itemsPrice}
              </span>
            </div>

            <div>
              <span className="">
                taxi{''} : {clear.order.taxPrice}
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
                All Total{''} : {clear.order.totalPrice}
              </span>
            </div>
          </div>

          <div className="m-3">
            <button className=" md:w-[100px]">
              {' '}
              <strong className="m-2">
                <strong>
                  <strong className="m-2">
                    <PayPalButtons
                      createOrder={createOrder}
                      onApprove={onApprove}
                      onError={onError}
                    ></PayPalButtons>
                  </strong>
                </strong>
              </strong>
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}
