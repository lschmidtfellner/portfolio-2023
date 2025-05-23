import React, {useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import rippl0 from '../assets/rippl/rippl0.png'
import rippl2 from '../assets/rippl/rippl2.png'
import rippl3 from '../assets/rippl/rippl3.png'
import {ReactComponent as SideArrow} from '../assets/sitesidearrow.svg'
import {ReactComponent as SideArrow2} from '../assets/sitesidearrow2.svg'
import { gsap } from 'gsap'

function Rippl({ modeToggle, pColor, handleNavigation }) {
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
      <h2 style={{opacity: 0}} className="text-5xl sm:text-8xl font-higuen">Rippl</h2>
      <h3 style={{opacity: 0}} className="text-lg sm:text-2xl font-aktiv font-bold mt-12">
        Software Engineering <br/> & Visual Identity
      </h3>
      <p style={{opacity: 0}} className="font-aktiv mt-6 text-xs sm:text-sm lg:text-lg w-[80%]">
        Rippl is a fullstack MERN app I developed in an effort to utilize
        Spotify's proprietary 'popularity quotient' against itself. By limiting
        the maximum popularity and providing a track or two, I discovered that I
        could find lesser-known hits within a given genre.
      </p>
      <div style={{opacity: 0}} className="flex justify-center mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={rippl0}
        />
      </div>
      <p style={{opacity: 0}} className="font-aktiv mt-20 text-xs sm:text-sm lg:text-lg w-[80%]">
        For the visual identity, I wanted to play around with 3-dimensional
        assets that ideated on ripples or waves. I also wanted to keep it
        somewhat compatible with Spotify's visual identity, but with some extra
        whimsy and flair.
      </p>
      <div style={{opacity: 0}} className="flex justify-center mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={rippl2}
        />
      </div>
      <div style={{opacity: 0}} className="flex justify-center mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={rippl3}
        />
      </div>
      <h2
        style={{
          borderBottom: `1px solid ${pColor}`,
          opacity: 0
        }}
        className="font-higuen text-3xl pb-2 mt-20 border-b-1 cursor-pointer "
      >
        <a href="https://ripplrecs.netlify.app/">Visit the site</a>
      </h2>
      <h2
        style={{
          borderBottom: `1px solid ${pColor}`,
          opacity: 0
        }}
        className="font-higuen text-3xl pb-2 mt-6 border-b-1 cursor-pointer "
      >
        <a href="https://github.com/lschmidtfellner/Rippl_frontend">
          Github repository
        </a>
      </h2>
      <div>
        <div className='flex flex-col font-higuen text-6xl mt-40 mb-40 justify-center items-center leading-snug'>
          <div onClick={() => handleNavigation('/')} className='flex cursor-pointer'>
            {modeToggle ? <SideArrow2 className='h-10 mt-4 mr-2'/> : <SideArrow className='h-10 mt-4 mr-2'/>}
          <h2>Home&emsp;</h2>
          </div>
          <div onClick={() => handleNavigation('/newor')} className='flex cursor-pointer'>
          <h2>&emsp;Next</h2>
          {modeToggle ? <SideArrow2 className='h-10 mt-4 ml-2 rotate-180'/> : <SideArrow className='h-10 mt-4 ml-2 rotate-180'/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rippl
