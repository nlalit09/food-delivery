import userModel from "../Models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function register(req, res) {
    const { fullName, email, password} = req.body;

    const newUser = new userModel({
        fullName,
        email,
        password: bcrypt.hashSync(password, 10)
    });

    userModel.findOne({email}).then(data => {
        if (data) {
            return res.status(400).json({message: "user already exists"});
        } else {
            newUser.save().then(data => {
                if(!data) {
                    res.status(400).send("something went wrong");
                }
                res.status(200).json({message: "user registered successfully"});
            })
        }

    }).catch((err) => {
        res.status(500).json({message: err.message})
    })
}

export function login(req, res) {
    const { email, password } = req.body;

    userModel.findOne({email}).then(data => {
        if(!data) {
            res.status(404).json({message: "user is not registered"});
        }

        let isValidPassword = bcrypt.compareSync(password, data.password);

        if(!isValidPassword){
            res.status(401).send({message: "Invalid email or password"});
        }

        let token = jwt.sign({id: data._id}, "secretKey", {expiresIn: "1h"});

        res.send({
            user: {
                email: data.email,
                password: data.password
            },
            accessToken: token
        })

    }).catch(err => {
        res.status(500).send({message: err.message || "server not running"})
    })
}