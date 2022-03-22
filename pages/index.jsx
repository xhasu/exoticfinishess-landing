import React from 'react'
import Head from "next/head"
import IntroSection from "components/sections/intro"
import NavigationSection from "components/sections/navigation"
import ServicesSection from "components/sections/services"
import { MarketingSection, DecorSection, VehicleSection } from "components/sections/info"
import MachineSection from "components/sections/machine"
import LocationSection from "components/sections/location"
import ClientsSection from "components/sections/clients"

const HomePage = () => {

  return (
    <div>
      <Head>
        <title>Exotic Finishess</title>
      </Head>
      <IntroSection />
      <NavigationSection />
      <ServicesSection />
      <div>
        <MarketingSection />
        <DecorSection />
        <VehicleSection />
      </div>
      <MachineSection />
      <LocationSection />
      <ClientsSection />
    </div>
  )
}

export default HomePage