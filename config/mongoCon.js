require("dotenv").config()
const mongoose = require('mongoose');

const server = process.env.MONGO_URI;

mongoose.connect(server)
.then(() => {
    console.log("Connected");
})
.catch((err) => {
    console.log("error: ",err);
});

module.exports = mongoose.connection;