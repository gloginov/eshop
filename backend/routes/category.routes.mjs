import {
  createCategory,
  findAll,
  findOne,
  findAllPublished,
  updateCategory,
  deleteCategory,
  deleteAll
} from "../controllers/category.controller.mjs"
import express from 'express'
import bodyParser from "body-parser"
const jsonParser = bodyParser.json()
const routerCategory = express()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Create a new Product
routerCategory.post("/category", jsonParser, createCategory);
// Retrieve all product
routerCategory.get("/category", jsonParser, findAll);
// Retrieve all published product
routerCategory.get("/category/available", jsonParser, findAllPublished);
// Retrieve a single Product with id
routerCategory.get("/category/:id", jsonParser, findOne);
// Update a Product with id
routerCategory.put("/category/:id", jsonParser, updateCategory);
// Delete a Product with id
routerCategory.delete("/category/:id", jsonParser, deleteCategory);
// Delete all product
routerCategory.delete("/category", jsonParser, deleteAll);

export default routerCategory;