import { Router } from "express";
import { allCity, cityByName, cityById, updateCity, deleteCity} from "../controllers/city/read.js";
import create from "../controllers/city/create.js";

const cityRouter = Router();
cityRouter.get ('/allCity', allCity )
cityRouter.get('/name/:name?', cityByName)
cityRouter.get('/id/:id', cityById)
cityRouter.post('/cityCreate', create)
cityRouter.put('/id/:id', updateCity);
cityRouter.delete('/delete/:id', deleteCity);


export default cityRouter 