    const express = require('express');
    const mongoose = require('mongoose');
    require('dotenv').config();

    const app = express();
    // const Users=require("./models/Users");
    const UserRoutes=require("./routes/UserRoutes");
    // const Users = require('../models/Users');
    app.use(express.json());

    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((err) => {
            console.log("MongoDB connection error:", err);
        });

    app.use("/",UserRoutes);
    app.get('/', (req, res) => {
        res.send("<h1>Welcome to Short URL Server</h1>");
    });

    app.listen(3000, () => {
        console.log("Server is running at http://localhost:3000");
    });