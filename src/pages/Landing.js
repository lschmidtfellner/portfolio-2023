import React, { useRef, useEffect } from 'react'
import { ReactComponent as SiteScroll } from '../assets/sitescroll.svg'
import { ReactComponent as SiteDownArrow } from '../assets/sitedownarrow.svg'
import { ReactComponent as SiteHyphenLg } from '../assets/sitehyphenlg.svg'
import SelectedWork from '../components/SelectedWork'
import Contact from '../components/Contact'
import { gsap } from 'gsap'

function Landing({ pColor, handleNavigation }) {
  const landingRef = useRef(null)
  const headerRef = useRef(null)
  const workRef = useRef(null)
  const arrowRef = useRef(null)

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
      ease: 'power1.inOut', // Easing function for smooth animation
    });
  }, []);

  return (
    <div style={{ color: pColor }} className="mx-6 pt-16">
      <div>
        <div ref={headerRef} className="text-6xl text-center">
          <h1 className="font-higuen">Luke</h1>
          <h1 className="font-higuen">Schmidt</h1>
          <div className="flex justify-center">
            <SiteHyphenLg
              style={{ borderColor: pColor }}
              className="h-3 mt-5 mr-4"
            />
            <div ref={landingRef}>
              <h1 className=" font-higuen">Fellner</h1>
            </div>
          </div>
          <div className=" text-right font-bold font-aktiv w-full pt-8 z-4 text-lg">
            <h2>Graphic Designer</h2>
            <h2>& UI Engineer</h2>
          </div>
          <div className="flex mt-12 justify-between">
            <p className="text-xs font-aktiv w-40 ">
              I’m a Brooklyn-based designer, software engineer, artist, and
              musician who recently graduated from General Assembly’s fullstack
              software engineering fellowship.
            </p>
            <div className="flex flex-col mr-6 items-center justify-center">
              <SiteScroll
                style={{ color: pColor }}
                className="w-20 animate-slowspin site-scroll"
              />
              <SiteDownArrow ref={arrowRef} style={{ color: pColor }} className="w-8 mt-4" />
            </div>
          </div>
        </div>
      </div>
      <SelectedWork
        ref={workRef}
        pColor={pColor}
        handleNavigation={handleNavigation}
      ></SelectedWork>
      <Contact pColor={pColor}></Contact>
    </div>
  )
}

export default Landing
