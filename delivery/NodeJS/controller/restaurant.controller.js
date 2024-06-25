import restaurantModel from "../Models/restaurant.model.js";

export function create(req, res) {

    const { Name,
        rating, time, cusine, location} = req.body;

    const newRestaurant = new restaurantModel({
        Name,
        rating, time, cusine, location
    });

    newRestaurant.save().then(data => {
        if(!data) {
            res.status(400).send("something went wrong");
        }

        res.send(data);
    }).catch(err => res.status(500).json({message: err.message}));
}

export function fetch(req, res) {
    restaurantModel.find().then(data => {
        if(!data) {
            res.status(404).json({message: "Data not found"});
        }

        res.send(data);
    }).catch(err => res.status(500).json({message: err.message}));
}

export function fetchOne(req, res) {
    const _id = req.params.id;

    restaurantModel.findById(_id).then(data => {
        if(!data) {
            res.status(404).json({message: "Data not found"});
        }

        res.send(data);
    }).catch(err => res.status(500).json({message: err.message}));
}

export function updateOne(req, res) {
    const _id = req.params.id;

    restaurantModel.findByIdAndUpdate(_id, {avgRating: 4.5}).then(data => {
        if(!data) {
            res.status(404).json({message: "Data not found"});
        }

        res.send(data);
    }).catch(err => res.status(500).json({message: err.message}));
}

export function deleteOne(req, res) {
    const _id = req.params.id;

    restaurantModel.findByIdAndDelete(_id).then(data => {
        if(!data) {
            res.status(404).json({message: "Data not found"});
        }

        res.send(data);
    }).catch(err => res.status(500).json({message: err.message}));

}