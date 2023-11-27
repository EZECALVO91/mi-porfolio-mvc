const express = require ("express");
const router = express.Router();
const path = require ("path");

const aboutController = require("../controllers/controllerAbout.js")

router.get("/about", aboutController.about)



module.exports = router