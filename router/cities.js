import { response, Router } from "express";
import { allCities, cityById, cityByCity, cityByCountry, cityByContinent } from "../controllers/cities/read.js";
import { create, createMany } from "../controllers/cities/create.js";
import { update } from "../controllers/cities/update.js";
import { deleteOne } from "../controllers/cities/delete.js";

const router = Router();

router.get('/all', allCities);
router.get('/id/:id', cityById);
router.get('/city/:x', cityByCity);
router.get('/country/:x', cityByCountry);
router.get('/continent/:x', cityByContinent);

router.post('/create', create);
router.post('/createMany', createMany);

router.put('/update/', update);

router.delete('/delete', deleteOne);

export default router;