"use client"
import { FaUserLarge,FaEnvelope,FaMobileRetro,FaCity } from "react-icons/fa6";
import Contact_info from './Contact_info';
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'
const Get_in_touch = () => {
        const from_schema=z.object({
        name:z.string().min(3,'min length 3 chars').max(20,'max length 20 chars').regex(/[a-z]/,"only chars allowed"),
        email:z.string().email(),
        contact:z.string().max(10,"max 10 chars").regex(/[0-9]/,"only numbers allowed"),
        city:z.string().min(3,"min 3 chars").max(20,"max 20 chars").regex(/[a-z]/,"only chars allowed"),
        message:z.string().min(10,"min 10 chars").max(50,"max 50 chars").regex(/[a-z]/,"only chars allowed")
      })
      const {register,handleSubmit,formState:{errors},reset}=useForm({
        resolver:zodResolver(from_schema),
        mode:"all",
      });

     const detailsubmit= async(data)=>{
      const res=await fetch("http://localhost:3000/api/user_info",{method:"post",body:JSON.stringify(data)})
      const response= await res.json();
      alert(response)
      console.log("run")
      reset({name:"",email:"",contact:"",city:"",message:""});
      }
      
  return (
    <div className='grid grid-cols-7 container max-md:grid-cols-1 mt-40 shadow-xl mx-auto'>
    <form onSubmit={handleSubmit(detailsubmit)} className=' col-span-4 p-4 space-y-4 flex flex-col items-center  bg-white'>
      <div className='text-2xl font-semibold border-b-2 w-full border-orange-600 text-center '>GET IN TOUCH</div>
      <div className=' w-full grid grid-cols-2 max-lg:grid-cols-1 gap-3'>
       {/* input-1.................................. */}
     <div>
       <div className=' relative flex items-center'>
      <FaUserLarge className=' absolute ml-4  pointer-events-none'/>
      <input {...register("name")}  className=' bg-gray-100 w-full py-4 px-10 outline-none placeholder-gray-700 ' type="text" placeholder='Company/Personal Name'/>
      </div>
      {errors.name&&(<p className="text-red-500 text-sm">{errors.name.message}</p>)}
     </div>
            {/* input-2.................................. */}
         <div>
               <div className=' relative flex items-center'>
      <FaEnvelope className=' absolute ml-4  pointer-events-none'/>
      <input {...register("email")} className=' w-full bg-gray-100 py-4 px-10 outline-none placeholder-gray-700 ' type="email" placeholder='Email Id'/>
      </div>
      {errors.email&&<p className="text-red-500 text-sm">{errors.email.message}</p>}
         </div>
        {/* input-3.................................. */}
       <div>
                 <div className=' relative flex items-center'>
      <FaMobileRetro className=' absolute ml-4  pointer-events-none'/>
      <input {...register("contact")}  className=' w-full bg-gray-100 py-4 px-10 outline-none placeholder-gray-700 ' type="text" placeholder='Contact'/>
      </div>
      {errors.contact&&<p className="text-red-500 text-sm">{errors.contact.message}</p>}
       </div>
        {/* input-4.................................. */}
           <div>
             <div className=' relative flex items-center'>
      <FaCity className=' absolute ml-4  pointer-events-none'/>
      <input {...register("city")} className=' w-full bg-gray-100 py-4 px-10 outline-none placeholder-gray-700 ' type="text" placeholder='City'/>
      </div>
      {errors.city&&<p className="text-red-500 text-sm">{errors.city.message}</p>}
           </div>
      <textarea {...register("message")} className=' outline-none col-span-2 max-lg:col-span-1 bg-gray-100 p-3 placeholder-gray-700 ' placeholder='Message' name="message"  cols="30" rows="7"></textarea>
      </div>
      {errors.message&&<p className="text-red-500 text-sm">{errors.message.message}</p>}
      <button type="submit" className='px-40 py-3 bg-orange-600 text-white text-center'>Send Message</button>
    </form>

{/* asidediv..................................... */}

<Contact_info/>
          </div>
  )
}

export default Get_in_touch
