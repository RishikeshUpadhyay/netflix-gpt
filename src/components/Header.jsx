import React, { useEffect } from 'react'
import { NETFLIX_LOGO, PHOTO_URL } from '../utils/constants'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const user = useSelector(store => store?.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
        navigate("/browse")
        
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
      }
    });

    return () => unsubscribe()

  }, [])

  
  return (
    <div className='bg-gradient-to-b from-black absolute w-full z-10 flex justify-between'>
        <img className='w-44' src={NETFLIX_LOGO} alt="netflix-logo" />
        {user && <div className='flex'>
          <img className='w-12 m-2 py-2' src={user?.photoURL} alt="photo-url" />
          <button className='m-2' onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
    
  )
}

export default Header