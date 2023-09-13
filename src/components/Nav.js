import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SiteLogo } from '../assets/sitelogo.svg'; // Notice the special import syntax

function Nav({ isMenuOpen, setIsMenuOpen, pColor }) {
  const navigate = useNavigate();

  function menuToggle() {
    setIsMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    if (isMenuOpen) {
      // Do something if the menu is open
    } else {
      // Do something else if the menu is closed
    }
  }, [isMenuOpen]);

  return (
    <div>
      <div className="nav-div fixed z-0 h-10 top-0 left-0 right-0 mx-6 my-8" style={{
      borderBottom: `1px solid ${pColor}`
      }}>
        <SiteLogo 
          onClick={() => {
            navigate('/');
            if (isMenuOpen === true) {
              menuToggle();
            }
          }}
          className="h-5 cursor-pointer"
          fill={pColor} 
        />
      </div>
    </div>
  );
}

export default Nav;
