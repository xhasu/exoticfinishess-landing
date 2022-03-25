import React, { useEffect } from 'react'
import { Headline, HeadlineGroup } from 'components/shared/headlines'
import MoreServices from 'components/ui/more'

import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export const MarketingSection = () => {

  useEffect(() => {
    gsap.from('.marketing-section h2', {
      scrollTrigger: {
        trigger: '.marketing-section',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: '-100%'
    });

    gsap.from('.marketing-section .more-services', {
      scrollTrigger: {
        trigger: '.marketing-section',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      duration: 0.5,
      y: '-50%'
    });

  }, [])

  return (
    <div className="bg-white text-black marketing-section">
      <div className="min-h-[480px] grid place-content-center">
        <div>
          <Headline title="Visual Marketing" />
          <MoreServices />
        </div>
      </div>
      <div className="bg-black">
        <div className="mx-auto max-w-screen-xl mb-8">
          <div className="aspect-video bg-gray-900"></div>
        </div>
      </div>
      <div className="py-24 px-4">
        <HeadlineGroup category="Visual Marketing" title="Services" />
        <ul className="font-century font-normal px-4 mx-auto text-center mt-8">
          <li>- Sticker manufacturer</li>
          <li>- Grand Opening/Closing/Moving</li>
          <li>- Retail Branding</li>
          <li>- New season launch</li>
          <li>- Large format printing</li>
          <li>- Floor decals</li>
          <li>- Windows graphics</li>
          <li>- Interior wall designs</li>
        </ul>
        <div className="border-b border-black mx-auto max-w-[180px] mt-8"></div>
      </div>
    </div>
  )
}

export const DecorSection = () => {

  useEffect(() => {
    gsap.from('.decor-section h2', {
      scrollTrigger: {
        trigger: '.decor-section',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: '-100%'
    });

    gsap.from('.decor-section .more-services', {
      scrollTrigger: {
        trigger: '.decor-section',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      duration: 0.5,
      y: '-50%'
    });

  }, [])

  return (
    <div className="decor-section">
      <div className="min-h-[480px] grid place-content-center bg-black text-white">
        <div>
          <Headline title="Decor" />
          <MoreServices />
        </div>
      </div>
      <div className="bg-black">
        <div className="mx-auto max-w-screen-xl mb-8">
          <div className="aspect-video bg-gray-900"></div>
        </div>
      </div>
      <div className="py-24 px-4">
        <HeadlineGroup category="Decor" title="Services" />
        <ul className="font-century font-normal px-4 mx-auto text-center mt-8">
          <li>- Custom acrylic printing</li>
          <li>- Window frost/WIndow ting</li>
          <li>- Custom wall wraps</li>
          <li>- Architectural vinyl</li>
          <li>- Color change</li>
        </ul>
        <div className="border-b border-black mx-auto max-w-[180px] mt-8"></div>
      </div>
    </div>
  )
}

export const VehicleSection = () => {

  useEffect(() => {
    gsap.from('.vehicle-section h2', {
      scrollTrigger: {
        trigger: '.vehicle-section',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: '-100%'
    });

    gsap.from('.vehicle-section .more-services', {
      scrollTrigger: {
        trigger: '.vehicle-section',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      duration: 0.5,
      y: '-50%'
    });

  }, [])

  return (
    <div className="vehicle-section">
      <div className="min-h-[480px] grid place-content-center bg-black text-white">
        <div>
          <Headline title="Vehicle customization" />
          <MoreServices />
        </div>
      </div>
      <div className="bg-black">
        <div className="mx-auto max-w-screen-xl mb-8">
          <div className="aspect-video bg-gray-900"></div>
        </div>
      </div>
      <div className="py-24 px-4">
        <HeadlineGroup category="Vehicle customization" title="Services" />
        <ul className="font-century font-normal px-4 mx-auto text-center mt-8">
          <li>- Black out package gloss 3m </li>
          <li>- Black out package matte 3m</li>
          <li>- Paint protectionf film (xpel stealth matte)	 </li>
          <li>- Paint protectionf film (xpel clear gloss) </li>
          <li>- Paint correction 	</li>
          <li>- Color change 3m</li>
          <li>- Personalized wrap design 3m </li>
          <li>- Ceramic xpel (body paint)</li>
          <li>- Ceramic xpel (wheels and calipers)</li>
          <li>- Powder coat painted wheels</li>
          <li>- Painted calipers	</li>
          <li>- Window tint set (no windshield) xpel</li>
          <li>- Window tint winshield xpel</li>
          <li>- Custom stripes</li>
          <li>- Tail/head lights tinted (pair)	</li>
        </ul>
        <div className="border-b border-black mx-auto max-w-[180px] mt-8"></div>
      </div>
    </div>
  )
}