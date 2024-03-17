import { db_connect } from "@/app/database/DB_connect";
import { user_credentail } from "@/app/database/models/User_credential";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import {cookies} from "next/headers"




export async function POST(req,res){
        await db_connect()
      const payload= await req.json()
      if(!payload.name==""&&!payload.email==""&&!payload.password==""){
      await user_credentail.create(payload)
      return NextResponse.json("user registred")
      }
      else{
            try {
 const res= await user_credentail.find({email:payload.email,password:payload.password})
 const {name,email,_id}=res[0];
 const token=jwt.sign({name,email,_id},"asdfg")
cookies().set('token',token)
return NextResponse.json("you are loged in")

 } catch (error) {
      return NextResponse.json("pls enter correct details")
 }

          
      }

}

 export async function DELETE(){
      cookies().delete("token")
    return NextResponse.json("user logout")
 }
