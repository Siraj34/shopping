import React, { useState } from 'react'
import CheckoutSteps from '../compenents/CheckoutSteps'
import { useDispatch, useSelector } from 'react-redux'
import { getPayment, selectPayment } from '../reducer/sliceReducer'
import { useNavigate } from 'react-router-dom'

export default function PaymentScreen() {
  const paymentMethod = useSelector(selectPayment)

  const dispatch = useDispatch()
  const [paymentMethodName, setPaymentMethodName] = useState(
    paymentMethod || 'PayPal'
  )
  const navigate = useNavigate()

  //useEffect(() => {
  //if (!shipping) {
  //   navigate('/shipping')
  // }
  // }, [navigate, shipping])

  const handler = (e) => {
    e.preventDefault()
    dispatch(getPayment(paymentMethodName))
    localStorage.setItem('paymentMethod', paymentMethodName)
    navigate('/placeorder')
  }

  return (
    <div className="  h-screen justify-center items-center bg bg-teal-500">
      <div>
        <div className=" flex flex-col justify-around items-center  ">
          <CheckoutSteps step1 step2 step3></CheckoutSteps>
          <div className=" flex flex-col m-3 px-3">
            <div>
              <p>Payment Method</p>
              <p className="my-3">Payment Method</p>
            </div>
            <form>
              <div className="m-3 flex">
                <input
                  type="checkbox"
                  id="PayPal"
                  label="PayPal"
                  value="PayPal"
                  checked={paymentMethodName === 'PayPal'}
                  onChange={(e) => setPaymentMethodName(e.target.value)}
                />

                <h1 className="m-2"> PayPal</h1>
              </div>
              <div className="m-3 flex ">
                <input
                  type="checkbox"
                  id="Stripe"
                  label="Stripe"
                  value="Stripe"
                  checked={paymentMethodName === 'Stripe'}
                  onChange={(e) => setPaymentMethodName(e.target.value)}
                />

                <h1 className="m-2"> Stripe</h1>
              </div>
              <div className="mb-3">
                <button
                  onClick={handler}
                  className="bg bg-amber-200 h-11 w-24 rounded-full"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
