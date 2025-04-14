import { Router } from "express";
import cityRouter from "./cityRouter.js";
import itineraryRouter from "./itineraryRouter.js";

let routerIndex = Router();
routerIndex.use("/city", cityRouter)
routerIndex.use("/itinerary", itineraryRouter)

export default routerIndex;