import  mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema ({
    Name: String,
    rating: String, time: String, cusine: String, location: String
    });

    const restaurantModel = mongoose.model("restaurants", restaurantSchema);

    export default restaurantModel;