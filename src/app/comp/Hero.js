
import Image from "next/image"
import Check_fare from "./Check_fare"
const Hero = () => {

  return (
    <div className="w-full relative grid grid-cols-2  mt-[60px] max-lg:grid-cols-1">
    <div className="  w-full overflow-hidden">
     <Image className=" hover:scale-125 duration-700" src={"/asset/hero.jpg"}  alt="truck image" width={2000} height={400}  />
    </div>
    <Check_fare/>
    </div>
   
  )
}

export default Hero
