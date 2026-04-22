import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger);
  // koi bhi element select karne ke liye useRef use karte jaise ki JS mai document.querySelector se karte HTMLDetailsElement ko select karne ke liye useRef use karenge aur uske baad us element par GSAP animation apply karenge. 
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',
    'https://k72.ca/images/teamMembers/PLP2_640x960.jpg?w=640&h=960&s=277b83adbf80a1c60a1c7ee72dfdf5cf',
  ]

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: 'top 22%',
        end: 'top -190%',
        pin: true,
        scrub: true,

        onUpdate: function (elem) {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }

          imageRef.current.src = imageArray[imageIndex];
        }
      }
    })
  })

  return (
    <div>
      <div className='section1'>
        <div ref={imageDivRef} className='absolute h-[20vw] w-[15vw] overflow-hidden bg-cyan-400 top-35 left-[30vw] rounded-3xl'>
          <img ref={imageRef} className='rounded-3xl object-cover h-full w-full ' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="person1" />
        </div>

        <div className='relative font-[font2]'>
          <div className='mt-[53vh]'>
            <h1 className='text-[19.8vw] text-center uppercase leading-[18vw]'>SEVEN7Y <br /> TWO</h1>
          </div>

          <div className='pl-[40%] mt-3 mr-[4vw]'>
            <p className='text-6xl text-justify'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>

      <div className="section2 h-screen">

      </div>
    </div>
  )
}

export default Agence
