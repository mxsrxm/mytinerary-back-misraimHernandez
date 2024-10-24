import mongoose from "mongoose";    

let url = process.env.URI_MONGO

console.log(url)

async function connectionDatabase(){
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("Connected to MongoDB function")
    } catch (error) {
        console.log("Error connecting to MongoDB", error)
        
    }
}

connectionDatabase()