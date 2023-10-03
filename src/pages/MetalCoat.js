import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {ReactComponent as SideArrow} from '../assets/sitesidearrow.svg'
import {ReactComponent as SideArrow2} from '../assets/sitesidearrow2.svg'
import MCCarousel from '../components/MCCarousel'
import MCCouple from '../components/MCCouple'
import { gsap } from 'gsap'

import shy1 from '../assets/metalcoat/shy1.jpg'
import shy2 from '../assets/metalcoat/shy2.jpg'
import cel1 from '../assets/metalcoat/cel1.jpg'
import cel2 from '../assets/metalcoat/cel2.jpg'
import mel1 from '../assets/metalcoat/mel1.jpg'
import mel2 from '../assets/metalcoat/mel2.jpg'
import op1 from '../assets/metalcoat/dev1.jpg'
import op2 from '../assets/metalcoat/dev2.jpg'


function MetalCoat({ modeToggle, pColor, handleNavigation }) {
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
      <h2 className="text-5xl font-higuen">Metal Coat</h2>
      <h3 className="text-lg font-aktiv font-bold mt-12">
        Design, Identity
      </h3>
      <MCCarousel pColor={pColor}></MCCarousel>
      <p className="font-aktiv mt-12 text-xs w-72">
      I began making apparel in the esports community in 2018 with the mission of creating subtle yet aesthetically appealing clothing for people in the scene. I traveled to large scale tournaments and conventions, networking with influencers and selling my merchandise in person before slowly developing the skills to build and manage an ecommerce platform.
      </p>
      <p className="font-aktiv mt-6 text-xs w-72">
      In October 2021, I rebranded under the name Metal Coat, with three products and brand new means of production. With just a thousand twitter followers, a half-dozen freebies sent to notable community figures, and a couple of tweets, the reception was much greater than expected. Within an hour I had sold $2,000 worth of clothing, and just three weeks later I broke $10,000. Each subsequent drop has beaten the total revenue of the previous by a considerable margin.
      </p>
      <MCCouple className={'mt-12'} pColor={pColor} src1={cel1} src2={cel2}/>
      <MCCouple className={'translate-x-10'} pColor={pColor} src1={mel1} src2={mel2}/>
      <MCCouple pColor={pColor} src1={op1} src2={op2}/>
      <MCCouple className={'translate-x-10'} pColor={pColor} src1={shy1} src2={shy2}/>
      <div>
      <h2
        style={{
          borderBottom: `1px solid ${pColor}`
        }}
        className="font-higuen text-3xl pb-2 mt-16 border-b-1 cursor-pointer "
      >
        <a href="metalcoat.xyz/">Visit the site</a>
      </h2>
        <div className='flex flex-col font-higuen text-6xl mt-40 mb-40 justify-center items-center leading-snug'>
          <div onClick={() => handleNavigation('/')} className='flex'>
          {modeToggle ? <SideArrow2 className='h-10 mt-4 mr-2'/> : <SideArrow className='h-10 mt-4 mr-2'/>}
          <h2>Home&emsp;</h2>
          </div>
          <div onClick={() => handleNavigation('/crisol')} className='flex'>
          <h2>&emsp;Next</h2>
          {modeToggle ? <SideArrow2 className='h-10 mt-4 ml-2 rotate-180'/> : <SideArrow className='h-10 mt-4 ml-2 rotate-180'/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetalCoat
