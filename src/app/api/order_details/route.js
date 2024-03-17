import { db_connect } from "@/app/database/DB_connect";
import { NextResponse } from "next/server";
const multer  = require('multer')


export async function POST(req){
      const upload = multer({ dest: 'uploads/' })
      db_connect();
      const payload=await req.json();
      upload.single(payload.image)
      console.log(payload)
      return NextResponse.json(payload)
      


} 