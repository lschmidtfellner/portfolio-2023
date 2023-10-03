import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {ReactComponent as SideArrow} from '../assets/sitesidearrow.svg'
import {ReactComponent as SideArrow2} from '../assets/sitesidearrow2.svg'
import { gsap } from 'gsap'
import crisol1 from '../assets/crisol/8.jpeg'
import crisol2 from '../assets/crisol/Event_Wristband_Mockup_2.jpeg'
import crisol3 from '../assets/crisol/Flag+Mockup.jpeg'
import crisol4 from '../assets/crisol/iPhone+X+2018+Mockup.jpeg'


function Crisol({ modeToggle, pColor, handleNavigation }) {
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
      <h2 className="text-5xl font-higuen">Crisol</h2>
      <h3 className="text-lg font-aktiv font-bold mt-12">
        Design, Identity
      </h3>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={crisol1}
        />
      </div>
      <p className="font-aktiv mt-12 text-xs w-72">
      This identity was built out as a solution to a mock design prompt for a multi-purpose venue based in Santago, Chile. The name Crisol means "crucible", or the container in which components are smelted together. I wanted to invoke imagery from metallurgy or metalsmithing to communicate that the venue would be a place of high-energy experimentation.
      </p>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={crisol3}
        />
      </div>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={crisol4}
        />
      </div>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={crisol2}
        />
      </div>
      <div>
        <div className='flex flex-col font-higuen text-6xl mt-40 mb-40 justify-center items-center leading-snug'>
          <div onClick={() => handleNavigation('/')} className='flex'>
          {modeToggle ? <SideArrow2 className='h-10 mt-4 mr-2'/> : <SideArrow className='h-10 mt-4 mr-2'/>}
          <h2>Home&emsp;</h2>
          </div>
          <div onClick={() => handleNavigation('/vertrag')} className='flex'>
          <h2>&emsp;Next</h2>
          {modeToggle ? <SideArrow2 className='h-10 mt-4 ml-2 rotate-180'/> : <SideArrow className='h-10 mt-4 ml-2 rotate-180'/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crisol
