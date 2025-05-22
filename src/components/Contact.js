import React, { useState, useEffect, useRef } from 'react'
import { ReactComponent as SiteHyphenLg } from '../assets/sitehyphenlg.svg'
import { ReactComponent as SiteHyphenLg2 } from '../assets/sitehyphenlg2.svg'
import { gsap } from 'gsap'

function Contact({ modeToggle, pColor }) {
  const contactRef = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const hasAnimated = useRef(false)

  const Hyphen = modeToggle ? SiteHyphenLg2 : SiteHyphenLg
  const hyphenClass = "h-[8px] sm:h-[12px] translate-y-[-8px]"

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { root: null, rootMargin: '0px', threshold: 0.5 }
    )

    if (contactRef.current) observer.observe(contactRef.current)

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current)
    }
  }, [])

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
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

      hasAnimated.current = true
    }
  }, [isInView])

  return (
    <div className="mt-[160px] sm:mt-[240px] mb-[80px] lg:mb-[160px]">
      <div className="flex justify-between items-center">
        <h2 className="font-aktiv font-bold text-[18px] sm:text-[24px]">Get in Touch</h2>
        <Hyphen className={hyphenClass} />
      </div>

      <div
        ref={contactRef}
        className="flex flex-col mt-[64px] sm:mt-[96px] items-center font-higuen text-[30px] sm:text-[48px]"
      >
        {[
          {
            label: 'Email',
            href: 'mailto:lschmidtfellner@gmail.com'
          },
          {
            label: 'Linkedin',
            href: 'https://linkedin.com/in/lsfdesign/'
          },
          {
            label: 'Github',
            href: 'https://www.github.com/lschmidtfellner/'
          }
        ].map(({ label, href }, i) => (
          <div
            key={label}
            style={{ opacity: 0 }}
            className={`flex items-center ${i > 0 ? 'mt-[12px] sm:mt-[32px]' : ''}`}
          >
            <Hyphen className={`${hyphenClass} mr-[16px]`} />
            <a href={href}>
              <h2 className="pb-[8px] cursor-pointer">{label}</h2>
            </a>
            <Hyphen className={`${hyphenClass} ml-[16px]`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact
