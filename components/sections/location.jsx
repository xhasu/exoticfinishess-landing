import React from 'react'
import { HeadlineGroup } from 'components/shared/headlines'

const LocationSection = () => {
  return (
    <div className="px-4 mx-auto max-w-screen-xl">
      <div className="mb-12">
        <HeadlineGroup category="Our" title="Services" />
      </div>
      <div className="text-2xl mb-8 text-center  font-normal">
        <p>Our services are for all USA, contact for further information let&apos;s work together.</p>
      </div>
      <div className="mb-8">
        <img src="/images/location.png" alt="Exotic Finishess Mimaki Machine" width="1075" height="707" className="mx-auto" />
      </div>
    </div>
  )
}

export default LocationSection