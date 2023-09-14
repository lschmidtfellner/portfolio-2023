import React from 'react'
import { ReactComponent as SiteHyphen } from '../assets/sitehyphen.svg'

function Landing({ pColor }) {
  return (
    <div className='mx-6 pt-28'>
      <div style={{ color: pColor }} className=" text-3xl">
        <h2 className="font-aktiv font-bold">Luke</h2>
        <h2 className="font-aktiv font-bold">Schmidt</h2>
        <div className="flex">
          <SiteHyphen className="h-3 mt-3 mr-2" />
          <h2 className="font-aktiv font-bold">Fellner</h2>
        </div>
      </div>
      <div style={{ color: pColor }} className=" text-right font-higuen w-full pt-8 z-4 text-3xl">
        <h2>Graphic Designer</h2>
        <h2>& UI Engineer</h2>
      </div>
    </div>
  )
}

export default Landing
