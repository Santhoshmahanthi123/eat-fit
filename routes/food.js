const express = require("express");
const router = express.Router();
const foodConroller = require("../controllers/food");
router.get("/food-list",foodConroller.foodsAvailable);
module.exports = router;