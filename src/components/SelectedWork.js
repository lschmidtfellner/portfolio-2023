import React from 'react'
import { useNavigate } from 'react-router-dom'

function SelectedWork({pColor}) {
  const navigate = useNavigate()

  return (
    <div className='mt-40'>
        <h2 className='font-aktiv font-bold text-lg'>Selected Work</h2>
        <ul>
          <li onClick={() => navigate('/revradar')} style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-3xl pb-2 mt-16 border-b-1 cursor-pointer '>RevRadar</li>
          <li onClick={() => navigate('/rippl')} style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-3xl pb-2 mt-6 border-b-1 cursor-pointer '>Rippl</li>
          <li onClick={() => navigate('/newor')} style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-3xl pb-2 mt-6 border-b-1 cursor-pointer '>Newor Media</li>
          <li onClick={() => navigate('/metalcoat')} style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-3xl pb-2 mt-6 border-b-1 cursor-pointer '>Metal Coat</li>
          <li onClick={() => navigate('/crisol')} style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-3xl pb-2 mt-6 border-b-1 cursor-pointer '>Crisol</li>
          <li onClick={() => navigate('/vertrag')} style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-3xl pb-2 mt-6 border-b-1 cursor-pointer '>Vertrag</li>
          <li onClick={() => navigate('/comingofage')} style={{
      borderBottom: `1px solid ${pColor}`
      }} className='font-higuen text-3xl pb-2 mt-6 border-b-1 '>Coming of Age</li>
        </ul>
      </div>
  )
}

export default SelectedWork