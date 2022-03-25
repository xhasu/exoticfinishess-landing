import React from 'react'
import { PlusIcon } from "./icons"

const MoreServices = () => {
  return (
    <div className="max-w-xs mx-auto text-center mt-24 more-services">
      <div className="cursor-pointer">
        <div className="w-8 h-8 mx-auto">
          <PlusIcon />
        </div>
        <div className="font-century font-normal">More services</div>
      </div>
    </div>
  )
}

export default MoreServices