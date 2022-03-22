import Button from "components/ui/button"
import React from 'react'

const ServicesSection = () => {
  return (
    <div className="h-screen min-h-[420px] max-h-[960px] flex place-items-center bg-white">
      <div className="mx-auto max-w-5xl">
        <h2 className="uppercase text-center text-black font-black mb-4 text-[clamp(36px,_20vw,_180px)] leading-tight">Services</h2>
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