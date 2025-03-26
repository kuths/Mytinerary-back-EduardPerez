import { Schema,model } from "mongoose";

let collection = 'City'

let schema = Schema ({
    name: {type:String,required:true},
    img: {type:String,required:true}, 
    country: {type:String,required:true},
    continent: {type:String,required:true},
    currency: {type:String,required:true}
},{
    timestramp:true
})

let City = model(collection,schema)

export default City