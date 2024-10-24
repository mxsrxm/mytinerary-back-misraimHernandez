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

let cityByDestination = async (req, res, next) => {
    try {
        let destination = req.params.x;
        let city = await City.find({ destination: destination })
        return res.status(200).json({
            response: city
        })

    } catch (error) {
        next(error)

    }
}

let cityByDepartureDate = async (req, res, next) => {
    try {
        let departureDate = req.params.x;
        let city = await City.find({ departureDate: departureDate })
        return res.status(200).json({
            response: city
        })

    } catch (error) {
        next(error)

    }
}

let cityByMaxPeople = async (req, res, next) => {
    try {
        let maxPeople = req.params.x;
        let city = await City.find({ maxPeople: maxPeople })
        return res.status(200).json({
            response: city
        })

    } catch (error) {
        next(error)

    }
}

let cityByExactDestination = async (req, res, next) => {
    try {
        let { destination } = req.query;
        let query = {};

        if (destination) {
            query.destination = { $regex: '^' + destination, $options: 'i' };
        }

        let all = await City.find(query); 
        return res.status(200).json({
            response: all,
        });
    } catch (error) {
        next(error);
    }
};

let citiesByCompoundSearch = async (req, res, next) => {
    try {
        let { destination, departureDate, maxPeople } = req.query;
        console.log(destination, departureDate, maxPeople);

        let query = {};

        if (destination) {
            query.destination = { $regex:'^'+destination, $options: 'i' };
        }

        if (departureDate) {
            const date = new Date(departureDate);
            query.departureDate = { $gte: new Date(date.setHours(0, 0, 0, 0)), $lt: new Date(date.setHours(23, 59, 59, 999)) };
        }

        if (maxPeople) {
            const max = parseInt(maxPeople, 10);
            if (!isNaN(max) && max > 0) {
                query.maxPeople = { $gte: 1, $lte: max }; 
            }
        }

        let all = await City.find(query);
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error);
    }
};

export { allCities, cityById, cityByDestination, cityByDepartureDate, cityByMaxPeople, cityByExactDestination, citiesByCompoundSearch }