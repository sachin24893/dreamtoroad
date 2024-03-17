import React from 'react'
import Get_in_touch from './comp/Get_in_touch'
import { FaUserLarge } from "react-icons/fa6";

const page = () => {
  return (
      <>
      <div className='bg-gray-100 bg-opacity-40 w-full h-full'>
    <div className='w-full h-40 bg-gray-700 p-8'>
      <div className=' container mx-auto'>
            <span className=' text-5xl text-white font-bold'>CONTACT US</span>
      </div>
    </div>
    
    <Get_in_touch/>
    </div>
  </>
  )
}

export default page
