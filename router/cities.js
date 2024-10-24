import { response, Router } from "express";
import { allCities, cityById, cityByDestination, cityByDepartureDate, cityByMaxPeople, cityByExactDestination, citiesByCompoundSearch } from "../controllers/cities/read.js";
import { create, createMany } from "../controllers/cities/create.js";

const router = Router();

router.get('/all', allCities);
router.get('/id/:id', cityById);
router.get('/destination/:x', cityByDestination);
router.get('/departureDate/:x', cityByDepartureDate);
router.get('/maxPeople/:x', cityByMaxPeople);

router.get('/exactDestination', cityByExactDestination);
router.get('/compoundSearch', citiesByCompoundSearch);

router.post('/create', create);
router.post('/createMany', createMany);

export default router;