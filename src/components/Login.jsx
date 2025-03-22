import React, { useRef, useState } from 'react'
import Header from './Header'
import { NETFLIX_BG } from '../utils/constants'
import validate from '../utils/validate'

const Login = () => {

    const email = useRef()
    const name = useRef()
    const password = useRef()

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMesssage, setErrorMessage] = useState()

    const handleBtnClick = () => {
        const message = validate(email?.current?.value, name?.current?.value, password?.current?.value)
        setErrorMessage(message)
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)

    }

  return (
    <div>
        <Header />
        <img className='absolute' src={NETFLIX_BG} alt="netflix-bg" />
        <form className='w-3/12 p-12 my-36 left-0 right-0 mx-auto bg-black/80 absolute rounded-lg' action="" onSubmit={(e) => e?.preventDefault()}>
            <h1 className='text-3xl font-bold text-white my-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            <input ref={email} type="text" placeholder='Email Address' className='bg-gray-400 my-2 w-full p-2'/>
            {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='bg-gray-400 my-2 w-full p-2'/>}
            <input ref={password} type="text" placeholder='Password' className='bg-gray-400 my-2 w-full p-2'/>
            <p className='text-red-700'>{errorMesssage}</p>
            <button className='text-white bg-red-700 w-full my-2 p-2 cursor-pointer' onClick={handleBtnClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='text-white cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "Not a user? Sign Up now." : "Already a user? Sign In now."}</p>
        </form>
    </div>
  )
}

export default Login