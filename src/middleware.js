import { cookies } from "next/headers"
import { NextResponse } from "next/server"
 export function middleware(req){
      const token=cookies().has("token")
      const pathname=req.nextUrl.pathname
     if(token){
     if(pathname=="/login"){
     return NextResponse.redirect(new URL("/",req.url)) 
     }
     }
// ............................................................

     if(pathname=="/book_truck"){
       if(!token){
return NextResponse.redirect(new URL("/login",req.url))
      }

}
//............................................

      

 }

 
