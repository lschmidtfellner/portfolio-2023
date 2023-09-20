import React from 'react'
import { ReactComponent as SiteHyphen } from '../assets/sitehyphen.svg'
import { ReactComponent as SiteScroll } from '../assets/sitescroll.svg'
import { ReactComponent as SiteDownArrow } from '../assets/sitedownarrow.svg'
import SelectedWork from '../components/SelectedWork'
import About from '../components/About'

function Landing({ pColor }) {
  return (
    <div style={{ color: pColor }} className='mx-6 pt-20'>
      <div className="text-5xl">
        <h1 className="font-higuen">Luke</h1>
        <h1 className="font-higuen">Schmidt</h1>
        <div className="flex">
          <SiteHyphen style={{color: pColor}} className="w-14 mr-4" />
          <h1 className=" font-higuen">Fellner</h1>
        </div>
      </div>
      <div className=" text-right font-bold font-aktiv w-full pt-8 z-4 text-lg">
        <h2>Graphic Designer</h2>
        <h2>& UI Engineer</h2>
      </div>
      <div className='flex mt-12 justify-between'>
        <p  className='text-[10pt] font-aktiv w-48 '>I’m a Brooklyn-based designer, software engineer, artist, and musician who recently graduated from General Assembly’s fullstack software engineering fellowship.</p>
        <div className='flex flex-col mr-6 mt-6 items-center justify-center'>
          <SiteScroll style={{color: pColor}} className='w-20 animate-slowspin site-scroll'/>
          <SiteDownArrow style={{color: pColor}}className='w-8 mt-4'/>
        </div>
      </div>
      <SelectedWork pColor={pColor}></SelectedWork>
    </div>
  )
}

export default Landing