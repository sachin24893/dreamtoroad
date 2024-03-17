import React from 'react'
import Hero from './comp/Hero'
import Truck_capacity from './comp/Truck_capacity'
import Truck_types_indai from './comp/Truck_types_indai'


const page = () => {
  return (
    <div>
      <Hero/>
      <Truck_capacity/>
     
      <Truck_types_indai/>
    </div>
  )
}

export default page

