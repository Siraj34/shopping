import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter, set_cart } from '../reducer/sliceReducer'

import {
  getProducts,
  selectData,
  selectData1,
  selectStatus,
} from '../reducer/cartSlice'
import StatusCode from '../utils'
import { Link } from 'react-router-dom'

function Product({ search, setSearch }) {
  const data = useSelector(selectData)
  const filter = useSelector(selectFilter)
  const status = useSelector(selectStatus)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  if (status === StatusCode.LOADING) {
    return <div>loading ...</div>
  }
  if (status === StatusCode.ERROR) {
    return <p>somthing went wrong</p>
  }
  const addItem = (product) => {
    dispatch(set_cart(product))
  }

  return (
    <div className=" flex flex-wrap md:h-full md:w-full md:justify-center bg-red-950">
      {filter
        .filter((items) => {
          if (search == '') {
            return items
          } else if (
            items.title.toLowerCase().includes(search?.toLowerCase())
          ) {
            return items
          }
        })
        .map((product, index) => {
          return (
            <div
              className="   bg-slate-400  m-3 p-3 gap-2  w-[400px] justify-center  "
              key={index.title}
            >
              <div className=" md:grid md:grid-cols-2  ">
                <div className=" ">
                  <div className="w-[200px]">
                    <Link to={`/product/${product?.category}`}>
                      <img
                        src={product?.image}
                        alt=""
                        className="p-3"
                        height={200}
                        width={400}
                      />
                    </Link>
                  </div>
                </div>

                <div className=" m-2 p-2 h-[300px]">
                  <span className="m-2">
                    <Link to={`/product/${product?.category}`}>
                      {product?.title}
                    </Link>
                  </span>
                  <span className="m-2 flex  font-light text-sm ">
                    {product?.description}
                  </span>

                  <div className="m-2 h-10 font-light text-sm flex">
                    {Array(product.rating)
                      .fill()
                      .map((i) => (
                        <span className="flex-1">🌟</span>
                      ))}
                  </div>
                  <div className="m-2 flex">${product?.price}</div>
                  <button
                    onClick={() => addItem(product)}
                    className="B bg-orange-400  text-sm w-full
               hover:bg-yellow-300 border-orange-300 uppercase  "
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Product
