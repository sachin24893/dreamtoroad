import Hero_content from "./comp/Hero_content"
import Slider from "./comp/Slider"
import Why_choose_us from "./comp/Why_choose_us"
import { city } from "../comp/utils/City_list"
import Link from "next/link"

export const metadata={
      title:"know about eveything"      
}
const page = () => {
  return (
      <>
    <div className=" w-full bg-blue-950 p-11  ">
    <p className="text-white text-6xl font-bold">ABOUT US</p>
    </div>
    <Slider/>
    <Hero_content/>
    <Why_choose_us/>
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
    </>
  )
}

export default page
