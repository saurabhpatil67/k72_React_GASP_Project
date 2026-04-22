import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] pt-2 text-center text-white'>
            <div className='text-[10vw] uppercase leading-[9vw] flex items-center justify-center'>
                The spark for
            </div>
            <div className='text-[10vw] uppercase leading-[9vw] flex items-center justify-center'>
                all 
                <div className='h-[7.5vw] w-[17vw] rounded-full overflow-hidden mx-3'>
                    <Video />
                </div>
                things
            </div>
            <div className='text-[10vw] uppercase leading-[9vw] flex items-center justify-center'>
                creative
            </div>
        </div>
    )
}

export default HomeHeroText
