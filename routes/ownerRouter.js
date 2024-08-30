const express = require("express");
const app = express();

const router = express.Router();

router.get("/", (req,res) => {
    console.log("owner is working");
});

module.exports = router;