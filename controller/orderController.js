var orderService = require("../services/orderService");

async function createOrder(req, res) {
  try {
    console.log("success");
    const createdOrder = await orderService.createOrder(req.body);
    res.json(createdOrder);
  } catch (error) {
    console.error("Error creating order:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getOrderByUserID(req, res) {
  const { userID } = req.params; // Assuming userId is coming from request params
  try {
    const orders = await orderService.getOrderByUserId(userID);
    console.log("Order fetching success!");
    res.json(orders);
  } catch (error) {
    console.error("Error fetching Orders:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}


module.exports = {
    createOrder,
    getOrderByUserID
};
