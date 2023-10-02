import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bg from './components/Bg'
import Nav from './components/Nav'
import Landing from './pages/Landing'
import Rippl from './pages/Rippl'
import Newor from './pages/Newor'
import Crisol from './pages/Crisol'
import Vertrag from './pages/Vertrag'
import ComingOfAge from './pages/ComingOfAge'
import MetalCoat from './pages/MetalCoat'

import { Route, Routes, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pColor = '#101457'
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    return new Promise((resolve) => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      setTimeout(() => {
        resolve();
      }, 500);
    }).then(() => {
      navigate(path);
    });
  };

  return (
    <div className="App" style={{ position: 'relative', zIndex: 1 }}>
      <Bg />
      <Nav handleNavigation={handleNavigation} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} pColor={pColor} />
      <Routes>
        <Route path="/" element={<Landing pColor={pColor} handleNavigation={handleNavigation} />}></Route>
        <Route path="/rippl" element={<Rippl pColor={pColor} handleNavigation={handleNavigation} />}></Route>
        <Route path="/newor" element={<Newor pColor={pColor} handleNavigation={handleNavigation}/>}></Route>
        <Route path="/crisol" element={<Crisol pColor={pColor} handleNavigation={handleNavigation}/>}></Route>
        <Route path="/vertrag" element={<Vertrag pColor={pColor} handleNavigation={handleNavigation}/>}></Route>
        <Route path="/comingofage" element={<ComingOfAge pColor={pColor} handleNavigation={handleNavigation}/>}></Route>
        <Route path="/metalcoat" element={<MetalCoat pColor={pColor} handleNavigation={handleNavigation}/>}></Route>
      </Routes>
    </div>
  )
}

export default App
