const express = require("express");

const router = express.Router();

router.get("/", (req,res) => {
    console.log("User working");
});

module.exports = router;