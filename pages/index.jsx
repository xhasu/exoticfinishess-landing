import React, { useEffect, useState } from 'react'
import Head from "next/head"
import Header from "components/shared/header";
import AboutSection from "components/sections/about"
import IntroSection from "components/sections/intro"
import NavigationSection from "components/sections/navigation"
import ServicesSection from "components/sections/services"
import { MarketingSection, DecorSection, VehicleSection } from "components/sections/info"
import MachineSection from "components/sections/machine"
import LocationSection from "components/sections/location"
import ContactSection from "components/sections/contact"
import ClientsSection from "components/sections/clients"
import { UIContext } from "contexts/uicontext";

const HomePage = () => {

  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    // add overflow hidden to body if showAbout is true
    if (showAbout) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [showAbout]);

  return (
    <UIContext.Provider value={{ showAbout: showAbout, setShowAbout: setShowAbout }}>
      <Head>
        <title>Exotic Finishess</title>
      </Head>

      <Header />

      <main>
        {showAbout && <AboutSection />}
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
        <ContactSection />
        <ClientsSection />
      </main>
    </UIContext.Provider>
  )
}

export default HomePage