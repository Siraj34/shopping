import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSignin, selectSignin } from '../reducer/sliceReducer'
import { Link } from 'react-router-dom'

export default function ProfileScreen() {
  const sign = useSelector(selectSignin)
  const [email, setEmail] = useState(sign?.email)
  const [password, setPassword] = useState('')
  const [name, setName] = useState(sign?.name)
  const [confirmPassword, setConfirmPassword] = useState('')
  const dispatch = useDispatch()

  const update = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.put(
        `https://dataend-app.vercel.app/api/users/profile/${sign._id}`,
        {
          name,
          email,
          password,
        }
      )
      dispatch(getSignin(data))
      localStorage.setItem('sign', JSON.stringify(data))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className=" bg-blue-400  justify-around items-center h-screen md:h-svh">
      <div>
        <div className="flex flex-col">
          <h1>
            <title>User Profile</title>
          </h1>
          <div className="justify-around items-center m-1  flex flex-col ">
            <h2 className="tex uppercase font-bold p-5">User Profile</h2>
            <form className="justify-around items-center m-1  flex flex-col p-5">
              <h5>Name</h5>
              <input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="md:w-[400px] m-2"
              />

              <h5>E-mail</h5>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="md:w-[400px] m-2"
              />

              <h5>Password</h5>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="md:w-[400px] m-2"
              />

              <h5>confirm Password</h5>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="md:w-[400px] m-2"
              />

              <button
                className="bg bg-amber-200 h-11 w-24 rounded-full"
                onClick={update}
              >
                <Link to={'/'}>Update</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
