const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");
const authMiddleware = require('../middleware/authMiddleware');


router.post("/order/create",authMiddleware.checkAuthentication, orderController.createOrder);
router.get("/order/get/:userID",orderController.getOrderByUserID);

module.exports = router;