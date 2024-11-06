import { Schema, model } from "mongoose";

let collection = "cities";

let schema = new Schema({
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    continent: {
        type: String,
        required: true
    },
    countryFlag: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    timezone: {
        type: String,
        required: true
    },
    climate: {
        type: String,
        required: true
    },
    cityDescription: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    cityImage: {
        type: String,
        required: true
    },
    typeOfCurrency: {
        type: String,
        required: true
    },

    comments: {
        type: Number,
        required: true
    },

    likes: {
        type: Number,
        required: true
    },

    
}, {
    timestamps: true
});

let City = model(collection, schema);

export default City;
