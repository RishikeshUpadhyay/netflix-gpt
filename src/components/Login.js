import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background-logo" />
        </div>
        <form className='w-3/12 p-12 absolute bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>}
            <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
            <input type="text" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign In</button>
            <p className='py-4' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already registered. Sign in now."}</p>
        </form>
    </div>
  )
}

export default Login