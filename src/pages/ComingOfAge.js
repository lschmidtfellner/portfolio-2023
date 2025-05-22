import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as SideArrow } from '../assets/sitesidearrow.svg'
import { ReactComponent as SideArrow2 } from '../assets/sitesidearrow2.svg'
import { gsap } from 'gsap'
import coa1 from '../assets/comingofage/bfi+spread+1+site.jpeg'
import coa2 from '../assets/comingofage/bfi+spread+2+site.jpeg'
import coa3 from '../assets/comingofage/Ticket+Set+MoVV.jpeg'

function ComingOfAge({ modeToggle, pColor, handleNavigation }) {
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
    <div
      ref={childrenRef}
      style={{ color: pColor }}
      className="flex flex-col mx-6 mt-20 pt-16 sm:px-20 md:px-32 lg:px-48 xl:px-64 2xl:px-80 2xl:max-w-[1680px]"
    >
      <h2 className="text-5xl sm:text-8xl font-higuen">Coming of Age</h2>
      <h3 className="text-lg sm:text-2xl font-aktiv font-bold mt-12">
        Print Design & <br/> Visual Identity
      </h3>
      <div className="flex justify-center mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={coa1}
        />
      </div>
      <p className="font-aktiv mt-20 text-xs sm:text-sm lg:text-lg w-[80%]">
        The assignment entailed the creation of a brochure for the British Film
        Institute’s John Hughes film festival. With the intention to reflect the
        lively and youthful essence of Hughes’ films, a warm color palette was
        chosen. This was complemented by the use of 3D-extruded lines,
        contributing a sense of motion and a light-hearted feel to the design.
        This approach sought to gently echo the engaging and dynamic nature of
        Hughes’ filmography, aiming to offer a subtle yet spirited visual
        experience for the festival attendees.
      </p>
      <div className="flex justify-center mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={coa2}
        />
      </div>
      <div className="flex justify-center mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={coa3}
        />
      </div>
      <div>
        <div className="flex flex-col font-higuen text-6xl mt-40 mb-40 justify-center items-center leading-snug">
          <div onClick={() => handleNavigation('/')} className="flex cursor-pointer">
            {modeToggle ? (
              <SideArrow2 className="h-10 mt-4 mr-2" />
            ) : (
              <SideArrow className="h-10 mt-4 mr-2" />
            )}
            <h2>Home&emsp;</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingOfAge
