"use client"
import React, { useState } from 'react'
import Basic_details from './comp/Basic_details'
import Personal_info from './comp/Personal_info'
import Payment from './comp/Payment'

const page = () => {
  const [changepage,setchangepage]=useState(1)
  const [data,setdataa]=useState();
console.log(data)
  return (
    <div className='container m-auto p-4 '>
  {changepage==0&&(<Basic_details setchangepage={setchangepage} setdataa={setdataa}/>)}
    {changepage==1&&(<Personal_info  setchangepage={setchangepage} setdataa={setdataa}/>)}
    {changepage==2&&(<Payment/>)} 
    </div>
  )
}

export default page