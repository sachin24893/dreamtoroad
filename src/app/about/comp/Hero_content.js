import Image from 'next/image'
import React from 'react'

const Hero_content = () => {
  return (
    <div className='w-full grid  max-md:grid-cols-1 container mx-auto grid-cols-2'>
    <div className='w-full relative'>
      <Image className=' hover:scale-110 duration-700' src={"/asset/truks.jpg"} alt='image' width={500} height={400}/>
      <Image className=' hover:scale-110 duration-700 float-right relative -mt-16 ' src={"/asset/truks2.jpg"} alt='image' width={400} height={400}/>
    </div>
    <div className=' p-3'>
    <div className=' relative'>
    <button className=' p-3 rounded-3xl px-4 absolute bg-orange-600'>about fus</button>
    <button className='text-xl p-2 absolute rounded-3xl bg-white'>About Us</button>
    
    </div>
      <h1 className='text-3xl font-bold mt-16'>ADVANCED AND AFFORDABLE TRANSPORTATION SERVICES</h1>
    <div className='text-gray-500 space-y-3'>
    <p>TruckGuru is amongst the most renowned and appreciated cargo service providers in the industry. We started our journey with the aim of delivering the logistics and transportation excellence to our customers ensuring their comfort as well as success.</p>
    <p>At TruckGuru, we render a broad spectrum of services incorporating Roadways Transportation Services, Logistics Services, Supply Chain Consulting, Warehouse Management, Inventory Control, Bulk Parcel Delivery etc. We provide innovative and dynamic transport solution with the right people, modern techniques, and advanced technologies to drive unmatched value for your business. Today, our company has firmly established itself as the 'Market Leader' in the logistics and supply chain industry in India. Drawing inspiration from our work and the standard we set, we have been proving ourselves every day in best quality, cost effectiveness, client satisfaction and assurance to deadlines.</p>
    <p>We are backed by a qualified, skilled, dedicated and professional workforce that offer end-to-end cargo handling solutions and cater to logistics needs of every consumer involved in the supply chain. All time-bound project cargo, urgent dispatches, fragile items, hazardous chemicals, vaccines, pharmaceutical products, electronic goods, automobile items, hardware, perishable shipments and many more are the part of our day-to-day routine and handled with enthusiasm and professionalism. TruckGuru offers cutting-edge and state-of-the-art transport solutions to its customers, helping them to focus on their core competencies and business operations. Our company adds value to businesses at every level, right from delivering first-rate warehousing assistance to ensuring time-bound deliveries of goods anywhere across the country.</p>
    <p>Our web portal “truckguru.co.in” has entirely transformed the way you book or hire the truck. This portal has made it easy and simple to avail our transport services within a minute. With this amazing online truck booking platform, we cover the whole process from truck booking to payments and documentation.</p>
    </div>
    </div>
    </div>
  )
}

export default Hero_content
