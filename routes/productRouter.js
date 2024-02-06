const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.get("/products", productController.getAllProducts);
router.post("/products", productController.createProduct);
router.get("/products/:productID", productController.getProductByID);
router.delete("/products/:productID", productController.deleteProduct);
router.put("/products/:productID", productController.updateProduct);

module.exports = router;
