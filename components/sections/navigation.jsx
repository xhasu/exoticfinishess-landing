import React from 'react'

const NavigationSection = () => {
  return (
    <div className="h-screen min-h-[420px] max-h-[960px] flex place-items-center bg-black">
      <div className="max-w-xs mx-auto">
        <nav className="text-6xl text-center text-white uppercase font-black">
          <ul>
            <li>
              <h3 className="cursor-pointer">Home</h3>
            </li>
            <li>
              <h3 className="cursor-pointer">Services</h3>
            </li>
            <li>
              <h3 className="cursor-pointer">About</h3>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavigationSection