import React, { useEffect } from 'react'
import ScrollDown from "components/ui/scroll"

import { gsap } from 'gsap/dist/gsap'
import { TextPlugin } from 'gsap/dist/TextPlugin'

gsap.registerPlugin(TextPlugin);

const IntroSection = () => {

  useEffect(() => {

    gsap.to('.intro-section h2', { duration: 1, delay: 2, ease: "linear", text: { value: "Hello there!" }})
    gsap.to('.intro-section h1', { duration: 4, delay: 3, ease: "linear", text: { value: "We are exotic finishess", preserveSpaces: true }});

  }, [])

  return (
    <div className="relative bg-primary intro-section h">
      <div className="min-h-screen flex place-items-center">
        <div className="max-w-2xl md:min-w-[672px] mx-auto border-l-2 border-black pl-6">
          <h2 className="text-2xl uppercase leading-none mb-2">&nbsp;</h2>
          <h1 className="text-7xl uppercase font-black">&nbsp;</h1>
        </div>
      </div>
      <ScrollDown />
    </div>
  )
}

export default IntroSection