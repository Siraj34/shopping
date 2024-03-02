import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getSignin } from '../reducer/sliceReducer'
import axios from 'axios'
function Login() {
  const { search } = useLocation()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch()
  const navegate = useNavigate()

  const signIn = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Password do not match')
      return
    }
    try {
      const { data } = await axios.post('api/users/signup', {
        email,
        password,
        name,
      })
      dispatch(getSignin(data))
      localStorage.setItem('userInfo', data)
      navegate(redirect || '/')
    } catch (error) {
      alert('invalid email and password')
    }
  }
  const register = () => {}
  return (
    <div className=" bg-blue-400  justify-around items-center h-screen md:h-svh ">
      <div className="bg  ">
        <div className=" flex flex-col  ">
          <div className=" justify-around items-center m-3 p-4 flex flex-col  ">
            <img
              width={200}
              height={300}
              className=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
              alt=""
            />
          </div>

          <div className="justify-around items-center m-1  flex flex-col ">
            <div className="">
              {' '}
              <h1 className="">Sign-Up</h1>
            </div>

            <form className="justify-around items-center m-1  flex flex-col">
              <h5>Name</h5>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="md:w-[400px] m-2"
              />
              <h5>E-mail</h5>
              <input
                type="text"
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
                type="submit"
                onClick={signIn}
                className="bg bg-amber-200 h-11 w-24 rounded-full"
              >
                Sign Up
              </button>
            </form>

            <p className="justify-around items-center m-1 flex flex-col-3 md:w-[400px]">
              By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use
              & Sale. Please see our Privacy Notice, our Cookies Notice and our
              Interest-Based Ads Notice.
            </p>

            <button
              onClick={register}
              className="bg bg-amber-200 h-11 w-[400px] rounded-full"
            >
              <Link to={`/signin?redirect=${redirect}`}>
                {' '}
                Create your Amazon Account Already have an account{''}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
