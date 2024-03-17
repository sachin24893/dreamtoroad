
import Navbar_content from './Navbar_content'
import { cookies } from 'next/headers'
const Navbar = () => {
  const islogin=  cookies().has("token")
  return (
    <div className=' sticky top-0 z-10' >
    <Navbar_content islogin={islogin}/>
      
    </div>
  )
}

export default Navbar
