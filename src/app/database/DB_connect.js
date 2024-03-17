import mongoose from "mongoose"

export const db_connect= async()=>{
  try {
 await mongoose.connect("mongodb+srv://sachin:tichkule@cluster0.kae80up.mongodb.net/productDB?retryWrites=true&w=majority&appName=AtlasApp")     
  } catch (error) {
      console.log("error aa gaya")
  }
 


}