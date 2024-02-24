const axios = require("axios");
const servicesConfig = require("../apiInstances/apiInstance");

async function getAllUsers() {
  try {
    const response = await axios.get(servicesConfig.userServiceEndpoint);
    console.log("success");
    return response.data;
  } catch (error) {
    throw error;
  }
}
async function registerUser(user) {
  try {
    const response = await axios.post(servicesConfig.userServiceEndpoint, user);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getUserByEmail(userID) {
  console.log("userid", userID);
  try {
    const response = await axios.get(
      `${servicesConfig.userServiceEndpoint}/${userID}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllUsers,
  getUserByEmail,
  registerUser,
};
