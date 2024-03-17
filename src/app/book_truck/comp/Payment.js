"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Payment = () => {
const [data,setdata]=useState()
const submitdata=(e)=>{
const img=URL.createObjectURL(e.target.files[0])
setdata(img)
}
const submitdatabtn=(e)=>{

}
  return (
    <div>
    <h1 className='text-2xl font-bold mb-3'>PAYMENT MODE</h1>
      <ul className='flex flex-col gap-4'>
            <Link href={"/"} className='text-xl text-blue-600  font-semibold'>pay with gpay</Link>
            <Link href={"/"} className='text-xl text-blue-600  font-semibold'>pay with amazon</Link>
            <Link href={"/"} className='text-xl  text-blue-600 font-semibold'>pay with paytem</Link>
            <Link  href={"/"} className='text-xl text-blue-600  font-semibold'>cash on delivery</Link>
      </ul>
      <form onSubmit={submitdatabtn} encType='multipart/form-data'>
        <input onChange={submitdata} type="file" name='image' />
        <button type='submit'>submit</button>
      </form>
      <img src={data} alt="gdf" width={200} height={100} />
    </div>
  )
}

export default Payment
