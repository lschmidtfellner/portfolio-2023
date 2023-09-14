// import React, { useState, useEffect } from 'react'

// function Bg() {
//   const [hues, setHues] = useState([25, 28, 189, 355, 340, 191])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setHues((prevHues) => prevHues.map((hue) => (hue + 1) % 360))
//     }, 25)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div
//       id="gradientContainer"
//       className='h-full w-[500px] sm:w-full'
//       style={{
//         position: 'fixed',
//         backgroundColor: `hsla(${hues[0]},100%,89%,1)`,
//         backgroundImage: `radial-gradient(at 41% 50%, hsla(${hues[1]},100%,77%,1) 0px, transparent 50%),
// radial-gradient(at 29% 33%, hsla(${hues[2]},100%,80%,1) 0px, transparent 50%),
// radial-gradient(at 32% 74%, hsla(${hues[3]},100%,80%,1) 0px, transparent 50%),
// radial-gradient(at 77% 40%, hsla(${hues[4]},100%,80%,1) 0px, transparent 50%),
// radial-gradient(at 65% 69%, hsla(${hues[5]},100%,80%,1) 0px, transparent 50%)`
//       }}
//     />
//   )
// }

// export default Bg

// ****LIMITED PALETTE***

import React, { useState, useEffect } from 'react'
import noiseTexture from '../assets/noiseTexture.png'

function Bg() {
  const [hues, setHues] = useState([
    0, 28, 50, 75, 42, 30, 10, 18, 35, 55, 63, 70
  ])
  const [directions, setDirections] = useState(new Array(12).fill(true))

  useEffect(() => {
    const interval = setInterval(() => {
      setHues((prevHues) => {
        return prevHues.map((hue, index) => {
          if (directions[index] && hue < 80) {
            return hue + 1
          } else if (!directions[index] && hue > 0) {
            return hue - 1
          } else if (hue === 80) {
            setDirections((prev) => {
              const newDirections = [...prev]
              newDirections[index] = false
              return newDirections
            })
            return hue - 1
          } else if (hue === 0) {
            setDirections((prev) => {
              const newDirections = [...prev]
              newDirections[index] = true
              return newDirections
            })
            return hue + 1
          } else {
            return hue
          }
        })
      })
    }, 25)

    return () => clearInterval(interval)
  }, [directions])

  return (
    <div style={{ position: 'relative' }}>
      <div
        id="gradientContainer"
        className="h-full w-full"
        style={{
          position: 'fixed',
          backgroundColor: `hsla(${hues[0]},100%,89%,1)`,
          backgroundImage: `radial-gradient(at 41% 50%, hsla(${hues[1]},100%,77%,1) 0px, transparent 50%),
radial-gradient(at 29% 33%, hsla(${hues[2]},100%,80%,1) 0px, transparent 50%),
radial-gradient(at 32% 74%, hsla(${hues[3]},100%,80%,1) 0px, transparent 50%),
radial-gradient(at 77% 40%, hsla(${hues[4]},100%,80%,1) 0px, transparent 50%),
radial-gradient(at 65% 69%, hsla(${hues[5]},100%,80%,1) 0px, transparent 50%),
radial-gradient(at 50% 25%, hsla(${hues[6]},100%,80%,1) 0px, transparent 50%),
radial-gradient(at 90% 72%, hsla(${hues[7]},100%,80%,1) 0px, transparent 50%),
radial-gradient(at 20% 90%, hsla(${hues[8]},100%,80%,1) 0px, transparent 50%)`
        }}
      />
          <div
      id="overlayImageContainer"
      className="h-full w-full"
      style={{
        position: 'fixed',
        backgroundImage: `url(${noiseTexture})`,
        backgroundBlendMode: 'screen', // or any other blending mode
        backgroundRepeat: 'repeat', // or 'repeat' if you want to tile it
        backgroundSize: '50px 50px' // this ensures the image covers the whole screen
      }}
    />
    </div>
  )
}

export default Bg
