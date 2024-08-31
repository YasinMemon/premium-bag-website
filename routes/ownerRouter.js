const express = require("express");
const adminModel = require("../models/owner");

const router = express.Router();

router.get("/", (req,res) => {
    console.log("owner is working");
});

if(process.env.NODE_ENV === "development"){
    router.post("/create", async (req,res) => {
        let owner = await adminModel.find();
        if(owner.length > 0){
            return res.send("unable to admin access");
        }
        let { fullname, email, password, picture, gstin } = req.body;
        let createdAdmin = await adminModel.create({
            fullname,
            email,
            password,
            picture,
            gstin,
        });

        res.send(createdAdmin);
    })
}

module.exports = router;