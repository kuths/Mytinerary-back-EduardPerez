import City from "../../models/city.js";

let allCity = async (req, res, next) => {

    try {
        let all = await City.find();
        return res.status(200).json({ response: all });
    } catch (error) {
        next(error)
    }
    
};

let cityByName = async (req, res, next) => {
    try {
        let nameQuery = req.params.name; 

        if (!nameQuery || nameQuery.trim() === "") {
            return res.status(400).json({ error: "Bad request" });
        }

        let city = await City.find({ name: nameQuery });

        return res.status(200).json({ response: city });
    } catch (error) {
        next(error);
    }
};

let cityById = async (req, res, next) => {
    try {
        let cityId = req.params.id;

        if (!cityId) {
            return res.status(400).json({ error: "Bad request" });
        }

        let city = await City.findById(cityId);

        return res.status(200).json({ response: city });
    } catch (error) {
        next(error);
    }
};




export { allCity, cityByName, cityById,}