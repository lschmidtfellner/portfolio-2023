import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {ReactComponent as SideArrow} from '../assets/sitesidearrow.svg'
import { gsap } from 'gsap'
import coa1 from '../assets/comingofage/bfi+spread+1+site.jpeg'
import coa2 from '../assets/comingofage/bfi+spread+2+site.jpeg'
import coa3 from '../assets/comingofage/Ticket+Set+MoVV.jpeg'


function ComingOfAge({ pColor, handleNavigation }) {
  const navigate = useNavigate()
  const childrenRef = useRef(null)

  useEffect(() => {
    const elements = childrenRef.current.children
    gsap.set(elements, { y: 30, autoAlpha: 0 }) // set initial position

    gsap.to(elements, {
      y: 0,
      autoAlpha: 1,
      stagger: 0.4, // delay between each child animation
      duration: 1, // animation duration
      ease: 'easeInOut', // easing function
      overwrite: 'auto'
    })
  }, [])

  return (
    <div ref={childrenRef} style={{ color: pColor }} className="mx-6 mt-20 w-auto ">
      <h2 className="text-5xl font-higuen">Coming of Age</h2>
      <h3 className="text-lg font-aktiv font-bold mt-12">
        Design
      </h3>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={coa1}
        />
      </div>
      <p className="font-aktiv mt-12 text-xs w-72">
      The assignment entailed the creation of a brochure for the British Film Institute’s John Hughes film festival. With the intention to reflect the lively and youthful essence of Hughes’ films, a warm color palette was chosen. This was complemented by the use of 3D-extruded lines, contributing a sense of motion and a light-hearted feel to the design. This approach sought to gently echo the engaging and dynamic nature of Hughes’ filmography, aiming to offer a subtle yet spirited visual experience for the festival attendees.
      </p>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={coa2}
        />
      </div>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={coa3}
        />
      </div>
      <div>
        <div className='flex flex-col font-higuen text-6xl mt-40 mb-40 justify-center items-center leading-snug'>
          <div onClick={() => handleNavigation('/')} className='flex'>
            <SideArrow className='h-10 mt-4 mr-2'/>
          <h2>Home&emsp;</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingOfAge
