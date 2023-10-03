import React, { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as SiteHyphen } from '../assets/sitehyphenlg.svg'
import { ReactComponent as SiteHyphen2 } from '../assets/sitehyphenlg2.svg'
import { gsap } from 'gsap'
import userEvent from '@testing-library/user-event'

function SelectedWork({ modeToggle, pColor, handleNavigation }) {
    const workRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const hasAnimated = useRef(false); // Ref to track if animation has been played
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.5,
        }
      );
  
      if (workRef.current) {
        observer.observe(workRef.current);
      }
  
      return () => {
        if (workRef.current) {
          observer.unobserve(workRef.current);
        }
      };
    }, []);
  
    useEffect(() => {
      if (isInView && !hasAnimated.current) { // Check if has not animated
        const elements = workRef.current.children;
        gsap.set(elements, { x: '100%', autoAlpha: 0 });
  
        gsap.to(elements, {
          x: '0%',
          autoAlpha: 1,
          stagger: 0.3,
          duration: 0.6,
          ease: 'power2.out',
          overwrite: 'auto',
        });
  
        hasAnimated.current = true; // Set to true after animating
      }
    }, [isInView]);

  return (
    <div className="mt-40 lg:mt-64">
      <div className="flex justify-between">
        <h2 className="font-aktiv font-bold text-lg sm:text-2xl">Selected Work</h2>
        {modeToggle ? <SiteHyphen2 className="ml-3 mt-3 h-2 sm:h-3" /> : <SiteHyphen className="ml-3 mt-3 h-2 sm:h-3" />}
      </div>
      <ul className='font-higuen text-3xl sm:text-5xl' ref={workRef}>
        <li
          onClick={() => handleNavigation('/revradar')}
          style={{
            borderBottom: `1px solid ${pColor}`,
            opacity: 0
          }}
          className=" pb-2 mt-16 border-b-1 cursor-pointer "
        >
          RevRadar WIP
        </li>
        <li
          onClick={() => handleNavigation('/rippl')}
          style={{
            borderBottom: `1px solid ${pColor}`,
            opacity: 0
          }}
          className=" pb-2 mt-6 border-b-1 cursor-pointer "
        >
          Rippl
        </li>
        <li
          onClick={() => handleNavigation('/newor')}
          style={{
            borderBottom: `1px solid ${pColor}`,
            opacity: 0
          }}
          className="pb-2 mt-6 border-b-1 cursor-pointer "
        >
          Newor Media
        </li>
        <li
          onClick={() => handleNavigation('/metalcoat')}
          style={{
            borderBottom: `1px solid ${pColor}`,
            opacity: 0
          }}
          className="pb-2 mt-6 border-b-1 cursor-pointer "
        >
          Metal Coat
        </li>
        <li
          onClick={() => handleNavigation('/crisol')}
          style={{
            borderBottom: `1px solid ${pColor}`,
            opacity: 0
          }}
          className="pb-2 mt-6 border-b-1 cursor-pointer "
        >
          Crisol
        </li>
        <li
          onClick={() => handleNavigation('/vertrag')}
          style={{
            borderBottom: `1px solid ${pColor}`,
            opacity: 0
          }}
          className="pb-2 mt-6 border-b-1 cursor-pointer "
        >
          Vertrag
        </li>
        <li
          onClick={() => handleNavigation('/comingofage')}
          style={{
            borderBottom: `1px solid ${pColor}`,
            opacity: 0
          }}
          className="pb-2 mt-6 border-b-1 cursor-pointer "
        >
          Coming of Age
        </li>
      </ul>
    </div>
  )
}

export default SelectedWork
