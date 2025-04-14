import mongoose from "mongoose";
import Itinerary from "../../models/itinerary.js";

let deleteItinerary = async (req, res, next) => {
    try {
        let itineraryId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(itineraryId)) {
            return res.status(400).json({ error: "Bad request" });
        }

        let deletedItinerary = await Itinerary.findByIdAndDelete(itineraryId);

        return res.status(200).json({ message: "Itinerary deleted successfully", response: deletedItinerary });
    } catch (error) {
        next(error);
    }
};

export default deleteItinerary