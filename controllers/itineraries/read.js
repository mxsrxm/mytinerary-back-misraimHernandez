import Itinerary from "../../models/Itinerary.js";
import "../../models/City.js";
import City from "../../models/City.js";

let allItineraries = async (req, res, next) => {
    try {
        let all = await Itinerary.find().populate('cityId', '').exec()
        return res.status(200).json({
            response: all
        })

    } catch (error) {
        next(error)

    }
}

let itineraryById = async (req, res, next) => {
    try {
        let idQuery = req.params.id
        let all = await Itinerary.findById({ _id: idQuery })
        return res.status(200).json({
            response: all
        })
    }
    catch (error) {
        next(error)
    }
}

let itineraryByCity = async (req, res, next) => {
    try {
        let city = req.params.x;
        let query = {};

        if (city) {
            query.city = { $regex: '^' + city + '$', $options: 'i' };
        }

        let cityResult = await City.find(query);

        let cityIdResult  = cityResult[0]._id;

        let all = await Itinerary.find({ cityId: cityIdResult }).populate('cityId', 'city').exec();

        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error);
    }
};

let itineraryByCityId = async (req, res, next) => {
    try {
        let cityId = req.params.x;  // Obtienes el cityId desde los parámetros de la URL

        // Aquí no es necesario hacer un regex, solo buscamos por cityId directamente
        let all = await Itinerary.find({ cityId: cityId }).populate('cityId', '_id city').exec();

        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error);
    }
};


export { allItineraries, itineraryById, itineraryByCity, itineraryByCityId }