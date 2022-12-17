require("dotenv").config();
require('./config/database').connect();

const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const AdminRoutes = require('./Routes/AdminRoutes')

const app = express();
app.use(bodyParser.json());
app.use(cors({
   origin: "http://localhost:4200" 
}));

//getmethod
app.get("/", (req,res)=>{
    let data = "server";
    res.send(data);
})
app.use('admin', AdminRoutes);



module.exports = app;