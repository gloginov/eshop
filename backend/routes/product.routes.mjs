import {
  createProduct,
  findAll,
  findOne,
  findAllPublished,
  updateProduct,
  deleteProduct,
  deleteAll
} from "../controllers/product.controller.mjs"
import express from 'express'
import bodyParser from "body-parser"
const jsonParser = bodyParser.json()
const routerProduct = express()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Create a new Product
routerProduct.post("/product", jsonParser, createProduct);
// Retrieve all product
routerProduct.get("/product", jsonParser, findAll);
// Retrieve all published product
routerProduct.get("/product/available", jsonParser, findAllPublished);
// Retrieve a single Product with id
routerProduct.get("/product/:id", jsonParser, findOne);
// Update a Product with id
routerProduct.put("/product/:id", jsonParser, updateProduct);
// Delete a Product with id
routerProduct.delete("/product/:id", jsonParser, deleteProduct);
// Delete all product
routerProduct.delete("/product", jsonParser, deleteAll);

export default routerProduct;