const express = require("express");
require("dotenv").config();
const app = express();

const connectDB = require("./config/database");


app.use((req, res)=>{
    res.send("Radhe Radhe");
})


connectDB().then(()=>{
    console.log("Connected to MongoDB");
    app.listen(3000, () =>{
        console.log("Server is running on port 3000");
    })
}).catch((err)=>{
    console.log("Error connecting to MongoDB", err);
})
