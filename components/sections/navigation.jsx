import React, { useEffect } from 'react'

import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const NavigationSection = () => {

  useEffect(() => {

    const NavTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.nav-section',
        // start: 'top center',
        end: 'bottom center',
        pin: true,
        scrub: true,
        // markers: true,
      }
    })

    NavTimeline.from('.nav-section nav li', { opacity: 0, stagger: 1} )

  }, [])

  return (
    <div className="bg-black">
      <div className="h-screen min-h-[420px] max-h-[960px] flex place-items-center nav-section">
        <div className="max-w-xs mx-auto">
          <nav className="text-6xl text-center text-white uppercase font-black">
            <ul>
              <li className="cursor-pointer">
                <h3>Home</h3>
              </li>
              <li className="cursor-pointer">
                <h3>Services</h3>
              </li>
              <li className="cursor-pointer">
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