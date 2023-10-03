import React, { useState, useEffect, useRef } from 'react'
import { ReactComponent as SiteHyphenLg } from '../assets/sitehyphenlg.svg'
import { ReactComponent as SiteHyphenLg2 } from '../assets/sitehyphenlg2.svg'
import { gsap } from 'gsap'

function Contact({ modeToggle, pColor }) {
  const contactRef = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const hasAnimated = useRef(false) // Ref to track if animation has been played

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
    )

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      // Check if has not animated
      const elements = contactRef.current.children
      gsap.set(elements, { y: '-30%', autoAlpha: 0 })

      gsap.to(elements, {
        y: '0%',
        autoAlpha: 1,
        stagger: 0.4,
        duration: 1,
        ease: 'power2.out',
        overwrite: 'auto'
      })

      hasAnimated.current = true // Set to true after animating
    }
  }, [isInView])

  return (
    <div className="mt-40 sm:mt-60 mb-20">
      <div className="flex justify-between">
        <h2 className="font-aktiv font-bold text-lg">Get in Touch</h2>
        {modeToggle ? <SiteHyphenLg2 className="ml-3 mt-3 h-2 sm:h-3" /> : <SiteHyphenLg className="ml-3 mt-3 h-2 sm:h-3" />}
      </div>
      <div
        ref={contactRef}
        className="flex flex-col mt-16 sm:mt-24 items-center font-higuen text-3xl sm:text-5xl"
      >
        <div style={{opacity: 0}} className="flex">
          {modeToggle ? <SiteHyphenLg2
            className="h-3 mt-3 mr-4"
          /> : <SiteHyphenLg
          className="h-3 mt-3 mr-4"
        />}
          <a href="mailto:lschmidtfellner@gmail.com">
            <h2 className=" pb-2 cursor-pointer">Email</h2>
          </a>
          {modeToggle ? <SiteHyphenLg2
            className="h-3 mt-3 ml-4"
          /> : <SiteHyphenLg
          className="h-3 mt-3 ml-4"
        />}
        </div>
        <div style={{opacity: 0}} className="flex mt-3 sm:mt-8">
        {modeToggle ? <SiteHyphenLg2
            className="h-3 mt-3 mr-4"
          /> : <SiteHyphenLg
          className="h-3 mt-3 mr-4"
        />}
          <a href="https://linkedin.com/in/lsfdesign/">
            <h2 className=" pb-2 cursor-pointer">
              Linkedin
            </h2>
          </a>
          {modeToggle ? <SiteHyphenLg2
            className="h-3 mt-3 ml-4"
          /> : <SiteHyphenLg
          className="h-3 mt-3 ml-4"
        />}
        </div>
        <div className="flex mt-3 sm:mt-8">
        {modeToggle ? <SiteHyphenLg2
            className="h-3 mt-3 mr-4"
          /> : <SiteHyphenLg
          className="h-3 mt-3 mr-4"
        />}
          <a href="https://www.github.com/lschmidtfellner/">
            <h2 className=" pb-2 cursor-pointer">Github</h2>
          </a>
          {modeToggle ? <SiteHyphenLg2
            className="h-3 mt-3 ml-4"
          /> : <SiteHyphenLg
          className="h-3 mt-3 ml-4"
        />}
        </div>
      </div>
    </div>
  )
}

export default Contact
