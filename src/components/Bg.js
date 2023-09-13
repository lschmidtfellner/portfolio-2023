import React, { useState, useEffect } from 'react'

function Bg() {
  const [hues, setHues] = useState([25, 28, 189, 355, 340, 191])

  useEffect(() => {
    const interval = setInterval(() => {
      setHues((prevHues) => prevHues.map((hue) => (hue + 1) % 360))
    }, 25)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      id="gradientContainer"
      className='h-full w-[500px] sm:w-full'
      style={{
        position: 'fixed',
        backgroundColor: `hsla(${hues[0]},100%,89%,1)`,
        backgroundImage: `radial-gradient(at 41% 50%, hsla(${hues[1]},100%,77%,1) 0px, transparent 50%),
radial-gradient(at 29% 33%, hsla(${hues[2]},100%,80%,1) 0px, transparent 50%),
radial-gradient(at 32% 74%, hsla(${hues[3]},100%,80%,1) 0px, transparent 50%),
radial-gradient(at 77% 40%, hsla(${hues[4]},100%,80%,1) 0px, transparent 50%),
radial-gradient(at 65% 69%, hsla(${hues[5]},100%,80%,1) 0px, transparent 50%)`
      }}
    />
  )
}

export default Bg



// ****LIMITED PALETTE***

//import React, { useState, useEffect } from 'react'
// function Bg() {
//   const [hues, setHues] = useState([0, 28, 50, 75, 42, 30])
//   const [directions, setDirections] = useState(new Array(6).fill(true));  // true for increasing, false for decreasing

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setHues(prevHues => {
//         return prevHues.map((hue, index) => {
//           if (directions[index] && hue < 80) {
//             return hue + 1;
//           } else if (!directions[index] && hue > 0) {
//             return hue - 1;
//           } else if (hue === 80) {
//             setDirections(prev => {
//               const newDirections = [...prev];
//               newDirections[index] = false;
//               return newDirections;
//             });
//             return hue - 1;
//           } else if (hue === 0) {
//             setDirections(prev => {
//               const newDirections = [...prev];
//               newDirections[index] = true;
//               return newDirections;
//             });
//             return hue + 1;
//           } else {
//             return hue;
//           }
//         });
//       });
//     }, 25);

//     return () => clearInterval(interval);
//   }, [directions]);

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
