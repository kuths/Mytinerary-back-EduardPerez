import { Schema, model } from "mongoose";
import mongoose from "mongoose"; 

let collection = 'Itinerary';

let schema = new Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    price: { type: String, required: true },
    Hashtags: { type: String, required: true },
    cityId: { type: mongoose.Schema.Types.ObjectId, ref: 'City' } 
}, {
    timestamps: true 
});

let Itinerary = model(collection, schema);

export default Itinerary;
