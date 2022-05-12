import React from 'react'
import { HeadlineGroup } from 'components/shared/headlines'
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'

const ClientsSection = () => {
  return (
    <div className="px-4 mx-auto max-w-screen-xl">
      <div className="mb-8">
        <HeadlineGroup category="Our" title="Clients" />
      </div>
      <Swiper autoplay={{delay: 2000, disableOnInteraction: false}} loop={true} modules={[Autoplay]}>
        <SwiperSlide className="!h-auto">
          <div className="grid grid-cols-4 gap-8 mx-auto max-w-5xl pb-8 place-items-center h-full">
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-versace.png" alt="Exotic Finishess Versace" width="171" height="201" />
            </div>
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-tide.png" alt="Exotic Finishess Tide" width="195" height="195" />
            </div>
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-apple.png" alt="Exotic Finishess Apple" width="132" height="162" />
            </div>
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-calvin-klein.png" alt="Exotic Finishess Calvin Klein" width="132" height="162" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div className="grid grid-cols-2 gap-8 mx-auto max-w-5xl pb-8 place-items-center h-full">
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-pandora.png" alt="Exotic Finishess Pandora" width="480" height="101" />
            </div>
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-michael-kors.png" alt="Exotic Finishess Michael Kors" width="752" height="72" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div className="grid grid-cols-2 gap-8 mx-auto max-w-5xl pb-8 place-items-center h-full">
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-qkapital-group.png" alt="Exotic Finishess QKapital Group" width="528" height="143" />
            </div>
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-nordstrom.png" alt="Exotic Finishess NordStrom" width="571" height="72" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div className="grid grid-cols-2 gap-8 mx-auto max-w-5xl pb-8 place-items-center h-full">
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-zurikate.png" alt="Exotic Finishess " width="646" height="141" />
            </div>
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-lululemon.png" alt="Exotic Finishess " width="627" height="121" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ClientsSection