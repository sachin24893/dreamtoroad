"use client"
import React, { useEffect, useState } from 'react'
import Modal from './Modal'
const Check_fare = () => {      
  const [isopen,setisopen]=useState(false)
  const [cities,setcities]=useState([])
  const [pickup,setpickup]=useState("Pick Up Location")
  const [drop,setdrop]=useState("Drop Location")
  const [value,setvalue]=useState(0)
  const[city,set_city]=useState([])
const get_cities=async()=>{
  const res=await fetch("http://localhost:3000/api/city_list")
return await res.json()
}
useEffect(()=>{
  const city=get_cities()
  city.then((res)=>set_city(res))
},[])


// this function is used for search city........................
const changehandler=(e)=>{
  console.log(e.target.value)
  const cit=city.map((ele)=>ele.city)
 const city_name=cit.filter((ele)=>{
return( ele.toLowerCase().includes(e.target.value))
})
setcities(city_name)
}
// this function is used for pick location...................
const check_location=(i)=>{
 
  if(i.target.value==1){
  setisopen(true)
  setvalue(1)
  }else{
    setisopen(true)
    setvalue(2)
  }
}
// this function is used for select city.................
const set_pickup_drop_value=(list)=>{
  if(value==1){
  setpickup(list)
  setisopen(false)
}else{
  setdrop(list)
  setisopen(false)
}
}
//this function is used for che fare.........................
const check_fare=(i)=>{
  if(pickup=="Pick Up Location"&&drop=="Drop Location"){
  alert("pls fill location fields")
  }
  else{
    console.log({pickup,drop})
  setdrop("Drop Location")
  setpickup("Pick Up Location")
  
  }
}



  return (  
  <>
   <Modal isopen={isopen} onrequestclose={()=>setisopen(false)}>
   <div>
    <input type="text" onChange={changehandler} placeholder=' location search here' className='w-full p-2 border rounded-md border-orange-500' />
    <div className='w-full h-[400px] overflow-y-scroll'>
      <ul className=' space-y-1'>
        {cities==null?null:cities.map((list,index)=>{
          return(
            <li className=' cursor-pointer ' onClick={()=>set_pickup_drop_value(list)} key={index}>{list}</li>
          )
        })}
      </ul>
    </div>
   </div>
   </Modal>
   <div className=' space-y-7 p-20 text-center'>
   <h1 className='text-2xl font-bold'>Online Booking Truck Made Easy</h1>
   <button value={1} onClick={check_location} className=' p-2 border-b-2 border-orange-500 w-full text-left cursor-text active:bg-gray-300'>{pickup}</button>
   <button value={2} onClick={check_location} className=' p-2 border-b-2 border-orange-500 w-full text-left cursor-text active:bg-gray-300'>{drop}</button>
   <button onClick={check_fare} className='w-full p-2 bg-orange-500 font-bold rounded-md'>Check Fare</button>
      
      </div>
      
  </>
  )
}

export default Check_fare
