const express = require ("express");
const router = express.Router();
const path = require ("path");

const indexController = require("../controllers/controllerIndex.js")

router.get("/", indexController.index)



module.exports = router