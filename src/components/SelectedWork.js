import React from 'react'

function SelectedWork({pColor}) {
  return (
    <div className='mt-40'>
        <h2 className='font-aktiv font-bold text-lg'>Selected Work</h2>
        <ul>
          <li style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-3xl pb-2 mt-16 border-b-1 cursor-pointer '>RevRadar</li>
          <li style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-3xl pb-2 mt-6 border-b-1 cursor-pointer '>Rippl</li>
          <li style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-3xl pb-2 mt-6 border-b-1 cursor-pointer '>Newor Media</li>
          <li style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-3xl pb-2 mt-6 border-b-1 cursor-pointer '>Metal Coat</li>
          <li style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-3xl pb-2 mt-6 border-b-1 cursor-pointer '>Crisol</li>
          <li style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-3xl pb-2 mt-6 border-b-1 cursor-pointer '>Vertrag</li>
          <li style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-3xl pb-2 mt-6 border-b-1 '>Coming of Age</li>
        </ul>
      </div>
  )
}

export default SelectedWork