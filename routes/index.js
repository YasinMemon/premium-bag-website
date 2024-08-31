const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const productModel = require("../models/product");

// Index route
router.get("/", (req, res) => {
    let error = req.flash("error");
    res.render("index", { error });
});

// Shop route with proper error handling
router.get("/shop", isLoggedIn, async (req, res) => {
    try {
        // Fetching products from the database
        let products = await productModel.find();
        let success = req.flash("success");

        // Render the shop page with the fetched products
        res.render("shop", { products, success });
    } catch (err) {
        console.error("Error fetching products:", err);
        req.flash("error", "Failed to load products. Please try again later.");
        res.redirect("/");
    }
});

module.exports = router;
