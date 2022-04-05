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

    gsap.to('.stage-1 .st-group-1' ,{
      scrollTrigger: {
        trigger: '.stage-1',
        start: 'top top',
        end: 'bottom center',
        // pin: true,
        scrub: true,
        // markers: true,
      },
      y: '-25%',
      opacity: 0
    });

    gsap.from('.stage-2 .st-group-1 > *', { 
      scrollTrigger: {
        trigger: '.stage-2',
        start: 'top 75%',
        scrub: true,
        stagger: 0.5,
        // markers: true,
      },
      y: '-50%',
      opacity: 0,
    })

    const configTimeline = {
      scrollTrigger: {
        trigger: '.intro-section',
        start: '10% top',
        end: 'bottom bottom',
        scrub: true,
        toggleActions: 'play none none reverse',
        // markers: true,
      }
    }

    const tlIntroLeft = gsap.timeline(configTimeline);
    const tlIntroRight = gsap.timeline(configTimeline);

    tlIntroLeft.to('.stage-intro .st-intro-left', { x: '-100%', duration: 0.5})
      .to('.stage-intro .st-intro-left', { x: '-200%', duration: 0.5})

    tlIntroRight.to('.stage-intro .st-intro-right', { x: '+100%', duration: 0.5})
      .to('.stage-intro .st-intro-right', { x: '+200%', duration: 0.5})

  }, [])

  return (
    <div className="relative intro-section bg-black" id="intro">

      <div className="sticky top-0">
        <div className="absolute top-0 left-0 right-0 h-screen overflow-hidden z-0 select-none pointer-events-none stage-intro">
          <div className="w-1/2 absolute top-0 bottom-0 bg-primary left-0 st-intro-left">
            <img src="/images/backgrounds/intro-left.png" alt="" className="absolute top-0 bottom-0 left-full -ml-0.5 w-auto h-full" />
          </div>
          <div className="w-1/2 absolute top-0 bottom-0 bg-primary right-0 st-intro-right">
            <img src="/images/backgrounds/intro-right.png" alt="" className="absolute top-0 bottom-0 right-full -mr-0.5 w-auto h-full" />
          </div>
        </div>
      </div>

      <div className="min-h-screen flex justify-center items-center z-10 stage-1">

        <div className="st-group-1">
          <div className="max-w-2xl md:min-w-[640px] mx-auto md:border-l-2 border-black pl-6">
            <h2 className="text-2xl uppercase leading-none mb-2">&nbsp;</h2>
            <h1 className="text-5xl md:text-7xl uppercase font-acuminpro font-black">&nbsp;</h1>
          </div>
        </div>

      </div>

      <div className="min-h-[420px] flex justify-center items-center z-10 bg-black stage-2">

        <div className="st-group-1">
          <div className="max-w-7xl mx-auto text-white text-center px-4">
            <h3 className="text-4xl uppercase mb-12">Welcome</h3>
            <img src="/images/brand.png" alt="" width={250} height={250} className="mx-auto mb-8" />
            <h2 className="font-acuminpro font-black uppercase text-3xl lg:text-7xl">Skins for everything</h2>
            <h6 className="text-xl">What would you like to wrap or protect with out custom vinyl skins?</h6>
          </div>
        </div>

      </div>
      {/* <ScrollDown /> */}
    </div>
  )
}

export default IntroSection