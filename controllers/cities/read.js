import City from "../../models/City.js";

let allCities = async (req, res, next) => {
    try {
        let all = await City.find()
        return res.status(200).json({
            response: all
        })

    } catch (error) {
        next(error)

    }
}

let cityById = async (req, res, next) => {
    try {
        let idQuery = req.params.id
        let all = await City.findById({ _id: idQuery })
        return res.status(200).json({
            response: all
        })
    }
    catch (error) {
        next(error)
    }
}

let cityByCity = async (req, res, next) => {
    try {
        let city = req.params.x;
        let query = {};

        if (city) {
            query.city = { $regex: '^' + city, $options: 'i' };
        }

        let all = await City.find(query); 
        return res.status(200).json({
            response: all,
        });
    } catch (error) {
        next(error);
    }
};

let cityByCountry = async (req, res, next) => {
    try {
        let country = req.params.x;
        let city = await City.find({ country: { $regex: '^' + country + '$', $options: 'i' } });
        return res.status(200).json({
            response: city,
        });
    } catch (error) {
        next(error);
    }
};

let cityByContinent = async (req, res, next) => {
    try {
        let continent = req.params.x;
        let city = await City.find({ continent: { $regex: '^' + continent + '$', $options: 'i' } });
        return res.status(200).json({
            response: city,
        });
    } catch (error) {
        next(error);
    }
};

export { allCities, cityById, cityByCity, cityByCountry ,cityByContinent}