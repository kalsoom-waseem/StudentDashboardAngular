const mongoose = require('mongoose');
const {MONGO_URI}= process.env;

exports.connect=()=>{
    // Connecting to a database
    mongoose
    .connect(MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("Successful connected to the database")

    })
    .catch((error)=>{
        console.log("Failed to connect");
        console.log(error);
        process.exit(1);
    })
}