import { response } from "express";
import Itinerary from "../../models/Itinerary.js";

let deleteOne  = async (req, res, next) => {
    try {
        
        let deleteItinerary = await Itinerary.deleteOne({
            _id: req.body._id
        })

        return res.status(200).json({
            message: "Itinerary deleted successfully",
            data: deleteItinerary
        })
    } catch (error) {
        next(error)
    }
}

export {deleteOne};