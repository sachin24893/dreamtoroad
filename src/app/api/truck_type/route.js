import { db_connect } from "@/app/database/DB_connect"
import { truck_type } from "@/app/database/models/Truck_type";
import { NextResponse } from "next/server";

export async function POST(req){
      await db_connect();
      const payload=await req.json();
      await truck_type.create(payload);
return NextResponse.json("data saved")
}
export async function GET(){
      await db_connect();
      const data= await truck_type.find();
return NextResponse.json(data)
}