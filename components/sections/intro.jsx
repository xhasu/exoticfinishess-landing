import React, { useEffect } from 'react'
import ScrollDown from "components/ui/scroll"

import { gsap } from 'gsap/dist/gsap'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollToPlugin);

const IntroSection = () => {

  useEffect(() => {

    gsap.to('.stage-1 h2', { duration: 1, delay: 1, ease: "linear", text: { value: "Hello there!" }})
    gsap.to('.stage-1 h1', { duration: 2, delay: 2, ease: "linear", text: { value: "We are exotic finishess", preserveSpaces: true }});

  }, [])

  useEffect(() => {

    gsap.to('.stage-1 .st-group-1', {
      scrollTrigger: {
        trigger: '.stage-1',
        start: "center center",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: true,
      },
      opacity: 0,
      y: "-25%",
    });

    gsap.from('.stage-2 .st-group-1 > div > *', {
      scrollTrigger: {
        trigger: '.stage-2',
        start: "center center",
        toggleActions: "play none none reverse",
        pin: true,
        // scrub: true,
        // pinSpacing: false,
        // markers: true,
      },
      stagger: 0.2,
      opacity: 0,
      y: "+=10%",
    });

    gsap.to('.stage-intro .st-intro-left', {
      scrollTrigger: {
        trigger: '.intro-section',
        start: "center bottom",
        end: "bottom bottom",
        scrub: true,
      },
      x: "-=300%",
    });

    gsap.to('.stage-intro .st-intro-right', {
      scrollTrigger: {
        trigger: '.intro-section',
        start: "center bottom",
        end: "bottom bottom",
        scrub: true,
      },
      x: "+=300%",
    });

  }, [])

  return (
    <div className="relative intro-section bg-black" id="intro">

      <div className="relative min-h-screen flex justify-center items-center z-10 stage-1">

        <div className="st-group-1">
          <div className="max-w-2xl md:min-w-[720px] mx-auto md:border-l-2 border-black pl-6">
            <h2 className="text-2xl uppercase leading-none mb-2 min-h-[1em]"></h2>
            <h1 className="text-5xl md:text-7xl uppercase font-acuminpro font-black min-h-[2em]"></h1>
          </div>
        </div>

      </div>

      <div className="relative flex justify-center items-center z-10 stage-2">

        <div className="st-group-1">
          <div className="max-w-7xl mx-auto text-white text-center px-4">
            <h3 className="text-4xl uppercase mb-12">Welcome</h3>
            <img src="/images/brand.png" alt="Exotic Finishess Brand Logo" width={250} height={250} className="mx-auto mb-8" />
            <h2 className="font-acuminpro font-black uppercase text-3xl lg:text-7xl">Skins for everything</h2>
            <h6 className="text-xl">What would you like to wrap or protect with out custom vinyl skins?</h6>
          </div>
        </div>

        <div className="absolute top-[8%] left-[8%] floating z-0 select-none pointer-events-none">
          <img src="/images/icons/icon-ring-gold.png" alt="" width={48} height={49} />
        </div>

        <div className="absolute bottom-[18%] right-[18%] floating z-0 select-none pointer-events-none">
          <img src="/images/icons/icon-ring-gold.png" alt="" width={48} height={49} />
        </div>

      </div>

      <div className="fixed top-0 left-0 right-0 h-screen z-0 stage-intro">
        <div className="absolute top-0 left-0 right-0 h-screen overflow-hidden z-0 select-none pointer-events-none">
          <div className="w-1/2 absolute top-0 bottom-0 bg-primary left-0 st-intro-left">
            <img src="/images/backgrounds/intro-left.png" alt="Exotic Finishess" className="absolute top-0 bottom-0 left-full -ml-0.5 w-auto max-w-none h-full" />
          </div>
          <div className="w-1/2 absolute top-0 bottom-0 bg-primary right-0 st-intro-right">
            <img src="/images/backgrounds/intro-right.png" alt="Exotic Finishess" className="absolute top-0 bottom-0 right-full -mr-0.5 w-auto max-w-none h-full" />
          </div>
        </div>
      </div>

      <ScrollDown />
    </div>
  )
}

export default IntroSection