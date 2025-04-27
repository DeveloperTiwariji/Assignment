const express = require("express");
require("dotenv").config();
const app = express();

const connectDB = require("./config/database");
const incidentRoutes = require("./route/incident");
app.use(express.json());



app.use('/incidents', incidentRoutes);
const PORT = process.env.PORT || 3000;


connectDB().then(()=>{
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>{
        console.log(`Server running on port ${PORT}`)
    })
}).catch((err)=>{
    console.log("Error connecting to MongoDB", err);
})
