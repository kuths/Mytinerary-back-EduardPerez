import mongoose from "mongoose";
import Itinerary from "../../models/itinerary.js";

let updateItinerary = async (req, res, next) => {
    try {
        let itineraryId = req.params.id;
        let newData = req.body; 

        if (!mongoose.Types.ObjectId.isValid(itineraryId)) {
            return res.status(400).json({ error: "Bad request" });
        }

        let updatedIitnerary = await Itinerary.findByIdAndUpdate(itineraryId, newData, { new: true });

        return res.status(200).json({ response: updatedIitnerary });
    } catch (error) {
        next(error);
    }
};

export default updateItinerary