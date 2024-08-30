const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:2707/Memon")
.then(() => {
    console.log("Connected");
})
.catch((err) => {
    console.log("error: ",err);
});

module.exports = mongoose.connection;