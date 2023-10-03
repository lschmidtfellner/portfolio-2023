import React, {useEffect, useRef}from 'react'
import { useNavigate } from 'react-router-dom'
import {ReactComponent as SideArrow} from '../assets/sitesidearrow.svg'
import {ReactComponent as SideArrow2} from '../assets/sitesidearrow2.svg'
import { gsap } from 'gsap'
import vertrag1 from '../assets/vertrag/Portfolio+Wireframe.jpeg'
import vertrag2 from '../assets/vertrag/Portfolio+Wireframe2.jpeg'
import vertrag3 from '../assets/vertrag/vertrag+mockup.jpeg'

function Vertrag({ modeToggle, pColor, handleNavigation }) {
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
    <div ref={childrenRef} style={{ color: pColor }} className="flex flex-col mx-6 mt-20 pt-16 sm:px-20 md:px-32 lg:px-48 xl:px-64 2xl:px-80">
      <h2 className="text-5xl sm:text-8xl font-higuen">Vertrag</h2>
      <h3 className="text-lg sm:text-2xl font-aktiv font-bold mt-12">
        Visual Identity <br/>& Package Design
      </h3>
      <div className="flex justify-center mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={vertrag3}
        />
      </div>
      <p className="font-aktiv mt-20 text-xs sm:text-sm lg:text-lg w-[80%]">
      The project prompt was to devise a brief brand identity, story, and package design for a randomly generated product/theme pairing: "coffee for interpreters." This concept immediately evoked memories of my uncle, a German diplomat. The backstory I envisioned centers around poker games at the United Nations, where diplomats and interpreters would wager high-quality imports from their countries. The brand name "Vertrag," German for "treaty," reflects the fictional collaboration between Colombia and Germany in these card games.
      </p>
      <div className="flex justify-center mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={vertrag2}
        />
      </div>
      <p className="font-aktiv mt-20 text-xs sm:text-sm lg:text-lg w-[80%]">
      I aimed to create an elegant, modern package design infused with a touch of German tradition. The project features a custom sleek blackletter font, incorporating topographical textures to convey elegance and modernity. The confident design, showcased in a crafted and photographed mockup, seamlessly blends the graphics and the product, presenting the exclusive allure of Vertrag coffee.
      </p>
      <div className="flex justify-center mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={vertrag1}
        />
      </div>
      <div>
        <div className='flex flex-col font-higuen text-6xl mt-40 mb-40 justify-center items-center leading-snug'>
          <div onClick={() => handleNavigation('/')} className='flex cursor-pointer'>
          {modeToggle ? <SideArrow2 className='h-10 mt-4 mr-2'/> : <SideArrow className='h-10 mt-4 mr-2'/>}
          <h2>Home&emsp;</h2>
          </div>
          <div onClick={() => handleNavigation('/comingofage')} className='flex cursor-pointer'>
          <h2>&emsp;Next</h2>
          {modeToggle ? <SideArrow2 className='h-10 mt-4 ml-2 rotate-180'/> : <SideArrow className='h-10 mt-4 ml-2 rotate-180'/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vertrag
