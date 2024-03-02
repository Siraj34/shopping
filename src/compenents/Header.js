import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSignOut, selectCart, selectSignin } from '../reducer/sliceReducer'
import { Link, useNavigate } from 'react-router-dom'
import { IoMenu } from 'react-icons/io5'
import { MdNavigateNext } from 'react-icons/md'

function Header() {
  const items = useSelector(selectCart)
  const sign = useSelector(selectSignin)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [nav, setnav] = useState(false)
  const add = () => {
    navigate('/cart')
  }
  const signout = () => {
    dispatch(getSignOut())
  }
  const add2 = () => {
    navigate('/signin')
  }
  const add3 = () => {
    navigate('/orderhistory')
  }
  const add4 = () => {
    navigate('/profile')
  }

  const add5 = () => {
    navigate('/Dashboard')
  }

  const hand = () => {
    setnav(!nav)
  }
  return (
    <div className="flex md:gap-5 h-20 justify-between items-center text-black bg-orange-300 font-bold">
      <div className="md:m-3 md:p-3 text-xl md:flex hidden  ">
        <Link to={'/'}>
          <h1 className={`g m-2`}>amazona</h1>
        </Link>

        <div className={`md:flex m-2  hidden`}>
          {sign ? (
            <div className=" flex gap-3">
              {sign.email}
              <button className="" onClick={add4}>
                UserProfile
              </button>
              <button className="" onClick={add3}>
                OrderHistory
              </button>
              <button className="" onClick={add5}>
                Dashboard
              </button>
              <Link to={'/signup'} onClick={signout}>
                SignOut
              </Link>
            </div>
          ) : (
            <div>
              <Link to={'/signin'}>SignIn</Link>
            </div>
          )}
        </div>
      </div>

      <div>
        {' '}
        <Link to={'/'}>
          <h1 className={`g m-2 flex md:hidden`}>amazona</h1>
        </Link>
      </div>

      <ul className="m-3 p-3 ml-2 text-x justify-between flex ">
        <div onClick={hand} className="block md:hidden m-6">
          {nav ? <MdNavigateNext size={20} /> : <IoMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? ' top-8 left-0 md:hidden mt-11 md:m-3 fixed   bg-slate-400 w-full  h-[300px] ease-in-out duration-500'
              : 'fixed ease-in-out duration-500    left-[100%]  md:m-2'
          }
        >
          {sign ? (
            <div
              className="  m-3 py-4 grid grid-cols-1  
            border-slate-900 divide-y divide-slate-500 border-b-4 "
            >
              <button>{sign.email}</button>
              <button className="m-2" onClick={add4}>
                UserProfile
              </button>
              <button className="m-2" onClick={add3}>
                OrderHistory
              </button>
              <button className="m-2" onClick={add5}>
                Dashboard
              </button>

              <button className="m-2" onClick={signout}>
                {' '}
                SignOut
              </button>
            </div>
          ) : (
            <div>
              <Link to={'/signin'}>SignIn</Link>
            </div>
          )}
        </div>
        <li
          className="tex text-blue-50 m-3 p-2 md:flex  relative "
          onClick={add}
        >
          <button className={`text-fuchsia-900  `}>{items.length}cart </button>
        </li>
      </ul>
    </div>
  )
}

export default Header
