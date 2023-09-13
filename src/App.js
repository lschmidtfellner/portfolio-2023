import './App.css'
import Bg from './components/Bg'
import Nav from './components/Nav'
import Landing from './pages/Landing'

import { Route, Routes, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pColor = '#ffffff'

  return (
    <div className="App">
      <Bg />
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} pColor={pColor} />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </div>
  )
}

export default App
