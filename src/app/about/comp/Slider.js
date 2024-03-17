import Image from "next/image"

const Slider = () => {
  return (
      <div className="bg-white  space-y-4 rounded-xl container -mt-11 mx-auto">

    <div className="grid grid-cols-3 rounded-xl max-lg:grid-cols-1  bg-white gap-8 p-6">
      <div className=" p-6 rounded-xl space-y-3 hover:-translate-y-4 duration-700 shadow-lg">
      <Image className=" rounded-full shadow-lg" src={"/asset/mission.jpg"} alt="image" width={100} height={100}/>
            <h1 className="text-xl font-semibold" >OUR MISSION</h1>
            <p  className=" text-gray-600 leading-7">
                  Stay responsive to consumers’ requirement, find innovative and flexible solutions and strive to achieve customer satisfaction with our performance, honesty, and integrity. We aim to achieve our esteemed patrons’ trust and develop a lasting relationship with them.
            </p>
      </div>

       <div className=" p-6 rounded-xl space-y-3 hover:-translate-y-4 duration-700 shadow-lg">
      <Image className=" rounded-full shadow-lg" src={"/asset/vision.jpg"} alt="image" width={100} height={100}/>
            <h1 className="text-xl font-semibold" >OUR VISION</h1>
            <p  className=" text-gray-600 leading-7">
                  Stay responsive to consumers’ requirement, find innovative and flexible solutions and strive to achieve customer satisfaction with our performance, honesty, and integrity. We aim to achieve our esteemed patrons’ trust and develop a lasting relationship with them.
            </p>
      </div>

       <div className=" p-6 rounded-xl space-y-3 hover:-translate-y-4 duration-700 shadow-lg">
      <Image className=" rounded-full shadow-lg" src={"/asset/mission.jpg"} alt="image" width={100} height={100}/>
            <h1 className="text-xl font-semibold" >OUR COMMITMENT</h1>
            <p  className=" text-gray-600 leading-7">
                  Stay responsive to consumers’ requirement, find innovative and flexible solutions and strive to achieve customer satisfaction with our performance, honesty, and integrity. We aim to achieve our esteemed patrons’ trust and develop a lasting relationship with them.
            </p>
      </div>
   </div>
    </div>
  )
}

export default Slider
