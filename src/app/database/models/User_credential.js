const { mongoose} = require("mongoose");

const user_model= new mongoose.Schema({
      name:String,
      email:String,
      password:String
})
export const user_credentail=mongoose.models.user_credentail || mongoose.model("user_credentail",user_model)