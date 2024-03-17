import React from 'react'
import {FaAppStoreIos,FaGooglePlay,FaFacebookF,FaLinkedinIn,FaSkype,FaTiktok} from "react-icons/fa6";
const Main_footer = () => {
  return (
    <div>
           <div className='w-full bg-blue-800 mt-3 text-white p-4 grid grid-cols-3  justify-between'>
<div className='flex  justify-center  gap-3'>
      <FaAppStoreIos  className='text-2xl cursor-pointer hover:text-orange-600'/>
      <FaGooglePlay className='text-2xl cursor-pointer hover:text-orange-600'/>
</div>
<div className='text-center'>
      <p>Copyright ©2023 TruckGuru LLP</p>
</div>
<div className='flex  justify-center  gap-3'>
      <FaFacebookF  className='text-2xl cursor-pointer hover:text-orange-600'/>
      <FaLinkedinIn className='text-2xl cursor-pointer hover:text-orange-600'/>
       <FaSkype  className='text-2xl cursor-pointer hover:text-orange-600'/>
      <FaTiktok className='text-2xl cursor-pointer hover:text-orange-600'/>
</div>
        </div>
    </div>
  )
}

export default Main_footer
