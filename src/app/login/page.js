"use client"
import {  useState } from "react"
import { useRouter } from "next/navigation"


const page = () => {
const [switcher,setswitcher]=useState("")
const [data,setdata]=useState({
  name:"",
  email:"",
  password:""
})
const [error,seterror]=useState("")
const route=useRouter();


const changehandler=(e)=>{
  const name=e.target.name
  const value=e.target.value
setdata(data=>({...data,[name]:value}))
}

const submituserdetails= async()=>{
const res=await fetch("http://localhost:3000/api/user",{method:"post",body:JSON.stringify(data)})
const response= await res.json()
setdata({name:"",email:"",password:""})
alert(response)
setswitcher("")
}

// login details..................................
 
 const loginchangehandler=(e)=>{
  const name=e.target.name
  const value=e.target.value
  setdata(data=>({...data,[name]:value}))
 
 }

 const loginverify= async()=>{
 
if(!data.email=="" && !data.password==""){
 const res=await fetch("http://localhost:3000/api/user",{method:"post",body:JSON.stringify(data)})
const response= await res.json();
seterror(response)
route.refresh();
route.push("/book_truck")


}
 else{
  alert("pls fill all fields")
 }
  
 }
  return (
    
    <div className="w-full  h-screen  p-5 flex items-center justify-center">
      {switcher==""?
      <div className="p-4  grid grid-cols-1 shadow-xl gap-4 w-[400px] h-auto">
          <h1 className=" text-xl font-bold text-black">USER LOGIN</h1>
          <p className="text-red-600">{error}</p>
          <input required onChange={loginchangehandler} value={data.email} name="email" type="text" placeholder="Username" className="p-2 border-b-2 border-orange-500 outline-none " /> 
          <input required onChange={loginchangehandler} value={data.password} name="password" type="password" placeholder="Password" className="p-2 border-b-2 border-orange-500 outline-none " />  
      <div className="w-full relative">
        <button onClick={loginverify}   className="px-[50px]  text-black py-2 font-semibold text-sm border border-orange-500 bg-white">Sign In</button>
        <button onClick={()=>setswitcher("register")} className=" float-right underline">User Register Here</button>
      </div>
      </div>
      :
     <div className="p-4  grid grid-cols-1 shadow-xl gap-4 w-[400px] h-auto ">
          <h1 className=" text-xl font-bold">USER SIGNUP</h1>
          <input required onChange={changehandler} value={data.name} type="text" name="name" placeholder="name" className="p-2 border-b-2 border-orange-500 outline-none " />
          <input required onChange={changehandler} value={data.email} type="text" name="email" placeholder="Email" className="p-2 border-b-2 border-orange-500 outline-none " /> 
          <input required onChange={changehandler} value={data.password} type="password" name="password" placeholder="Password" className="p-2 border-b-2 border-orange-500 outline-none " />
          
      <div className="w-full relative">
        <button onClick={submituserdetails} className="p-2 bg-white text-black border border-orange-500 font-bold px-[50px] py-2">submit</button>
        <button onClick={()=>setswitcher("")} className=" float-right underline">if alearady registred</button>
      </div>
       
      </div>
      }
      
    </div>
    
  )
}

export default page
