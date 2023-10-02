import React from 'react'
import { useNavigate } from 'react-router-dom'
import rippl0 from '../assets/rippl/rippl0.png'
import rippl2 from '../assets/rippl/rippl2.png'
import rippl3 from '../assets/rippl/rippl3.png'
import {ReactComponent as SideArrow} from '../assets/sitesidearrow.svg'

function Rippl({ pColor, handleNavigation }) {
  const navigate = useNavigate()
  return (
    <div style={{ color: pColor }} className="mx-6 mt-20 w-auto ">
      <h2 className="text-5xl font-higuen">Rippl</h2>
      <h3 className="text-lg font-aktiv font-bold mt-12">
        Design, Web Development
      </h3>
      <p className="font-aktiv mt-6 text-xs w-72">
        Rippl is a fullstack MERN app I developed in an effort to utilize
        Spotify's proprietary 'popularity quotient' against itself. By limiting
        the maximum popularity and providing a track or two, I discovered that I
        could find lesser-known hits within a given genre.
      </p>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={rippl0}
        />
      </div>
      <p className="font-aktiv mt-12 text-xs w-72">
        For the visual identity, I wanted to play around with 3-dimensional
        assets that ideated on ripples or waves. I also wanted to keep it
        somewhat compatible with Spotify's visual identity, but with some extra
        whimsy and flair.
      </p>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={rippl2}
        />
      </div>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={rippl3}
        />
      </div>
      <h2
        style={{
          borderBottom: `1px solid ${pColor}`
        }}
        className="font-higuen text-3xl pb-2 mt-16 border-b-1 cursor-pointer "
      >
        <a href="https://ripplrecs.netlify.app/">Visit the site</a>
      </h2>
      <h2
        style={{
          borderBottom: `1px solid ${pColor}`
        }}
        className="font-higuen text-3xl pb-2 mt-6 border-b-1 cursor-pointer "
      >
        <a href="https://github.com/lschmidtfellner/Rippl_frontend">
          Github repository
        </a>
      </h2>
      <div>
        <div className='flex flex-col font-higuen text-6xl mt-40 mb-40 justify-center items-center leading-snug'>
          <div onClick={() => handleNavigation('/')} className='flex'>
            <SideArrow className='h-10 mt-4 mr-2'/>
          <h2>Home&emsp;</h2>
          </div>
          <div onClick={() => handleNavigation('/newor')} className='flex'>
          <h2>&emsp;Next</h2>
          <SideArrow className='h-10 mt-4 ml-2 rotate-180'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rippl
