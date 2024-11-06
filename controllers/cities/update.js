import City from "../../models/City.js";

let update = async (req, res, next) => {
    try {
        let city = req.body;

        let updateCity = await City.updateOne(
            { _id: city._id },
            {
                country: city.country,
                city: city.city,
                continent: city.continent,
                countryFlag: city.countryFlag,
                language: city.language,
                timezone: city.timezone,
                climate: city.climate,
                cityDescription: city.cityDescription,
                shortDescription: city.shortDescription,
                longDescription: "This is a long description",
                cityImage: city.cityImage,
                typeOfCurrency: city.typeOfCurrency
            }
        )

        if (updateCity) {
            res.status(200).json({ 
                response: "City updated successfully", updateCity
            })
        } else {
            res.status(400).json({ 
                response: "City not updated", updateCity
            })
        }
        
    } catch (error) {
        next(error)
    }

}

export { update }
