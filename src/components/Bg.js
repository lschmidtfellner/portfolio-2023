import React, { useState, useEffect } from 'react'

function Bg() {
  const [hues, setHues] = useState([25, 28, 189, 355, 340, 191])

  useEffect(() => {
    const interval = setInterval(() => {
      setHues((prevHues) => prevHues.map((hue) => (hue + 1) % 360))
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      id="gradientContainer"
      style={{
        position: 'fixed',
        width: '120vw',
        height: '100vh',
        backgroundColor: `hsla(${hues[0]},100%,89%,1)`,
        backgroundImage: `radial-gradient(at 41% 50%, hsla(${hues[1]},100%,77%,1) 0px, transparent 50%),
radial-gradient(at 29% 33%, hsla(${hues[2]},100%,80%,1) 0px, transparent 50%),
radial-gradient(at 32% 74%, hsla(${hues[3]},100%,80%,1) 0px, transparent 50%),
radial-gradient(at 77% 40%, hsla(${hues[4]},100%,80%,1) 0px, transparent 50%),
radial-gradient(at 65% 69%, hsla(${hues[5]},57%,80%,1) 0px, transparent 50%)`
      }}
    />
  )
}

export default Bg
