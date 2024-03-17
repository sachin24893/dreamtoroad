import React from 'react'
import Link from 'next/link';
import { FaEnvelope,FaPhone,FaLocationDot } from "react-icons/fa6";
const Contact_info = () => {
  return (
   <div className=' bg- bg-orange-500 col-span-3  space-y-4 p-10'>
           <div className='text-3xl font-semibold border-b-2 w-full border-white  text-white '>
            CONTACT
            <p>INFORMATION</p>
           </div>
           {/* div1..... contact number..........................  */}
           <div className='w-full bg-white rounded-xl shadow-lg p-3'>
           <h1 className='text-xl font-semibold'>Contact Number</h1>
           <div className='grid grid-cols-5'>
           <div className=' col-span-1 p-3'>
           <FaPhone className='text-3xl'/>
           </div>
            <div className=' col-span-4 flex flex-col'>
                  <Link href={"/"}>+91 12345 67890</Link>
                  <Link href={"/"}>+91 12345 67890</Link>
            </div>
           </div>
           </div>

           {/* div2..... mail address..........................  */}
           <div className='w-full bg-white rounded-xl shadow-lg p-3'>
           <h1 className='text-xl font-semibold'>Mail Address</h1>
           <div className='grid grid-cols-5'>
           <div className=' col-span-1 p-3'>
           <FaEnvelope className='text-3xl'/>
           </div>
            <div className=' col-span-4 flex flex-col'>
                  <Link href={"/"}>info@abc.com</Link>
                  <Link href={"/"}>cs@abc.com</Link>
            </div>
           </div>
           </div>

           {/* div3..... registred office..........................  */}
           <div className='w-full bg-white rounded-xl shadow-lg p-3'>
           <h1 className='text-xl font-semibold'>Registred Office</h1>
           <div className='grid grid-cols-5'>
           <div className=' col-span-1 p-3'>
           <FaLocationDot className='text-3xl'/>
           </div>
            <div className=' col-span-4'>
            <address className=' leading-6'>
                  abc 

            </address>
                 
           </div>
           </div>
      </div>
    </div>

  )
}

export default Contact_info
