import React, { useEffect } from 'react'
import Button from "components/ui/button"

import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {

  useEffect(() => {
    gsap.from('.services-section h2', {
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top 30%',
        toggleActions: 'play none none reverse',
        // markers: true
      },
      opacity: 0,
      y: '100%'
    });

    gsap.from('.services-section .flex', {
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top 30%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: '-50%'
    });

  }, [])

  return (
    <div className="min-h-[640px] flex place-items-center bg-white services-section">
      <div className="mx-auto max-w-5xl">
        <h2 className="uppercase text-center text-black font-black mb-4 text-[clamp(36px,_15vw,_180px)] leading-tight">Services</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xs md:max-w-none mx-auto">
          <Button>Visual marketing</Button>
          <Button>Decor</Button>
          <Button>Vehicle customization</Button>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection