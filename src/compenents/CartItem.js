import React from 'react'
import {
  removeFromBasket,
  selectProduct,
  set_cart,
} from '../reducer/sliceReducer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { selectCart } from '../reducer/sliceReducer'

function CartItem({ price, description, id, image, category, title, rating }) {
  const items = useSelector(selectCart)
  const product = useSelector(selectProduct)

  const dispatch = useDispatch()
  const addItem2 = (e) => {
    e.preventDefault()
    dispatch(removeFromBasket(id))
  }

  const addItem = () => {
    dispatch(set_cart(id))
  }

  return (
    <div className="md:flex   md:flex-1  bg-slate-200 m-2 p-2">
      <button className="text-3xl border-b pb-4">
        {items.length === 0
          ? 'Your Amazon Products is empty'
          : 'Your Shopping Products'}
      </button>
      <div className="w-20 p-2 m-2 ">
        <img src={image} alt="" />
      </div>

      <div className="md:m-5 md:p-5 font-bold flex">
        <p>{category}</p>
      </div>

      <div className="md:m-5 md:p-5 font-bold flex">
        <p>{price}</p>
      </div>
      <div className="flex py-3 ">
        <div className="md:m-3 p-3 font-bold   ">
          <button className="" onClick={addItem2}>
            -
          </button>
        </div>
        <div className="md:m-3 p-3 font-bold  ">
          <button className=" ">{items.length}</button>
        </div>
        <div className="md:m-3 p-3 font-bold   ">
          <button className=" " onClick={addItem}>
            +
          </button>
        </div>
      </div>
      <div>
        <button onClick={addItem2} className="p-5 m-5 bg-orange-400">
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
