const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/users", userController.getAllUsers);
router.post("/users", userController.registerUser);
router.get("/users/:email", userController.getUserByEmail);


module.exports = router;
