import Image from 'next/image'
import React from 'react'

const Why_choose_us = () => {
  return (
      <div className=' bg-blue-950 text-white'>
    <div className='grid grid-cols-2 container max-lg:grid-cols-1  mx-auto'>
    <div className=' py-4 space-y-3 p-6 '>
    <button className='text-l p-3  rounded-3xl border-orange-700 border  border-b-2 border-t-blue-950 font-bold'>WHY CHOOSE US</button>
      <h1 className='text-4xl font-bold'>WHY CHOOSE FOR US</h1>
      <p className='text-gray-500'>
         We are very passionate about what we do! We have everything that all is required to move your goods safely and damage-free. So, choosing us means picking the smartest way to streamline the moving operations in your business and focus on your core operations.
   </p>
   {/* div1......................................... */}

<div className='grid  grid-cols-6 relative'>
<div className=' col-span-1 '>
<div className='w-[70px] h-[70px] mt-1 shadow-lg rounded-full absolute max-sm:hidden bg-orange-600'></div>
<Image alt='image' className=' rounded-full hover:rotate-180 shadow-lg duration-1000 scale-75 ' src={"/asset/truks_icon.jpg"} width={80} height={80}/>
</div>
<div className=' col-span-5 '>
      <h1 className='text-xl'>FULL LOAD SERVICES</h1>
      <p className='text-gray-500'>We provide Full Truck load transportation services with varied type of trucks available with the click of a button</p>
</div>
</div>
 {/* div1......................................... */}

<div className='grid grid-cols-6 relative'>
<div className='w-[70px] h-[70px] mt-1 shadow-lg rounded-full absolute max-sm:hidden bg-orange-600'></div>
<Image alt='image' className=' rounded-full shadow-lg hover:rotate-180 duration-1000 scale-75' src={"/asset/truks_icon.jpg"} width={80} height={80}/>
<div className=' col-span-5'>
      <h1 className='text-xl'>TRANSPARENT PRICING</h1>
      <p className='text-gray-500'>With our fare calculator, we instantaneously give you best possible rates online.</p>
</div>
</div>
 {/* div1......................................... */}

<div className='grid relative grid-cols-6'>
<div className='w-[70px] h-[70px] mt-1 shadow-lg rounded-full absolute max-sm:hidden bg-orange-600'></div>
<Image alt='image' className=' rounded-full hover:rotate-180 duration-1000 scale-75' src={"/asset/truks_icon.jpg"} width={80} height={80}/>
<div className=' col-span-5'>
      <h1 className='text-xl'>QUICK & EASY PORTAL</h1>
      <p className='text-gray-500'>Hiring a truck is now just a click away, through our hassle free online booking system.</p>
</div>
</div>
 {/* div1......................................... */}

<div className='grid grid-cols-6 relative '>
<div className='w-[70px] h-[70px] mt-1 shadow-lg rounded-full absolute max-sm:hidden  bg-orange-600'></div>
<Image alt='image' className=' rounded-full  hover:rotate-180 duration-1000 scale-75' src={"/asset/truks_icon.jpg"} width={80} height={80}/>
<div className=' col-span-5'>
      <h1 className='text-xl'>ADVANCE BOOKING</h1>
      <p className='text-gray-500'>Our vehicle availability is guaranteed on daily/weekly/monthly basis to ensure on-time reporting.</p>
</div>
</div>
    </div>


    <div className='flex justify-center items-center p-4'>
<iframe className=' shadow-xl' width="560" height="315" src="https://www.youtube.com/embed/aaH-Z7vEGzg?si=3kqonqGjRzcxoPWL" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

    </div>
      </div>
    </div>
  )
}

export default Why_choose_us
