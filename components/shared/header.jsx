import Brand from "components/ui/brand"
import { PlusIcon } from "components/ui/icons"
import React from 'react'

const Header = () => {
  return (
    <header className="sticky top-0 bg-primary z-10">
      <div className="flex px-4 py-2">
        <div className="flex-1 flex items-center gap-2">
          {/* 
          <div className="h-9 w-9">
            <Brand />
          </div>
          */}
          <div className="text-black text-2xl leading-none font-century font-normal">
            <img src="/images/icons/icon-waves-black.png" alt="Exoticfinishess Waves" width="43" height="26" className="inline mr-2" />
            Exotic Finishess
          </div>
        </div>
        <div className="flex-none">
          <div className="w-9 h-9 cursor-pointer">
            <PlusIcon />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header