import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='p-4 px-16 bg-gray-500/50 rounded-lg text-white'>Play ▶️</button>
            <button className='p-4 px-16 mx-2 bg-gray-500/50 rounded-lg text-white'>More Info ℹ️</button>
        </div>
    </div>
  )
}

export default VideoTitle