const userService = require("../services/userService");

async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    console.log("User fetching successful!");
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function registerUser(req, res) {
  try {
    const registeredUser = await userService.registerUser(req.body);
    res.json(registeredUser);
  } catch (error) {
    console.error("Error registering new user:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getUserByEmail(req, res) {
  console.log("data", req.params);
  try {
    if (typeof users != "undefined") {
      const userID = req.params.userID;
      const user = await userService.getUserByEmail(userID);
      console.log("user", typeof user);
      res.json(user.params);
    } else {
      return res
        .status(404)
        .json({ error: "User with givem email not found." });
    }
  } catch (error) {
    console.error("Error fetching user by ID ", error.message);

    res.status(500).json({
      error: "Internal Server Error.",
    });
  }
}

module.exports = {
  getAllUsers,
  registerUser,
  getUserByEmail,
};
