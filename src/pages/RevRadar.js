import React, {useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import revradar1 from '../assets/revradar/revradar1.png'
import revradar2 from '../assets/revradar/revradar2.png'
import revradar3 from '../assets/revradar/revradar3.png'
import revradar4 from '../assets/revradar/revradar4.png'
import {ReactComponent as SideArrow} from '../assets/sitesidearrow.svg'
import {ReactComponent as SideArrow2} from '../assets/sitesidearrow2.svg'
import { gsap } from 'gsap'

function RevRadar({ modeToggle, pColor, handleNavigation }) {
  const navigate = useNavigate()
  const childrenRef = useRef(null)

  useEffect(() => {
    const elements = childrenRef.current.children
    gsap.set(elements, { y: 20, autoAlpha: 0 }) // set initial position

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
    <div ref={childrenRef} style={{ color: pColor }} className="flex flex-col mx-6 mt-20 pt-16 sm:px-20 md:px-32 lg:px-48 xl:px-64 2xl:px-80 2xl:max-w-[1680px]">
      <h2 style={{opacity: 0}} className="text-5xl sm:text-8xl font-higuen">RevRadar (WIP)</h2>
      <h3 style={{opacity: 0}} className="text-lg sm:text-2xl font-aktiv font-bold mt-12">
        Software Engineering <br/> & Visual Identity
      </h3>
      <p style={{opacity: 0}} className="font-aktiv mt-6 text-xs sm:text-sm lg:text-lg w-[80%]">
        RevRadar is a fullstack MERN app I created with a team of developers at the General Assembly fullstack software engineering fellowship that serves as a peer-to-peer used car marketplace. With my team we implemented JWT authentication on both the front and back ends. On our initial pass we focussed primarily on functionality, but I created a new visual identity and Figma wireframe for the team and I to update the app from.
      </p>
      <div style={{opacity: 0}} className="flex justify-center gap-5 w-fit mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-[45%] h-auto"
          src={revradar1}
        />
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-[45%] h-auto"
          src={revradar2}
        />
      </div>
      <p style={{opacity: 0}} className="font-aktiv mt-20 text-xs sm:text-sm lg:text-lg w-[80%]">
        For the visual identity, I wanted to evoke elements from advertisements I've seen in newspapers for used cars. I also wanted to give the illusion that the app itself is a periodical through the use of font, color, and other such assets.
      </p>
      <div style={{opacity: 0}} className="flex justify-center mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={revradar4}
        />
      </div>
      <h2
        style={{
          borderBottom: `1px solid ${pColor}`,
          opacity: 0
        }}
        className="font-higuen text-3xl pb-2 mt-20 border-b-1 cursor-pointer "
      >
        <a href="https://revradar.vercel.app/">Visit the site</a>
      </h2>
      <h2
        style={{
          borderBottom: `1px solid ${pColor}`,
          opacity: 0
        }}
        className="font-higuen text-3xl pb-2 mt-6 border-b-1 cursor-pointer "
      >
        <a href="https://github.com/lschmidtfellner/RevRadar-client">
          Github repository
        </a>
      </h2>
      <h2
        style={{
          borderBottom: `1px solid ${pColor}`,
          opacity: 0
        }}
        className="font-higuen text-3xl pb-2 mt-6 border-b-1 cursor-pointer "
      >
        <a href="https://www.figma.com/file/YeIfroUdPnkTRYJ6kvkMpL/RevRadar-Rebrand?type=design&node-id=0%3A1&mode=design&t=m8nRvZmwZvgptmVj-1">
          Figma wireframe
        </a>
      </h2>
      <div>
        <div className='flex flex-col font-higuen text-6xl mt-40 mb-40 justify-center items-center leading-snug'>
          <div onClick={() => handleNavigation('/')} className='flex cursor-pointer'>
            {modeToggle ? <SideArrow2 className='h-10 mt-4 mr-2'/> : <SideArrow className='h-10 mt-4 mr-2'/>}
          <h2>Home&emsp;</h2>
          </div>
          <div onClick={() => handleNavigation('/rippl')} className='flex cursor-pointer'>
          <h2>&emsp;Next</h2>
          {modeToggle ? <SideArrow2 className='h-10 mt-4 ml-2 rotate-180'/> : <SideArrow className='h-10 mt-4 ml-2 rotate-180'/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RevRadar
