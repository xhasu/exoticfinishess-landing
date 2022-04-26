import React, { useEffect ,useContext } from 'react'
import { UIContext } from "contexts/uicontext";
import { PlusIcon } from "components/ui/icons"

import { gsap } from 'gsap/dist/gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const Header = () => {

  const { showAbout, setShowAbout } = useContext(UIContext);

  useEffect(() => {

    ScrollTrigger.create({
      trigger: 'html',
      start: 'top top',
      end: 'bottom top',
      toggleClass: {
        targets: '.icon-plus',
        className: 'icon-plus-float',
      },
      // markers: true,
    })

  }, [])

  const scrollTo = (section) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: section
      }
    });
  }

  return (
    <header className="sticky top-0 bg-primary z-50" id="header">
      <div className="relative mx-auto max-w-7xl flex px-4 py-2">
        <div className="flex-1 flex items-center gap-2">
          <div className="text-2xl leading-none font-normal cursor-pointer" onClick={() => scrollTo('#intro')}>
            <img src="/images/icons/icon-waves-black.png" alt="Exoticfinishess Waves" width="43" height="26" className="inline mr-2" />
            Exotic Finishess
          </div>
        </div>
        <div className="flex-none" onClick={() => setShowAbout(!showAbout)}>
          <div className="absolute top-0 right-4 w-12 h-12 cursor-pointer icon-plus transition-transform duration-500">
            <PlusIcon />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header