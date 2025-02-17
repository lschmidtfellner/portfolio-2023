import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bg from './components/Bg';
import Landing from './pages/Landing';
import Rippl from './pages/Rippl';
import Newor from './pages/Newor';
import Crisol from './pages/Crisol';
import Vertrag from './pages/Vertrag';
import ComingOfAge from './pages/ComingOfAge';
import MetalCoat from './pages/MetalCoat';
import RevRadar from './pages/RevRadar';
import BreakpointIndicator from './components/BreakpointIndicator';

import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ReactComponent as SiteLogo } from './assets/sitelogo.svg';
import { ReactComponent as SiteLogo2 } from './assets/sitelogo2.svg';
import DarkSwitch from './components/DarkSwitch';

function App() {

  const [modeToggle, setModeToggle] = useState(false);
  const [pColor, setPColor] = useState('#101457');

  useEffect(() => {
    setPColor(modeToggle ? '#F7B69F' : '#101457');
  }, [modeToggle]);

  const navigate = useNavigate();

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
      <Bg modeToggle={modeToggle} />
      <nav
        className="fixed nav-div z-50 h-10 top-3 left-0 right-0 mx-6 sm:mx-20 md:mx-32 lg:mx-48 xl:mx-64 2xl:mx-80 mt-5 mb-4 pb-8 flex justify-between items-center"
        style={{ borderBottom: `1px solid ${pColor}` }}
      >
        {modeToggle ? (
          <SiteLogo2 
            onClick={() => handleNavigation('/')} 
            className="h-4 cursor-pointer" 
          />
        ) : (
          <SiteLogo 
            onClick={() => handleNavigation('/')} 
            className="h-4 cursor-pointer" 
          />
        )}
        <DarkSwitch modeToggle={modeToggle} setModeToggle={setModeToggle} pColor={pColor} />
      </nav>
      <div className="spacer pt-16"/>
      <Routes>
        <Route path="/" element={<Landing modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation} />} />
        <Route path="/rippl" element={<Rippl modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation} />} />
        <Route path="/newor" element={<Newor modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation} />} />
        <Route path="/crisol" element={<Crisol modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation} />} />
        <Route path="/vertrag" element={<Vertrag modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation} />} />
        <Route path="/comingofage" element={<ComingOfAge modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation} />} />
        <Route path="/metalcoat" element={<MetalCoat modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation} />} />
        <Route path="/revradar" element={<RevRadar modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation} />} />
      </Routes>
      {/* <BreakpointIndicator/> */}
    </div>
  );
}

export default App;
