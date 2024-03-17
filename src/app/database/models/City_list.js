const {mongoose } = require("mongoose");

const city_schema= new mongoose.Schema({
      city:{type:String,unique:true}
})
export const cities=mongoose.models.city_lists||mongoose.model("city_lists",city_schema)