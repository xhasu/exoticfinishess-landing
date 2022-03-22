import React from 'react'
import { HeadlineGroup } from 'components/shared/headlines'

const ClientsSection = () => {
  return (
    <div className="px-4 mx-auto max-w-screen-xl">
      <div className="mb-8">
        <HeadlineGroup category="Our" title="Clients" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mx-auto max-w-5xl py-8">
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
          <img src="/images/clients/client-calvin-Klein.png" alt="Exotic Finishess Calvin Klein" width="186" height="230" />
        </div>
      </div>
    </div>
  )
}

export default ClientsSection