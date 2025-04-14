import Itinerary from "../../models/itinerary.js";

let create = async (req, res, next) => {
    try{
        let itineraryInfo = req.body
        
        console.log(itineraryInfo);

        let createItinerary = await Itinerary.create(itineraryInfo)
        return res.status(201).json({
            response: createItinerary
        })


    } 
    
    catch (error) {
        return res.status(500).json({ response: error.message });
    }

}

export default create