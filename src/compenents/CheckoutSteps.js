import React from 'react'

export default function CheckoutSteps(props) {
  return (
    <h1 className="checkout-step border-b-4 border-b-orange-500  flex  ">
      <ul className="m-2 justify-center items-center  flex bottom-b-4 border-b-orange-400 gap-3 ">
        <li
          className={
            props.step1
              ? 'active border-b-4 border-b-rose-900'
              : ' active:border-b-4 border-b-orange-400'
          }
        >
          Sign-In
        </li>
        <li
          className={
            props.step2
              ? 'active border-b-4 border-b-rose-900'
              : ' active:border-b-4 border-b-orange-400'
          }
        >
          Shipping
        </li>
        <li
          className={props.step3 ? 'active border-b-4 border-b-rose-900  ' : ''}
        >
          Payment
        </li>
        <li
          className={props.step4 ? 'active border-b-4 border-b-rose-900  ' : ''}
        >
          Place Order
        </li>
      </ul>
    </h1>
  )
}
