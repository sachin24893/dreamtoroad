import Link from 'next/link'
import React from 'react'
import { city } from './utils/City_list'

const Footer = () => {
  return (<>
    <div className='container mx-auto p-2'>
    <div className='grid grid-cols-4 max-lg:grid-cols-2 gap-4 max-sm:grid-cols-1' >
      <section className='p-3 space-y-3 w-full border-l-2 border-blue-300'>
            <h1 className='text-xl font-semibold'>About Us</h1>
            <p className='text-gray-500'>TruckGuru, a leading transport and logistics service provider is introducing a truly innovative, modern and high-tech online platform to book the truck in a few simple steps. With the apt use of advanced technology and rich industry experience, we are delivering customized and economical online transportation and cargo solutions to match your expectations and exceed industry benchmarks.</p>
      </section>
      <section className='flex flex-col space-y-3 w-full text-gray-500 p-3 border-l-2 border-blue-300'>
            <h1 className='text-xl font-semibold text-black'>Quick Links</h1>
            <Link className=' font-normal hover:text-blue-800 duration-500' href={"/"}>Home</Link>
            <Link className=' font-normal hover:text-blue-800 duration-500' href={"/"}>About Us</Link>
            <Link className=' font-normal hover:text-blue-800 duration-500' href={"/"}>Blog</Link>
            <Link className=' font-normal hover:text-blue-800 duration-500' href={"/"}>Terms & Condition</Link>
            <Link className=' font-normal hover:text-blue-800 duration-500' href={"/"}> Privacy Policy</Link>
            <Link className=' font-normal hover:text-blue-800 duration-500' href={"/"}>Partner with Us</Link>
            <Link className=' font-normal hover:text-blue-800 duration-500' href={"/"}>Sitemap</Link>
            <Link className=' font-normal hover:text-blue-800 duration-500' href={"/"}>Payment Terms</Link>

            
      </section>
      <section className='flex flex-col space-y-3 w-full text-gray-500 p-3 border-l-2 border-blue-300'>
            <h1 className='text-xl font-semibold text-black'>Our Services</h1>
            <Link className=' font-normal hover:text-blue-800 duration-500' href={"/"}>Online Truck Booling</Link>
            <Link className=' font-normal hover:text-blue-800 duration-500' href={"/"}>logistic Services</Link>
            <Link className=' font-normal hover:text-blue-800 duration-500' href={"/"}>Transportation Services</Link>
            <Link className=' font-normal hover:text-blue-800 duration-500' href={"/"}>Packers & Movers</Link>
            <Link className=' font-normal hover:text-blue-800 duration-500' href={"/"}>Express Cargo Services</Link>
            <Link className=' font-normal hover:text-blue-800 duration-500' href={"/"}>Bulk Parcel Services</Link>
            <Link className=' font-normal hover:text-blue-800 duration-500' href={"/"}>Truck Rental Services</Link>
           
      </section>
      <section className='flex flex-col space-y-3 w-full text-gray-500 p-3 border-l-2 border-blue-300'>
            <h1 className='text-xl font-semibold text-black'>Contact</h1>
            <Link className=' font-normal hover:text-blue-800 duration-500' href={"/"}>Phone :00000-00000</Link>
            <Link className=' font-normal hover:text-blue-800 duration-500' href={"/"}>WhatsApp : 00000-00000</Link>
            <Link className=' font-normal hover:text-blue-800 duration-500' href={"/"}>Email : cs@abc.com</Link>
            
      </section>
    </div> 

    <div className='mt-5'>
      <h1 className='text-2xl font-bold text-center'>Top Cities</h1>
      
      <p className='text-gray-500 space-x-5  items-center justify-center space-y-2 flex flex-wrap'>{
            city.map((list,index)=>{
                  return(
                        <span className=' hover:text-blue-700 duration-500' key={index}><Link href={"/"}>{list}</Link></span>
                  )
            })

      }
      </p>
        </div>    
    </div>

</>

  )
}

export default Footer
