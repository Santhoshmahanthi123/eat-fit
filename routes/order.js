const express = require("express");
const router = express.Router();
const oderController = require("../controllers/order");
router.post("/place-order",oderController.placeOrder);
module.exports = router;