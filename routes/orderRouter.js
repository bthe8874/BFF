const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get("/orders",  (req, res) => {
  try {
    const productResponse = await axios.get(
      `http://localhost:8020/api/orders`
    ); 

    res.send(productResponse.responseData)

    res.json(responseData);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;