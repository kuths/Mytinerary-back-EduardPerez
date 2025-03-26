import mongoose from "mongoose";
import City from "../../models/city.js";

let updateCity = async (req, res, next) => {
    try {
        let cityId = req.params.id;
        let newData = req.body; 

        if (!mongoose.Types.ObjectId.isValid(cityId)) {
            return res.status(400).json({ error: "Bad request" });
        }

        let updatedCity = await City.findByIdAndUpdate(cityId, newData, { new: true });

        return res.status(200).json({ response: updatedCity });
    } catch (error) {
        next(error);
    }
};

export default updateCity