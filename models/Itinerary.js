import { Schema, model } from "mongoose";

let collection = "itineraries";

let schema = new Schema({
    cityId: {
        type: Schema.Types.ObjectId,
        ref: "cities",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    userPhoto: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    days: {
        type: Number,
        required: true
    },
    totalHours: {
        type: Number,
        required: true
    },
    likes: {
        type: Number,
        required: true,
        default: 0

    },
    comments: {
        type: Number,
        required: true,
        default: 0
    },
    destination: {
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
    itineraryImage: {
        type: String,
        required: true
    },
    badges: {
        type: [String],
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
    numReservation: {
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
   
}, {
    timestamps: true
});

let Itinerary = model(collection, schema);

export default Itinerary;
