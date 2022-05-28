import React, { useEffect, useContext } from 'react'
import { UIContext } from "contexts/uicontext";

import { gsap } from 'gsap/dist/gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const NavigationSection = () => {

  const { showAbout, setShowAbout, showMenu, setShowMenu } = useContext(UIContext);

  const scrollTo = (section) => {

    setShowMenu(!showMenu);

    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: section,
        offsetY: 50,
      }
    });
  }

  const handleShowAbout = () => {
    setShowAbout(!showAbout);
    setShowMenu(!showMenu);
  }

  return (
    <div className="bg-black fixed inset-0 z-40">
      <div className="h-screen flex place-items-center nav-section">
        <div className="max-w-sm mx-auto">
          <nav className="text-4xl md:text-7xl text-center text-white uppercase font-black">
            <ul>
              <li className="cursor-pointer mb-4 font-acuminpro" onClick={() => scrollTo('#intro')}>
                <h3>Home</h3>
              </li>
              <li className="cursor-pointer mb-4 font-acuminpro" onClick={() => scrollTo('#services')}>
                <h3>Services</h3>
              </li>
              <li className="cursor-pointer mb-4 font-acuminpro" onClick={handleShowAbout}>
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