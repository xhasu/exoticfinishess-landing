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
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // add overflow hidden to body if showAbout is true
    if (showAbout || showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [showAbout, showMenu]);

  const UIData = {
    showAbout: showAbout,
    setShowAbout: setShowAbout,
    showMenu: showMenu,
    setShowMenu: setShowMenu,
  }

  return (
    <UIContext.Provider value={UIData}>
      <Head>
        <title>Exotic Finishess - Custom Textured Walls & Wraps</title>
        <meta name="description" content="Custom Textured Walls & Wraps" />
        <meta name="author" content="Exotic finishess" />
      </Head>

      <Header />

      <main>
        {showAbout && <AboutSection />}
        {showMenu && <NavigationSection />}
        <IntroSection />
        <div className="relative z-20">
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
        </div>
      </main>
    </UIContext.Provider>
  )
}

export default HomePage