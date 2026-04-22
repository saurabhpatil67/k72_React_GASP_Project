import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-4 mb-[-2.5vw]'>
      <div className='border-3 hover:border-lime-300 hover:text-lime-300 flex items-center border-white rounded-full uppercase text-white'>
        <Link to='/projects' className='text-[7vw] px-8 pt-4 m-0 leading-[5vw]'>Work</Link>
      </div>

      <div className='border-3 hover:border-lime-300 hover:text-lime-300 flex items-center border-white rounded-full uppercase text-white'>
        <Link to='/agency' className='text-[7vw]  px-8 pt-4 m-0 leading-[5vw]'>Agency</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
