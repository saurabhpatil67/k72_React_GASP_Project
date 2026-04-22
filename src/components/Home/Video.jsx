import React from 'react'
import video1 from '../../assets/a1.mp4'

const video = () => {
  return (
    <div className='h-full w-full'>
      <video autoPlay muted loop className='w-full h-full object-cover'
        src={video1} type="video/mp4" />
      
    </div>
  )
}

export default video
