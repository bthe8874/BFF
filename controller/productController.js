const productService = require("../services/productService");

async function getAllProducts(req, res) {
  try {
    const products = await productService.getAllProducts();
    console.log("Product fetching success!");
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function createProduct(req, res) {
  try {
    const createdProduct = await productService.createProduct(req.body);
    res.json(createdProduct);
  } catch (error) {
    console.error("Error creating product:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getProductByID(req, res) {
  console.log("data", req.params);
  try {
    const productID = req.params.productID;

    const product = await productService.getProductByID(productID);
    console.log("product", product);
    if (!product) {
      return res
        .status(404)
        .json({ error: "Product with given ID Not Found." });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product by ID ", error.message);
    res.status(500).json({
      error: "Product with given ID not found.",
    });
  }
}

async function deleteProduct(req, res) {
  try {
    const productID = req.params.productID;
    const deletedProduct = await productService.deleteProduct(productID);
    res.json({ message: "Product deleted successfully." });
  } catch (error) {
    console.error("Error deleting product:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function updateProduct(req, res) {
  console.log("body", req.body);
  console.log("params", req.params);
  try {
    const productID = req.params.productID;
    const productDetails = req.body;
    console.log("id", productDetails);

    const updatedProduct = await productService.updateProduct(
      productID,
      productDetails
    );
    console.log(updatedProduct);
    if (!updatedProduct) {
      return res
        .status(404)
        .json({ error: "Product with given ID Not Found." });
    }
    res.json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  getProductByID,
  deleteProduct,
  updateProduct,
};
