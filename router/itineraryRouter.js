import { Router } from "express";
import { allItinerary, itineraryById, itineraryByName } from "../controllers/itinerary/read.js";
import create from "../controllers/itinerary/create.js";
import deleteItinerary from "../controllers/itinerary/delete.js"
import updateItinerary from "../controllers/itinerary/modify.js";


const itineraryRouter = Router();
itineraryRouter.get ('/allItinerary', allItinerary )
itineraryRouter.get('/name/:name?', itineraryByName)
itineraryRouter.get('/id/:id', itineraryById)
itineraryRouter.post('/itineraryCreate', create)
itineraryRouter.put('/idItinerary/:id', updateItinerary);
itineraryRouter.delete('/deleteItinerary/:id', deleteItinerary);

export default itineraryRouter 