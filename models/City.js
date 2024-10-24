import { Schema, model } from "mongoose";

let collection = "cities";

let schema = new Schema({
    ownID: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    countryFlag: {
        type: String,
        required: true
    },
    activityDescription: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    activityImage: {
        type: String,
        required: true
    },
    price: {
        type: Number,
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
    days: {
        type: Number,
        required: true
    },
    departureDate: {
        type: Date,
        required: true
    },
    returnDate: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true
    },
    includesTransportation: {
        type: Boolean,
        required: true
    },
    includesFood: {
        type: Boolean,
        required: true
    },
    includesAccommodation: {
        type: Boolean,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    continent: {
        type: String,
        required: true
    },
    badge: {
        type: String,
        required: true
    },
    typeOfCurrency: {
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
    }
}, {
    timestamps: true
});

let City = model(collection, schema);

export default City;
