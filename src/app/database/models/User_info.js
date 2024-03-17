const { mongoose } = require("mongoose");

const user_info_model= new mongoose.Schema({
      name:String,
      email:{
            type:String,   
      },
      contact:String,
      city:String,
      message:String
})

export const user_info=mongoose.models.user_info||mongoose.model("user_info",user_info_model)