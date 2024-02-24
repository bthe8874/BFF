// userController.js

const authMiddleware = require("../middleware/authMiddleware");
const userService = require("../services/userService");

authMiddleware.initializeCognito();

async function loginUser(req, res) {
  // Authenticate user using middleware
  await authMiddleware.authenticateUser(req, res, async () => {
    try {2
      // User authenticated successfully
      // Call userService functions to fetch user data or perform other operations
      const userData = await userService.getUserByEmail(req.body.email);
      res.status(200).json({ message: "User authenticated successfully", userData });
    } catch (error) {
      console.error("Error fetching user data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
}

async function registerUser(req, res) {
  // Register user using middleware
  await authMiddleware.registerUser(req, res, async () => {
    try {
      // User registered successfully
      // Call userService functions to perform additional operations if needed
      const registeredUser = await userService.registerUser(req.body);
      res.status(200).json({ message: "User registered successfully", registeredUser });
    } catch (error) {
      console.error("Error performing additional operations:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
}

module.exports = {
  loginUser,
  registerUser,
};
