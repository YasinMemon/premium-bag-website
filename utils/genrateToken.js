require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = (user) =>{
    return jwt.sign({email: user.email, userID: user._id}, process.env.JWT_KEY);
}