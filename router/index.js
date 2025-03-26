import { Router } from "express";
import cityRouter from "./cityRouter.js";

let routerIndex = Router();
routerIndex.use("/city", cityRouter)

export default routerIndex;