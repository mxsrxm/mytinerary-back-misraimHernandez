import Itinerary from "../../models/Itinerary.js";

let update = async (req, res, next) => {
    try {
        let itinerary = req.body;

        let updateItinerary = await Itinerary.updateOne(
            { _id: itinerary._id },
            {
                title: itinerary.title,
                userPhoto: itinerary.userPhoto,
                userName: itinerary.userName,
                price: itinerary.price,
                days: itinerary.days,
                totalHours: itinerary.totalHours,
                destination: itinerary.destination,
                longDescription: itinerary.longDescription,
                shortDescription: itinerary.shortDescription,
                itineraryImage: itinerary.itineraryImage,
                departureDate: itinerary.departureDate,
                returnDate: itinerary.returnDate,
                numReservation: itinerary.numReservation,
                includesTransportation: itinerary.includesTransportation,
                includesFood: itinerary.includesFood,
                includesAccommodation: itinerary.includesAccommodation
            }
        )

        if (updateItinerary) {
            res.status(200).json({
                response: "Itinerary updated successfully", updateItinerary
            })
        } else {
            res.status(400).json({
                response: "Itinerary not updated", updateItinerary
            })
        }

    } catch (error) {
        next(error)
    }

}

export { update }
