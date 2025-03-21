import React from 'react'
import banner from "../../public/assets/banner.png"

const HeroSection = () => {
  return (
    <div className='lg:h-[87vh] flex justify-center items-center lg:w-[80vw] mx-auto w-full h-'>
      <img src={banner} className="lg:h-full object- rounded-2xl"  />
    </div>
  )
}

export default HeroSection
