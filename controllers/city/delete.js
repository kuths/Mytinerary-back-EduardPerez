import mongoose from "mongoose";
import City from "../../models/city.js";

let deleteCity = async (req, res, next) => {
    try {
        let cityId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(cityId)) {
            return res.status(400).json({ error: "Bad request" });
        }

        let deletedCity = await City.findByIdAndDelete(cityId);

        return res.status(200).json({ message: "City deleted successfully", response: deletedCity });
    } catch (error) {
        next(error);
    }
};

export default deleteCity