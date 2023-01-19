import { createImage, findAll, findOne, findAllPublished, updateImage, deleteImage, deleteAll } from "../controllers/image.controller.mjs"
import express from 'express'
import bodyParser from "body-parser"
const jsonParser = bodyParser.json()
const routerImage = express()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Create a new image
routerImage.post("/image", jsonParser, createImage);
// Retrieve all image
routerImage.get("/image", jsonParser, findAll);
// Retrieve all published image
routerImage.get("/image/available", jsonParser, findAllPublished);
// Retrieve a single image with id
routerImage.get("/image/:id", jsonParser, findOne);
// Update a image with id
routerImage.put("/image/:id", jsonParser, updateImage);
// Delete a image with id
routerImage.delete("/image/:id", jsonParser, deleteImage);
// Delete all image
routerImage.delete("/image", jsonParser, deleteAll);

export default routerImage;