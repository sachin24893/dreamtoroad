
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
      <div className=' relative w-full'>
    <div className='w-full max-h-screen overflow-hidden'>
      <Image className=' ' src={"/asset/volvo-trucks.jpg"} width={2000} height={600} alt='image' />
    </div>
     
      </div>
  )
}

export default Hero
