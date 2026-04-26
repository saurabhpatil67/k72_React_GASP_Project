import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {
    // when path change then stair animation run 
    const currentPath = useLocation().pathname;

    const pageRef = useRef(null)


    const stairParentRef = useRef(null)
    // from : final to initialization 
    useGSAP(function () {

        const tl = gsap.timeline({
            //   repeat: -1
        })

        tl.to(stairParentRef.current, {
            display: 'block'
        })
        tl.from('.stair', {
            height: 0,
            duration: 1,
            stagger: {
                amount: -0.4
            }
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })
        tl.to(stairParentRef.current, {
            display: 'none',
        })
        tl.to('.stair', {
            y: '0%',
        })

        gsap.from(pageRef.current,{
            opacity:0,
            delay:1.7,
            scale:1.2
        })
    }, [currentPath])

    return (
        <div>
            <div ref={stairParentRef} className='h-screen w-full fixed z-10 top-0'>
                <div className='h-full w-full flex'>
                    <div className='stair h-full w-1/5 bg-black '></div>
                    <div className='stair h-full w-1/5 bg-black '></div>
                    <div className='stair h-full w-1/5 bg-black '></div>
                    <div className='stair h-full w-1/5 bg-black '></div>
                    <div className='stair h-full w-1/5 bg-black '></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs
