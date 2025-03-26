import { Router } from "express";
import { allCity, cityByName, cityById } from "../controllers/city/read.js";
import create from "../controllers/city/create.js";
import updateCity from "../controllers/city/modify.js";
import deleteCity from "../controllers/city/delete.js";

const cityRouter = Router();
cityRouter.get ('/allCity', allCity )
cityRouter.get('/name/:name?', cityByName)
cityRouter.get('/id/:id', cityById)
cityRouter.post('/cityCreate', create)
cityRouter.put('/id/:id', updateCity);
cityRouter.delete('/delete/:id', deleteCity);


export default cityRouter 