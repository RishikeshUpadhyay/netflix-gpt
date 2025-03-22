import React, { useState } from 'react'
import Header from './Header'
import { NETFLIX_BG } from '../utils/constants'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)

    }

  return (
    <div>
        <Header />
        <img className='absolute' src={NETFLIX_BG} alt="netflix-bg" />
        <form className='w-3/12 p-12 my-36 left-0 right-0 mx-auto bg-black/80 absolute rounded-lg' action="">
            <h1 className='text-3xl font-bold text-white my-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            <input type="text" placeholder='Email Address' className='bg-gray-400 my-2 w-full p-2'/>
            {!isSignInForm && <input type="text" placeholder='Full Name' className='bg-gray-400 my-2 w-full p-2'/>}
            <input type="text" placeholder='Password' className='bg-gray-400 my-2 w-full p-2'/>
            <button className='text-white bg-red-700 w-full my-2 p-2 cursor-pointer'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='text-white cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "Not a user? Sign Up now." : "Already a user? Sign In now."}</p>
        </form>
    </div>
  )
}

export default Login