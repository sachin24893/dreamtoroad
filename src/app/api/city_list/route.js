import { db_connect } from "@/app/database/DB_connect";
import { cities} from "@/app/database/models/City_list";
import { NextResponse } from "next/server";

export async function GET(){
      await db_connect();
      const city=await cities.find();
       return NextResponse.json(city)
}