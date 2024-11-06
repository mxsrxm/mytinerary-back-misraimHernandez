import { response, Router } from "express";
import { allItineraries, itineraryById, itineraryByCity, itineraryByCityId } from "../controllers/itineraries/read.js";
import { create, createMany } from "../controllers/itineraries/create.js";
import { update } from "../controllers/itineraries/update.js";
import { deleteOne } from "../controllers/itineraries/delete.js";

const router = Router();

router.get('/all', allItineraries);
router.get('/id/:id', itineraryById);
router.get('/city/:x', itineraryByCity);
router.get('/cityId/:x', itineraryByCityId);


router.post('/create', create);
router.post('/createMany', createMany);

router.put('/update/', update);

router.delete('/delete', deleteOne);

export default router;