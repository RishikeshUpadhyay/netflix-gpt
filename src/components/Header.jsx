import React from 'react'
import { NETFLIX_LOGO } from '../utils/constants'

const Header = () => {
  return (
    <div className='bg-gradient-to-b from-black absolute w-full z-10'>
        <img className='w-44' src={NETFLIX_LOGO} alt="netflix-logo" />
    </div>
  )
}

export default Header