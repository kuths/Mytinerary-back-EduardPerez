import Itinerary from "../../models/itinerary.js";

let allItinerary = async (req, res, next) => {

    try {
        let all = await Itinerary.find();
        return res.status(200).json({ response: all });
    } catch (error) {
        next(error)
    }
    
};
let itineraryByName = async (req, res, next) => {
    try {
        let nameQuery = req.params.name; 

        if (!nameQuery || nameQuery.trim() === "") {
            return res.status(400).json({ error: "Bad request" });
        }

        let itinerary = await Itinerary.find({ name: nameQuery });

        return res.status(200).json({ response: itinerary });
    } catch (error) {
        next(error);
    }
};

let itineraryById = async (req, res, next) => {
    try {
        let itineraryId = req.params.id;

        if (!itineraryId) {
            return res.status(400).json({ error: "Bad request" });
        }

        let itinerary = await Itinerary.findById(itineraryId);

        return res.status(200).json({ response: itinerary });
    } catch (error) {
        next(error);
    }
};

export {allItinerary, itineraryById, itineraryByName}