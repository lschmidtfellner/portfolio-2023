import React from 'react'

function SelectedWork({pColor}) {
  return (
    <div className='mt-32'>
        <h2 className='font-aktiv font-bold text-lg'>Selected Work</h2>
        <ul>
          <li style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-2xl pb-2 mt-16 border-b-1 '>RevRadar</li>
          <li style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-2xl pb-2 mt-6 border-b-1 '>Rippl</li>
          <li style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-2xl pb-2 mt-6 border-b-1 '>Newor Media</li>
          <li style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-2xl pb-2 mt-6 border-b-1 '>Metal Coat</li>
          <li style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-2xl pb-2 mt-6 border-b-1 '>Crisol</li>
          <li style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-2xl pb-2 mt-6 border-b-1 '>Vertrag</li>
          <li style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-2xl pb-2 mt-6 border-b-1 '>Coming of Age</li>
        </ul>
      </div>
  )
}

export default SelectedWork