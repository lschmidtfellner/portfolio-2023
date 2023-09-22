import './App.css'
import Bg from './components/Bg'
import Nav from './components/Nav'
import Landing from './pages/Landing'
import Rippl from './pages/Rippl'

import { Route, Routes, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pColor = '#101457'

  return (
    <div className="App" style={{ position: 'relative', zIndex: 1 }}>
      <Bg />
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} pColor={pColor} />
      <Routes>
        <Route path="/" element={<Landing pColor={pColor} />}></Route>
        <Route path="/rippl" element={<Rippl pColor={pColor} />}></Route>
      </Routes>
    </div>
  )
}

export default App
