const express = require("express");

const router = express.Router();

router.get("/contact", (req, res) => {
    res.send("Welcome to the Contact Page");
});

router.get("/home", (req, res) => {
    res.send("Welcome to the Home Page");
});

router.get("/about", (req, res) => {
    res.send("Welcome to the About Page");
});

router.get("/info", (req, res) => {
    res.send("Welcome to the Info Page");
});

router.get("/dashboard", (req, res) => {
    res.send("Welcome to the Dashboard");
});

module.exports = router;