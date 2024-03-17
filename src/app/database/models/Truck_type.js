const {mongoose } = require("mongoose");

const truck_schema= new mongoose.Schema({
      Truck_type:String,
            size:String,
            house_hold_capacity:String,
            max_weight:String
})
export const truck_type=mongoose.models.truck_types||mongoose.model("truck_types",truck_schema)