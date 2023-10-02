import React from 'react'

function MCCouple({className, pColor, src1, src2 }) {
  return (
    <div className={`${className} relative max-w-full scale-75`}>
      <img 
        style={{ borderColor: pColor }} 
        src={src1} 
        className=' max-w-full border' 
        alt="First"
      />
      <img 
        style={{ borderColor: pColor, position: 'absolute', top: '-50px', left: '-50px' }} 
        src={src2} 
        className='w-[50%] border' 
        alt="Second"
      />
    </div>
  )
}

export default MCCouple
