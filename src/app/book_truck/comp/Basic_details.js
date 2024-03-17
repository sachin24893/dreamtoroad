"use client"
import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import z from 'zod'


const Basic_details = ({setchangepage,setdata}) => {
  const [capacity_list,set_capacity_list]=useState([])
    useEffect(()=>{
           const res =fetch("http://localhost:3000/api/truck_type").then((res)=>{
                  return res.json()
            })
            res.then((data)=>{set_capacity_list(data)})
      },[])

      const form_schema=z.object ( {
            pickup_location:z.string().regex(/[a-z]/,'chars are allowed'),
            drop_location:z.string().regex(/[a-z]/,'chars are allowed'),
            load:z.string().regex(/[0-9]/,'numbers are allowed'),
            truk_type:z.string().regex(/[a-zA-Z]/,'chars are allowed'),
            discription:z.string().regex(/[a-z]/,'chars are allowed'),
      })
const {register,reset,handleSubmit,formState:{errors}}=useForm({
resolver:zodResolver(form_schema),
mode:"all"
})
const onsubmit=(data)=>{
setchangepage(1)
console.log(data)
setdata(data)

}
  return (
    <form onSubmit={handleSubmit(onsubmit)} className=' space-y-5'>
    <h1 className='text-2xl font-bold '>BASIC DETAILS</h1>
      <input {...register('pickup_location')} type="text" placeholder='pickup location' className='p-2 w-full border-b-2 shadow-lg border-gray-500 rounded-md outline-none ' />
      {errors.pickup_location&&(<p className='text-red-500'>{errors.pickup_location.message}</p>)}
      <input {...register('drop_location')} type="text" placeholder='drop location' className='p-2 w-full border-b-2 shadow-lg border-gray-500 rounded-md outline-none ' />
        {errors.drop_location&&(<p className='text-red-500'>{errors.drop_location.message}</p>)}
      <input {...register('load')} type="text" placeholder='load in KG' className='p-2 w-full border-b-2 shadow-lg border-gray-500 rounded-md outline-none' />
        {errors.load&&(<p className='text-red-500'>{errors.load.message}</p>)}
      <select{...register('truk_type')} className='w-full p-2 border-b-2 shadow-lg border-gray-500 rounded-md outline-none'>
            {
              capacity_list==""?null:capacity_list.map((list,index)=>{
                        return(
                             <option key={index}>{list.Truck_type}</option>    
                        )
                      }) 

            }
      </select>
        {errors.truk_type&&(<p className='text-red-500'>{errors.truk_type.message}</p>)}
      <textarea {...register('discription')}  cols="30" rows="10" placeholder='description about items' className='p-2 w-full border-b-2 shadow-lg border-gray-500 rounded-md outline-none '></textarea>
        {errors.discription&&(<p className='text-red-500'>{errors.discription.message}</p>)}
      <button type='submit' className='p-2 bg-orange-500 w-full font-bold rounded-md'>submit</button>
    </form>
  )
}

export default Basic_details
