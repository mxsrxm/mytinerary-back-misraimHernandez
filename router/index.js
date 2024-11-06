import { Router } from "express";
import citiesRouter from "../router/cities.js";
import itinerariesRouter from "../router/itineraries.js";

const router = Router();

router.use('/cities', citiesRouter)
router.use('/itineraries', itinerariesRouter)


export default router