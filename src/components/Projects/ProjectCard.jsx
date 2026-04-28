import React from 'react'

const ProjectCard = (props) => {
    return (

        <>
            <div className='group w-1/2 h-full relative transition-all duration-300 rounded-none hover:rounded-[50px] overflow-hidden  '>
                <img className='h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 ' src={props.image1} alt="" />
                <div className='opacity-0 transition-all duration-300 group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center bg-black/10  h-full w-full '>
                    <h2 className='font[font2] text-6xl text-white border-2 border-white rounded-full uppercase font-semibold px-3.5'>View Project</h2>
                </div>
            </div>

            <div className='group w-1/2 h-full relative transition-all duration-300 rounded-none hover:rounded-[50px] overflow-hidden  '>
                <img className='h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 ' src={props.image2} alt="" />
                <div className='opacity-0 transition-all duration-300 group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center bg-black/10  h-full w-full '>
                    <h2 className='cursor-pointer font[font2] text-6xl text-white border-2 border-white rounded-full uppercase font-semibold px-3.5'>View Project</h2>
                </div>
            </div>
        </>

    )
}

export default ProjectCard