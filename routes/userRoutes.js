const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/user", userController.getAllUsers);
router.post("/user", userController.registerUser);
router.get("/user/:email", userController.getUserByEmail);


module.exports = router;
