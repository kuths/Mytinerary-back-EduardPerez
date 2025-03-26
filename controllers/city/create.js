import City from "../../models/city.js";

let create = async (req, res, next) => {
    try{
        let cityInfo = req.body
        
        console.log(cityInfo);

        let createStore = await City.create(cityInfo)
        return res.status(201).json({
            response: createStore
        })


    } 
    
    catch (error) {
        return res.status(500).json({ response: error.message });
    }

}

export default create