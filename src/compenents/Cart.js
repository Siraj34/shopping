import React from 'react'
import { useSelector } from 'react-redux'
import { selectCart, selectTotal } from '../reducer/sliceReducer'

import CartItem from './CartItem'
import Currency from 'react-currency-formatter'
import { Link, useNavigate } from 'react-router-dom'

function Cart() {
  const items = useSelector(selectCart)
  const total = useSelector(selectTotal)
  const navgate = useNavigate()

  const handlar = () => {
    navgate('/signin?redirect=/shipping')
  }

  return (
    <div className=" md:flex justify-between h-screen  overflow-y-auto bg-neutral-300">
      <div>
        {items?.map((item) => (
          <CartItem
            key={item?.title}
            id={item}
            image={item?.image}
            rating={item?.rating}
            price={item?.price}
            description={item?.description}
            title={item?.title}
            category={item?.category}
          />
        ))}

        <button className="text-3xl border-b p-4 m-3">
          {items.length === 0
            ? 'Your Amazon Products is empty'
            : 'Your Shopping Product'}
        </button>
      </div>
      <div className="m-3">
        {items === 0 ? (
          <div className="py-5">
            <div className="flex flex-2 m-3 text-white text-center bg-slate-600 h-[200px]">
              <div className=" m-3 p-3 ">
                <>
                  <h1 className="font-bold text-xl whitespace-nowrap">
                    Subtotal ({items.length} items):
                    <span className="font-bold ml-1">
                      <Currency quantity={total} currency="USD" />
                    </span>
                  </h1>

                  <button
                    className=" bg-orange-500 m-3 justify-around"
                    onClick={handlar}
                  >
                    Proceed to checkout
                  </button>
                </>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-5">
            <div className="flex flex-2 m-3 text-white text-center bg-slate-600 h-[200px]">
              <div className=" m-3 p-3 ">
                <>
                  <h1 className="font-bold text-xl whitespace-nowrap">
                    Subtotal ({items.length} items):
                    <span className="font-bold ml-1">
                      <Currency quantity={total} currency="GBP" />
                    </span>
                  </h1>

                  <button
                    className=" bg-orange-500 m-3 justify-around"
                    onClick={handlar}
                  >
                    Proceed to checkout
                  </button>
                </>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
