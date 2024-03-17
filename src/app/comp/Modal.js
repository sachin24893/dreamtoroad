
const Modal = ({isopen,children,onrequestclose}) => {
  return (
     <>
      {isopen?
      <div className="w-full h-full bg-black bg-opacity-75 fixed z-50 top-0 left-0">
      <button onClick={onrequestclose} className=" text-white  right-0">cancel</button>
    <div className=' w-full  h-full  flex items-center justify-center p-7'>
    <div className=" bg-white shadow-xl rounded-md p-4 w-[800px] ">
      {children}
    </div>
    </div></div>:null 
}
</>
)}

export default Modal

