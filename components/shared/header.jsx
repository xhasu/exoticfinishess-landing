import React, { useContext } from 'react'
import { UIContext } from "contexts/uicontext";
import { PlusIcon } from "components/ui/icons"

import { gsap } from 'gsap/dist/gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {

  const { showAbout, setShowAbout } = useContext(UIContext);

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
      <div className="flex px-4 py-2">
        <div className="flex-1 flex items-center gap-2">
          <div className="text-2xl leading-none font-normal cursor-pointer" onClick={() => scrollTo('#intro')}>
            <img src="/images/icons/icon-waves-black.png" alt="Exoticfinishess Waves" width="43" height="26" className="inline mr-2" />
            Exotic Finishess
          </div>
        </div>
        <div className="flex-none" onClick={() => setShowAbout(!showAbout)}>
          <div className="w-9 h-9 cursor-pointer">
            <PlusIcon />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header