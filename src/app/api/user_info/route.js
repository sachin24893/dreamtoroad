import { db_connect } from "@/app/database/DB_connect";
import { user_info } from "@/app/database/models/User_info";
import { NextResponse } from "next/server";

export async function POST(req){
  await db_connect();
 const payload= await req.json();
 if(payload.email){  
 await user_info.create(payload)   
  return NextResponse.json("infomation saved")
 }else{
      return NextResponse.json("infromation not saved")
 }

}