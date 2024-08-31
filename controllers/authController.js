const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const genToken = require("../utils/genrateToken");
const cookieParser = require("cookie-parser");

module.exports.registerUser = async (req,res) => {
    const { email, password, fullname } = req.body;

    const users = await userModel.findOne({email});

    if(users) return res.send("email id is already available");

    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            if(err) return res.send(err.message);
            
            let createdUser = await userModel.create({
                email,
                password: hash,
                fullname,
            });

            const token = genToken(createdUser);
            res.cookie("token", token);
            res.send(createdUser);
        });
    });
}

module.exports.loginUser = async (req,res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({email});
    if(!user) return res.send("Email or Password wrong...");

    bcrypt.compare(password, user.password, (err, result) => {
        if(result){
            const token = genToken(user);
            res.cookie("token", token);
            res.render("shop");
        }else{
            res.send("Email or Password wrong...")
        }
    })
}