const express = require("express");

const router = express.Router();

router.get("/", (req,res) => {
    console.log("product working");
});

module.exports = router;