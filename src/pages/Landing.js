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
  const workRef = useRef(null)

  useEffect(() => {
    const elements = headerRef.current.children
    gsap.set(elements, { y: 20, autoAlpha: 0 }) // set initial position

    gsap.to(elements, {
      y: 0,
      autoAlpha: 1,
      stagger: 0.2, // delay between each child animation
      duration: 1, // animation duration
      ease: 'easeInOut', // easing function
      overwrite: 'auto'
    })
  }, [])

  useEffect(() => {
    const elements = landingRef.current.children
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If entry (child) is in view
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              y: 0,
              autoAlpha: 1,
              stagger: 0.8, // delay between each child animation
              duration: 1, // animation duration
              ease: 'easeInOut', // easing function
              overwrite: 'auto'
            })
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null, // using viewport as root
        rootMargin: '0px',
        threshold: 0.5 // trigger animation when 50% of the child is visible
      }
    )

    // Setting initial state
    gsap.set(elements, { y: 20, autoAlpha: 0 })

    // Observing each child
    Array.from(elements).forEach((element) => {
      observer.observe(element)
    })

    // Cleanup function to unobserve all elements
    return () => {
      Array.from(elements).forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

  return (
    <div
      style={{ color: pColor }}
      className="mx-6 pt-10 sm:px-20 md:px-32 lg:px-48 xl:px-64 2xl:px-80"
    >
      <div>
        <div
          ref={headerRef}
          className="text-7xl sm:text-[10vh] lg:text-[17vh] text-center"
        >
          <h1 style={{ opacity: 0 }} className="font-higuen">
            Luke
          </h1>
          <h1 style={{ opacity: 0 }} className="font-higuen">
            Schmidt
          </h1>
          <div style={{ opacity: 0 }} className="flex justify-center">
            {modeToggle ? (
              <SiteHyphenLg2 className="w-14 sm:w-32 lg:w-40 mb-2 mr-4" />
            ) : (
              <SiteHyphenLg className="w-14 sm:w-32 lg:w-40 mb-2 mr-4" />
            )}
            <div>
              <h1 className=" font-higuen">Fellner</h1>
            </div>
          </div>
          <div ref={landingRef}
            style={{ opacity: 0 }}
            className="flex text-left justify-between font-aktiv pt-8 lg:pt-4 z-4 text-lg sm:text-2xl"
          >
            <div className='w-full'>
              <div className="flex justify-between md:justify-around">
                <div className="flex flex-col">
                  <div className="flex flex-col font-bold">
                    <h2>Graphic Designer</h2>
                    <h2>& UI Engineer</h2>
                  </div>
                  <p className="pt-8 text-xs sm:text-sm text-left font-aktiv w-40 sm:w-72 ">
                    I’m a Brooklyn-based software engineer and interdisciplinary designer specializing in UI design and development.
                    I've also designed, sourced, and sold over 15,000 garments, and worked with some of the biggest names
                    in esports and content creation.
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
        </div>
      </div>
      <SelectedWork
        ref={workRef}
        pColor={pColor}
        handleNavigation={handleNavigation}
        modeToggle={modeToggle}
      ></SelectedWork>
      <Contact modeToggle={modeToggle} pColor={pColor}></Contact>
    </div>
  )
}

export default Landing
