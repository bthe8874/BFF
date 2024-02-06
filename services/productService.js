const axios = require("axios");
const servicesConfig = require("../apiInstances/apiInstance");

async function getAllProducts() {
  try {
    const response = await axios.get(servicesConfig.productServiceEndpoint);
    console.log("success");
    return response.data;
  } catch (error) {
    throw error;
  }
}
async function createProduct(product) {
  try {
    const response = await axios.post(
      servicesConfig.productServiceEndpoint,
      product
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getProductByID(productID) {
  console.log("productid", productID);
  try {
    const response = await axios.get(
      `${servicesConfig.productServiceEndpoint}/${productID}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}
async function deleteProduct(productId) {
  try {
    const response = await axios.delete(
      `${servicesConfig.productServiceEndpoint}/${productId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function updateProduct(productId, productDetails) {
  console.log(productDetails);
  try {
    const response = await axios.put(
      `${servicesConfig.productServiceEndpoint}/${productId}`,
      productDetails
    );
    console.log("Service");
    return response.data;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  getAllProducts,
  getProductByID,
  createProduct,
  deleteProduct,
  updateProduct,
};
