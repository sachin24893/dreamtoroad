"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Truck_capacity = () => {
      const route=useRouter();
      const [capacity_list,set_capacity_list]=useState([])
      useEffect(()=>{
           const res =fetch("http://localhost:3000/api/truck_type").then((res)=>{
                  return res.json()
            })
            res.then((data)=>{set_capacity_list(data)})
      },[])
  return (
    <div className=' mt-4 overflow-x-auto'>

      <table className='min-w-full divide-y-2 overflow-hidden'>
            <thead className=' bg-blue-400 '>
                  <tr>
                        <th>TRUCK TYPE</th>
                  <th>SIZE (FT)</th>
                  <th>HOUSE HOLD CAPACITY</th>
                  <th>MAX WEIGHT</th>
                  </tr>
            </thead>
            <tbody>
                  {
                   capacity_list==""?null:capacity_list.map((list,index)=>{
                        return(
                              <tr onClick={()=>route.push(`/truck_type/${list.Truck_type}`)} key={index} className='text-center cursor-pointer  odd:bg-gray-300 even:bg-gray-400 hover:bg-gray-600 '>
                                    <td className='p-2' >{list.Truck_type}</td>
                                    <td>{list.size}</td>
                                    <td>{list.house_hold_capacity}</td>
                                    <td>{list.max_weight}</td>
                              </tr>
                             
                        )
                      })  
                  }
            </tbody>
      </table>
      </div>
    
  )
}

export default Truck_capacity
