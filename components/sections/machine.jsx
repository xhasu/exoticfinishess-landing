import React from 'react'
import { HeadlineGroup } from 'components/shared/headlines'

const MachineSection = () => {
  return (
    <div className="px-4 mx-auto max-w-screen-xl">
      <div className="mb-12">
        <HeadlineGroup category="Our machine" title="Mimaki" />
      </div>
      <div className="text-2xl mb-8 font-century font-normal">
        <p>We want the best for your business, that&apos;s why we have the best machine in the market to delivery high quality graphic design installations.</p>
        <br />
        <p>Also we offer design services if you don&apos;t know how to start, our team work can advise and accompany through all the design and installation process.</p>
      </div>
      <div className="mb-8">
        <img src="/images/mimaki-machine.jpg" alt="Exotic Finishess Mimaki Machine" width="1265" height="789" className="mx-auto" />
      </div>
      <div className="mb-16 mx-auto max-w-[240px] md:max-w-none">
        <img src="/images/machine-logos.png" alt="Exotic Finishess Mimaki logos" width="445" height="115" className="mx-auto" />
      </div>
    </div>
  )
}

export default MachineSection