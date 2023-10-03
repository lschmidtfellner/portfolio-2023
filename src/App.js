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
import RevRadar from './pages/RevRadar';
import BreakpointIndicator from './components/BreakpointIndicator';

import { Route, Routes, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

function App() {

  const [modeToggle, setModeToggle] = useState(false);
  const [pColor, setPColor] = useState('#101457');

  useEffect(() => {
    if (modeToggle) {
      setPColor('#F7B69F');
    } else {
      setPColor('#101457');
    }
  }, [modeToggle]);

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
      <Bg modeToggle={modeToggle}/>
      <Nav modeToggle={modeToggle} setModeToggle={setModeToggle} handleNavigation={handleNavigation}  pColor={pColor} />
      <Routes>
        <Route path="/" element={<Landing modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation} />}></Route>
        <Route path="/rippl" element={<Rippl modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation} />}></Route>
        <Route path="/newor" element={<Newor modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation}/>}></Route>
        <Route path="/crisol" element={<Crisol modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation}/>}></Route>
        <Route path="/vertrag" element={<Vertrag modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation}/>}></Route>
        <Route path="/comingofage" element={<ComingOfAge modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation}/>}></Route>
        <Route path="/metalcoat" element={<MetalCoat modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation}/>}></Route>
        <Route path="/metalcoat" element={<MetalCoat modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation}/>}></Route>
        <Route path="/revradar" element={<RevRadar modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation}/>}></Route>
      </Routes>
      <BreakpointIndicator/>
    </div>
  )
}

export default App
