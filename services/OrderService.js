const axios = require("axios");
const servicesConfig = require("../apiInstances/apiInstance");

async function createOrder(order) {
  try {
    console.log("Create Order")
    const response = await axios.post(
      servicesConfig.orderServiceEndpoint,
      order
    );
    return response.data;
  } catch (error) {
    console.error("cant create order");
    throw error;
  }
}

async function getOrderByUserId(UserID) {
  try {
    const response = await axios.get(
      `${servicesConfig.orderServiceEndpoint}/${UserID}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getAllOrders() {
  try {
    const response = await axios.get(servicesConfig.orderServiceEndpoint);
    console.log("success fetching all orders");
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createOrder,
  getOrderByUserId,
  getAllOrders
 
};
