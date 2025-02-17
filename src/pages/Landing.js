import React, { useRef, useEffect } from 'react'
import { ReactComponent as SiteScroll } from '../assets/sitescroll.svg'
import { ReactComponent as SiteScroll2 } from '../assets/sitescroll2.svg'
import { ReactComponent as SiteDownArrow } from '../assets/sitedownarrow.svg'
import { ReactComponent as SiteDownArrow2 } from '../assets/sitedownarrow2.svg'
import { ReactComponent as SiteHyphenLg } from '../assets/sitehyphenlg.svg'
import { ReactComponent as SiteHyphenLg2 } from '../assets/sitehyphenlg2.svg'
import SelectedWork from '../components/SelectedWork'
import Contact from '../components/Contact'
import { gsap } from 'gsap'

function Landing({ modeToggle, pColor, handleNavigation }) {
  const landingRef = useRef(null)
  const headerRef = useRef(null)
  const hyphenRef = useRef(null)

  useEffect(() => {
    const textElements = headerRef.current.querySelectorAll('.reveal-letter')
    const hyphenElement = hyphenRef.current
    const landingElement = landingRef.current

    // Set initial positions
    gsap.set(textElements, { y: "30%", opacity: 0 }) // Reduced travel distance
    gsap.set(hyphenElement, { x: "-60%", opacity: 0 }) // Move hyphen off-screen left
    gsap.set(landingElement, { opacity: 0, y: 20 }) // Initially hidden

    // Animate text letters with overlapping fade-in
    gsap.to(textElements, {
      y: "0%",
      opacity: 1,
      duration: 0.8, // Slightly longer fade for smoother effect
      stagger: 0.08, // Each letter starts mid-way through the previous one
      ease: 'power2.out' // Softer easing
    });

    // Animate hyphen (fade in + slide from left)
    gsap.to(hyphenElement, {
      x: "0%",
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
      delay: 1.8 // Ensures hyphen animates after "Schmidt"
    });

    // Animate landing section (fades in after the hyphen)
    gsap.to(landingElement, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 2.5 // Delays after hyphen animation
    });
  }, [])

  return (
    <div
      style={{ color: pColor }}
      className="mx-6 pt-10 sm:pt-20 sm:px-20 md:px-32 lg:px-48 xl:px-64 2xl:px-80"
    >
      <div>
        <div
          ref={headerRef}
          className="text-7xl sm:text-[5.6rem] lg:text-[7rem] xl:text-[9rem] text-center overflow-hidden"
        >
          {/* Animated Name */}
          <h1 className="font-higuen">
            {[..."Luke"].map((letter, i) => (
              <span key={i} className="reveal-letter inline-block overflow-hidden">
                <span className="inline-block">{letter}</span>
              </span>
            ))}
          </h1>
          <h1 className="font-higuen -mt-2 sm:-mt-6">
            {[..."Schmidt"].map((letter, i) => (
              <span key={i} className="reveal-letter inline-block overflow-hidden">
                <span className="inline-block">{letter}</span>
              </span>
            ))}
          </h1>

          {/* Flex container to center-align the hyphen properly */}
          <div className="flex justify-center items-center">
            {/* Animated SVG (Hyphen - fade in from left) */}
            <div ref={hyphenRef} className="overflow-hidden inline-block pb-6 sm:pb-12 lg:pb-16 xl:pb-20">
              {modeToggle ? (
                <SiteHyphenLg2 className="w-16 sm:w-[7rem] lg:w-36 mb-2 mr-4 lg:mr-8" />
              ) : (
                <SiteHyphenLg className="w-16 sm:w-[7rem] lg:w-36 mb-2 mr-4 lg:mr-8" />
              )}
            </div>

            {/* Animated Last Name */}
            <h1 className="font-higuen -mt-2 sm:-mt-6">
              {[..."Fellner"].map((letter, i) => (
                <span key={i} className="reveal-letter inline-block overflow-hidden">
                  <span className="inline-block">{letter}</span>
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
      <div 
        ref={landingRef}
        style={{ opacity: 0 }}
        className="flex text-left justify-between font-aktiv pt-8 lg:pt-2 z-4 text-lg sm:text-2xl"
      >
        <div className='w-full'>
          <div className="flex justify-between md:justify-around">
            <div className="flex flex-col">
              <div className="flex flex-col font-bold">
                <h2>Graphic Designer</h2>
                <h2>& UI Developer</h2>
              </div>
              <p className="pt-8 text-xs sm:text-sm text-left font-aktiv w-52 sm:w-80 ">
                I’m a Brooklyn-based software engineer and interdisciplinary designer specializing in visual identities and user interfaces. <br />
                I've worked with some of the biggest names in esports and content creation, and have also run a successful independent ecommerce business.
              </p>
            </div>
            <div className="flex flex-col mr-6 items-center justify-center">
              {modeToggle ? (
                <SiteScroll2 className="w-24 2xl:w-28 animate-slowspin site-scroll" />
              ) : (
                <SiteScroll className="w-24 2xl:w-28 animate-slowspin site-scroll" />
              )}
              <div>
                {modeToggle ? (
                  <SiteDownArrow2 className="animate-updown w-8 sm:w-9 2xl:w-10 mt-4" />
                ) : (
                  <SiteDownArrow className="animate-updown w-8 sm:w-9 2xl:w-10 mt-4" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SelectedWork
        pColor={pColor}
        handleNavigation={handleNavigation}
        modeToggle={modeToggle}
      />
      <Contact modeToggle={modeToggle} pColor={pColor} />
    </div>
  )
}

export default Landing
