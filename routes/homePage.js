const express = require("express");
const router = express.Router();

//Get Home Page
router.get("/", (req, res,next) => {
    res.send("home-page")
});


module.exports = router;