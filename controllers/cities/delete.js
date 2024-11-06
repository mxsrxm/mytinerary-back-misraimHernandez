import { response } from "express";
import City from "../../models/City.js";

let deleteOne  = async (req, res, next) => {
    try {
        
        let deleteCity = await City.deleteOne({
            _id: req.body._id
        })

        return res.status(200).json({
            message: "City deleted successfully",
            data: deleteCity
        })
    } catch (error) {
        next(error)
    }
}

export {deleteOne};