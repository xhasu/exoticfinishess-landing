import React, { useEffect, useRef } from 'react'
import { Headline, HeadlineGroup } from 'components/shared/headlines'
import MoreServices from 'components/ui/more'

import { gsap } from 'gsap/dist/gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const scrollTo = (section) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: section,
      offsetY: 50,
    }
  });
}

export const MarketingSection = () => {

  // video ref
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.from('.marketing-section h2, .marketing-section .more-services', {
      scrollTrigger: {
        trigger: '.marketing-head',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      stagger: 0.2,
      opacity: 0,
      y: '50%'
    });

    gsap.from('.marketing-section .marketing-content > *', {
      scrollTrigger: {
        trigger: '.marketing-content',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      stagger: 0.2,
      opacity: 0,
      y: '25%'
    });

    gsap.to('.marketing-video', {
      scrollTrigger: {
        trigger: '.marketing-video',
        pin: true,
        pinSpacing: false,
        
      }
    })

    gsap.to('.marketing-video', {
      scrollTrigger: {
        trigger: '.marketing-video',
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (st) => {
          if(st.isActive) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      }
    })

  }, [])

  return (
    <div className="relative bg-white text-black marketing-section z-0" id="marketing">
      <div className="min-h-[480px] grid place-content-center sticky top-1/4 marketing-head">
        <div>
          <Headline title="Visual Marketing" />
          <MoreServices onClick={() => scrollTo('#marketingcontent')} />
        </div>
      </div>
      <div className="relative bg-black marketing-video">
        <video className="aspect-square md:aspect-auto" preload="metadata" loop={true} muted={true} playsInline={true} ref={videoRef} width="1920" height="900">
          <source src="/media/marketing.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative py-24 px-4 bg-white marketing-content" id="marketingcontent">
        <HeadlineGroup category="Visual Marketing" title="Services" />
        <ul className=" font-normal px-4 mx-auto text-center mt-8">
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

      <div className="absolute top-[8%] left-[8%] floating z-0 select-none pointer-events-none">
        <img src="/images/icons/icon-ring.png" alt="" width={49} height={49} />
      </div>
    </div>
  )
}

export const DecorSection = () => {

  // video ref
  const videoRef = useRef(null);

  useEffect(() => {

    gsap.from('.decor-section h2, .decor-section .more-services', {
      scrollTrigger: {
        trigger: '.decor-head',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      stagger: 0.2,
      opacity: 0,
      y: '50%'
    });

    gsap.from('.decor-section .decor-content > *', {
      scrollTrigger: {
        trigger: '.decor-content',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      stagger: 0.2,
      opacity: 0,
      y: '25%'
    });

    gsap.to('.decor-video', {
      scrollTrigger: {
        trigger: '.decor-video',
        pin: true,
        pinSpacing: false,
      }
    })

    gsap.to('.decor-video', {
      scrollTrigger: {
        trigger: '.decor-video',
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (st) => {
          if(st.isActive) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      }
    })

  }, [])

  return (
    <div className="relative bg-black decor-section z-10" id="decor">
      <div className="min-h-[480px] grid place-content-center sticky top-1/4 text-white decor-head">
        <div>
          <Headline title="Decor" />
          <MoreServices onClick={() => scrollTo('#decorcontent')} />
        </div>
      </div>
      <div className="relative bg-black decor-video">
        <video className="aspect-square md:aspect-auto" preload="metadata" loop={true} muted={true} playsInline={true} ref={videoRef} width="1920" height="900">
          <source src="/media/decor.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative py-24 px-4 bg-white decor-content" id="decorcontent">
        <HeadlineGroup category="Decor" title="Services" />
        <ul className=" font-normal px-4 mx-auto text-center mt-8">
          <li>- Custom acrylic printing</li>
          <li>- Window frost/Window tint</li>
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

  // video ref
  const videoRef = useRef(null);

  useEffect(() => {

    gsap.from('.vehicle-section h2, .vehicle-section .more-services', {
      scrollTrigger: {
        trigger: '.vehicle-head',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      stagger: 0.2,
      opacity: 0,
      y: '50%'
    });

    gsap.from('.vehicle-section .vehicle-content > *', {
      scrollTrigger: {
        trigger: '.vehicle-content',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      stagger: 0.2,
      opacity: 0,
      y: '25%'
    });

    gsap.to('.vehicle-video', {
      scrollTrigger: {
        trigger: '.vehicle-video',
        pin: true,
        pinSpacing: false,
      }
    })

    gsap.to('.vehicle-video', {
      scrollTrigger: {
        trigger: '.vehicle-video',
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (st) => {
          if(st.isActive) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      }
    })

  }, [])

  return (
    <div className="relative bg-black vehicle-section z-20" id="vehicle">
      <div className="min-h-[480px] grid place-content-center sticky top-1/4 text-white vehicle-head">
        <div>
          <Headline title="Vehicle customization" />
          <MoreServices onClick={() => scrollTo('#vehiclecontent')} />
        </div>
      </div>
      <div className="relative bg-black vehicle-video">
        <video className="aspect-square md:aspect-video" preload="metadata" loop={true} muted={true} playsInline={true} ref={videoRef} width="1920" height="900">
          <source src="/media/vehicle.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative py-24 px-4 bg-white vehicle-content" id="vehiclecontent">
        <HeadlineGroup category="Vehicle customization" title="Services" />
        <div className="grid md:grid-cols-2 max-w-sm md:max-w-4xl mx-auto mt-8 md:mt-12 gap-4">

          <div className="mb-4">
            <h3 className="font-bold mb-4 text-lg flex items-center gap-x-4">
              Paint protection film
              <img src="/images/xpel.png" alt="Xpel Exotic Finishess" width={103} height={27} />
            </h3>
            <ul>
              <li>Paint protection film - stealth</li>
              <li>Paint protection film - gloss</li>
              <li>Paint protection film - black</li>
              <li>Paint protection film - (gloss) + ceramic xpel</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-bold mb-4 text-lg flex items-center gap-x-4">
              Window tint
              <img src="/images/xpel.png" alt="Xpel Exotic Finishess" width={103} height={27} />
            </h3>
            <ul>
              <li>Window tint set (no windshield) (xr plus) - sedan</li>
              <li>Window tint set (no windshield) (xr plus) - suv</li>
              <li>Window tint set (no windshield) (xr plus) - truck</li>
              <li>Windshield window tint (xr plus)</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-bold mb-4 text-lg flex items-center gap-x-4">
              Vehicle wraps
              <img src="/images/3m.png" alt="3M Exotic Finishess" width={64} height={34} />
            </h3>
            <ul>
              <li>Color change</li>
              <li>Personalized wrap design 3m</li>
              <li>Custom stripes</li>
              <li>Tail/head lights tinted (pair)</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-bold mb-4 text-lg flex items-center gap-x-4">
              Chrome delete
              <img src="/images/3m.png" alt="3M Exotic Finishess" width={64} height={34} />
            </h3>
            <ul>
              <li>Black out package gloss</li>
              <li>Black out package matte</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-bold mb-4 text-lg flex items-center gap-x-4">
              Ceramic
              <img src="/images/xpel.png" alt="Xpel Exotic Finishess" width={103} height={27} />
            </h3>
            <ul>
              <li>Xpel ceramic - on stealth</li>
              <li>Xpel ceramic - on gloss</li>
              <li>Xpel ceramic - on wheels & calibers</li>
              <li>Xpel ceramic - on all glass</li>
              <li>Xpel ceramic - on plastic & trim</li>
              <li>Xpel ceramic - on upholsery</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-bold mb-4 text-lg flex items-center gap-x-4">
              Paint
            </h3>
            <ul>
              <li>Powder coat painted wheels</li>
              <li>Painted calibers</li>
            </ul>
          </div>

        </div>
        <div className="border-b border-black mx-auto max-w-[180px] mt-8"></div>
      </div>
    </div>
  )
}