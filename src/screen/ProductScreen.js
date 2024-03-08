import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { getAll, selectProduct, set_cart } from '../reducer/sliceReducer'

function ProductScreen() {
  const product = useSelector(selectProduct)
  const navigate = useNavigate()
  const catec = useParams()
  const { category } = catec
  const dispatch = useDispatch()

  useEffect(() => {
    const getfetch = async () => {
      await axios
        .get(`https://dataend-app.vercel.app/api/posts/category/${category}`)
        .then((res) => {
          dispatch(getAll(res.data))
        })
    }
    getfetch()
  }, [category])

  const addCart = async () => {
    dispatch(set_cart(product))
    navigate(`/cart`)
  }

  return (
    <div className="   md:flex justify-between items-cente h-screen  bg-neutral-400">
      <div className=" md:m-5 flex justify-between ">
        <div className="bg m-5">
          <img src={product.image} alt="" className=" w-[300px] bg-slate-50" />
        </div>
        <div className="m-2 py-2 flex-wrap">
          <div className="m-3 p-3 gap4 text-2xl  font-semibold">
            {product.category}
          </div>
          <div className="m-3 p-3 gap4 text-sm  font-semibold">
            {''}
            {product.title}
          </div>
          <div className="m-3 p-3 gap4 text-sm  font-semibold">
            ${product.price}
          </div>
        </div>
      </div>
      <div>
        <ul className=" m-5 py-5 gap-10 text-black top-0 text-center bg-slate-600  md:w-[400px]">
          <div className="tex text-center ">
            <li className="p-4 font-bold text-center">
              Status : {''}
              {product.count}
            </li>
            <li className=" text-center justify-between">
              <span className="p-4 font-bold text-center">
                In Stock : {''}
                {product.numReviews}
              </span>

              <span className="p-4 font-bold text-center ">unavailable</span>
              <span className=" font-bold text-center  ">
                {Array(product.rating)
                  .fill()
                  .map((i) => (
                    <span className="">🌟</span>
                  ))}
              </span>
              <span className="p-4 font-bold text-center">
                ${product.price}
              </span>
            </li>
          </div>

          <li className="md:p-4 md:m-4">
            <div className="d-grid">
              <button
                className="bg bg-yellow-600 w-60 text-white"
                onClick={() => addCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProductScreen
