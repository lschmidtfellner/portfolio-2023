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
  const arrowRef = useRef(null)
  const arrowRef2 = useRef(null)

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

  useEffect(() => {
    gsap.to(arrowRef.current, {
      y: '10%', // Moves the arrow by 10% of its height
      duration: 1, // Animation duration is 1 second
      yoyo: true, // Makes the animation alternate back and forth
      repeat: -1, // Repeats the animation indefinitely
      ease: 'power1.inOut' // Easing function for smooth animation
    })
  }, [])

  return (
    <div
      style={{ color: pColor }}
      className="mx-6 pt-16 sm:px-20 md:px-32 lg:px-48 xl:px-64 2xl:px-80"
    >
      <div>
        <div
          ref={headerRef}
          className="text-6xl sm:text-[85pt] lg:text-[115pt] text-center"
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
            <div ref={landingRef}>
              <h1 className=" font-higuen">Fellner</h1>
            </div>
          </div>
          <div
            style={{ opacity: 0 }}
            className="flex justify-around text-right lg:text-left font-aktiv w-full pt-8 lg:pt-4 z-4 text-lg sm:text-2xl"
          >
            <div>
              <div className="flex flex-col font-bold">
                <h2>Graphic Designer</h2>
                <h2>& UI Engineer</h2>
              </div>
              <p className="hidden lg:block pt-8 text-sm text-left font-aktiv w-72 ">
                I’m a Brooklyn-based designer, software engineer, artist, and
                musician who recently graduated from General Assembly’s
                fullstack software engineering fellowship.
              </p>
            </div>
            <div className="hidden lg:flex flex-col mr-6 items-center justify-center">
              {modeToggle ? (
                <SiteScroll2 className="w-20 sm:w-24 animate-slowspin site-scroll" />
              ) : (
                <SiteScroll className="w-20 sm:w-24 animate-slowspin site-scroll" />
              )}
              <div ref={arrowRef2}>
                {modeToggle ? (
                  <SiteDownArrow2 className="animate-updown w-8 sm:w-10 mt-4" />
                ) : (
                  <SiteDownArrow className="animate-updown w-8 sm:w-10 mt-4" />
                )}
              </div>
            </div>
          </div>
          <div style={{ opacity: 0 }} className="flex mt-12 justify-between">
            <p className="lg:hidden text-xs sm:text-sm text-left font-aktiv w-40 sm:w-72 ">
              I’m a Brooklyn-based designer, software engineer, artist, and
              musician who recently graduated from General Assembly’s fullstack
              software engineering fellowship.
            </p>
            <div className="flex lg:hidden flex-col mr-6 items-center justify-center">
              {modeToggle ? (
                <SiteScroll2 className="w-20 sm:w-24 animate-slowspin site-scroll" />
              ) : (
                <SiteScroll className="w-20 sm:w-24 animate-slowspin site-scroll" />
              )}
              <div ref={arrowRef}>
              {modeToggle ? (
                <SiteDownArrow2 className="animate-updown w-8 sm:w-10 mt-4" />
              ) : (
                <SiteDownArrow className="animate-updown w-8 sm:w-10 mt-4" />
              )}
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
