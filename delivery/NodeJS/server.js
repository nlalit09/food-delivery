import express from "express";
import mongoose from "mongoose";
import { routes } from "./routes/restaurants.routes.js";
import { userRoutes } from "./routes/users.routes.js";
//import { menuRoutes } from "./routes/restaurant-menu.routes.js";
//import cors from "cors";

const app = express();

//Built in middlewares
app.use(express.json());
//app.use(cors());

app.listen("5111", () => {
    console.log("server is running on port 5111");
});

// Application level middleware
app.use(logUserRequest);

routes(app);
userRoutes(app);
//menuRoutes(app);

mongoose.connect("mongodb+srv://geeks:Geeksforgeeks123!@cluster0.hmpai02.mongodb.net/");

const db = mongoose.connection;

db.on("error", () => {
    console.log("connection not successful");
})

db.on("open", () => {
    console.log("connection is successful");
})
// CRUD Operations
// Create
// Read
// Update
// Delete

// HTTP Methods
// POST
// GET
// PUT
// DELETE

const users = [
    {
        id: 1,
        firstName: "Anshika",
        age: 67
    },
    {
        id: 2,
        firstName: "Ankit",
        age: 45
    },
    {
        id: 3,
        firstName: "John",
        age: 12
    },
    {
        id: 4,
        firstName: "Alice",
        age: 23
    }
];

function logUserRequest(req, res, next) {
    console.log("user has initiated request");
    next();
}

app.get("/", (req, res) => {
    res.send("Learning NodeJS");
})

// route level middlewares
app.get("/users", authUser, (req, res) => {
    res.send(users);
})

function authUser(req, res, next) {
    console.log("auth user");
    next();
}

app.post("/users", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    const user = {
        name: name,
        age: age
    }

    users.push(user);

    res.send(users);
})

// Update any user by id

app.put("/user/:id", (req, res) => {
    const id = req.params.id;

    const user = users.find(user => user.id == id);

    if(!user) {
        res.status(404).json({message: "Invalid Id"});
    }

    const keys = Object.keys(req.body);

    keys.forEach(key => {
        if(!user[key]) {
            res.status(404).end({message: "Invalid Key"});
        }

        user[key] = req.body[key];
    });

    res.json(users);
})

// Delete a user with particular id

app.delete("/user/:id", (req, res) => {
    const id = req.params.id;

    const user = users.find(user => user.id == id);

    if(!user) {
        res.status(404).json({message: "user does not exist"});
    }

    const index = users.findIndex(user => user.id == id);

    users.splice(index, 1);

    res.json(users);

})