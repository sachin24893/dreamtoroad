"use client"
import Link from "next/link"
import { usePathname,useRouter } from "next/navigation";
import {  useEffect, useState } from "react";
import { FaBars} from "react-icons/fa6";

const Navbar_content = ({islogin}) => {
     const [isopen,setopen]=useState(false)
     const pathname=usePathname();
const route=useRouter();

const userlogout=async()=>{
 await fetch("http://localhost:3000/api/user",{method:"delete"}) 
 route.refresh();

}


  return (
    <div className="w-full bg-black bg-opacity-70 flex  md:items-center shadow-lg max-md:flex-col  justify-between p-3">
    <div className=" flex max-md:justify-between ">
    
    <span className=" hover:scale-110 duration-700 font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">ROAD TO DREAM</span>
    <button onClick={()=>setopen(!isopen)} className=" md:hidden "><FaBars className="text-2xl text-blue-800"/></button>
    </div>  
    {/* menu.................................. */}
          <div className={isopen?"space-x-4 flex max-md:flex-col max-md:items-center font-semibold":"space-x-4 max-md:hidden  flex max-md:flex-col max-md:items-center text-white font-semibold"}>
      <Link href={"/"}></Link>
      <Link className={pathname==="/"?"text-orange-600":"hover:text-orange-600"} href={"/"}>HOME</Link>     
      <Link className={pathname==="/about"?"text-orange-600":"hover:text-orange-600"} href={"/about"}>ABOUT US</Link>
      <Link className={pathname==="/truck_type"?"text-orange-600":"hover:text-orange-600"} href={"/truck_type"}>TRUCK TYPE</Link>
      <Link className={pathname==="/contact"?"text-orange-600":"hover:text-orange-600"} href={"/contact"}>CONTACT</Link> 
      <Link className={pathname==="/book_truck"?"text-orange-600":"hover:text-orange-600"} href={"/book_truck"}>BOOK TRUCK</Link>
      <button onClick={userlogout}>{islogin?"logout":null}</button>
      </div>
   
    </div>
  )
}

export default Navbar_content
