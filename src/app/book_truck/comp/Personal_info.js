
import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import z from 'zod'

const Personal_info = ({setchangepage,setdataa}) => {
  const [dataa,setdata]=useState()
  
      
      const form_schema=z.object({
        name:z.string().min(3,'min length 3 chars').max(20,'max length 20 chars').regex(/[a-z]/,"only chars allowed"),
        email:z.string().email(),
        contact:z.string().max(10,"max 10 chars").regex(/[0-9]/,"only numbers allowed"),
        gender:z.string(),
        image:z.any(),
        address:z.string().min(20,'min 20 allowed').max(50,'max 50 allowed').regex(/[a-z]/,'chars are allowed')

      })
      const {register,reset,handleSubmit,formState:{errors}}=useForm({
            resolver:zodResolver(form_schema),
            mode:"all"
      })
      const onchange=(e)=>{setdata(URL.createObjectURL(e.target.files[0]))}
      const onsubmit= async(data)=>{
        data.image=dataa
       console.log(data)
       setdataa(data)
        
            //setchangepage(2)
           

      }
  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)} encType='multipart/form-data' className=' space-y-5'>
    <h1 className='text-2xl font-bold '>PERSONAL DETAILS</h1>
      <input {...register('name')} type="text" placeholder='name' className='p-2 w-full border-b-2 shadow-lg border-gray-500 rounded-md outline-none ' />
      {errors.name&&(<p className='text-red-500'>{errors.name.message}</p>)}
      <input {...register('email')} type="text" placeholder='email' className='p-2 w-full border-b-2 shadow-lg border-gray-500 rounded-md outline-none ' />
      {errors.email&&(<p className='text-red-500'>{errors.email.message}</p>)}
      <input {...register('contact')} type="text" placeholder='mobile no' className='p-2 w-full border-b-2 shadow-lg border-gray-500 rounded-md outline-none' />
      {errors.contact&&(<p className='text-red-500'>{errors.contact.message}</p>)}
      <select {...register('gender')} className='w-full p-2 border-b-2 shadow-lg border-gray-500 rounded-md outline-none'>
            <option>gender</option>
            <option>male</option>
            <option>female</option>
      </select>
      <input {...register('image')} onChange={onchange}  type="file" className='p-2 w-full border-b-2 shadow-lg border-gray-500 rounded-md outline-none' />
      {errors.image&&(<p className='text-red-500'>{errors.image.message}</p>)}
      <textarea {...register('address')}  cols="30" rows="10" placeholder='address' className='p-2 w-full border-b-2 shadow-lg border-gray-500 rounded-md outline-none '></textarea>
      {errors.address&&(<p className='text-red-500'>{errors.address.message}</p>)}
      <button className='p-2 bg-orange-500 w-full font-bold rounded-md'>submit</button>
    </form>
    
    </div>
  )
}

export default Personal_info
