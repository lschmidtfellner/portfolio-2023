import React from 'react'
import {ReactComponent as SiteHyphenLg} from '../assets/sitehyphenlg.svg'

function Contact({pColor}) {
  return (
    <div className='mt-40'>
      <h2 className='font-aktiv font-bold text-lg'>Get in Touch</h2>
      <div className='this-one flex flex-col mt-16 items-center'>
        <div className='flex'>
        <SiteHyphenLg style={{borderColor: pColor}} className="h-3 mt-3 mr-4" />
        <h2 className='font-higuen text-3xl pb-2 cursor-pointer'>Email</h2>
        <SiteHyphenLg style={{borderColor: pColor}} className="h-3 mt-3 ml-4" />
        </div>
        <div className='flex mt-3'>
        <SiteHyphenLg style={{borderColor: pColor}} className="h-3 mt-3 mr-4" />
        <h2 className='font-higuen text-3xl pb-2 cursor-pointer'>Linkedin</h2>
        <SiteHyphenLg style={{borderColor: pColor}} className="h-3 mt-3 ml-4" />
        </div>
        <div className='flex mt-3'>
        <SiteHyphenLg style={{borderColor: pColor}} className="h-3 mt-3 mr-4" />
        <h2 className='font-higuen text-3xl pb-2 cursor-pointer'>Github</h2>
        <SiteHyphenLg style={{borderColor: pColor}} className="h-3 mt-3 ml-4" />
        </div>
      </div>
    </div>
  )
}

export default Contact