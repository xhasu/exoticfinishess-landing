import React, { useEffect } from 'react'

import { gsap } from 'gsap/dist/gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const NavigationSection = () => {

  useEffect(() => {

    const NavTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.nav-section',
        start: 'top 25%',
        toggleActions: 'play none none reverse',
      }
    })

    NavTimeline.from('.nav-section nav li', { opacity: 0, stagger: 0.2} )

    gsap.to('header', {
      scrollTrigger: {
        trigger: '.nav-section',
        start: 'top top',
        toggleClass: {
          targets: 'header',
          className: 'header-dark',
        },
        // markers: true,
      }
    })

  }, [])

  const scrollTo = (section) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: section,
        offsetY: 50,
      }
    });
  }

  return (
    <div className="bg-black">
      <div className="min-h-[640px] max-h-[960px] flex place-items-center nav-section">
        <div className="max-w-xs mx-auto">
          <nav className="text-4xl md:text-6xl text-center text-white uppercase font-black">
            <ul>
              <li className="cursor-pointer mb-4" onClick={() => scrollTo('#intro')}>
                <h3>Home</h3>
              </li>
              <li className="cursor-pointer mb-4" onClick={() => scrollTo('#services')}>
                <h3>Services</h3>
              </li>
              <li className="cursor-pointer mb-4">
                <h3>About</h3>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavigationSection