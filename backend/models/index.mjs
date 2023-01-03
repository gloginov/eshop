import db from "../db.mjs"
import { sequelize } from "../db.mjs"
import Sequelize from "sequelize"
import ProductModel from "./product.model.mjs";
import ImageModel from "./image.model.mjs";
import CategoryModel from "./category.model.mjs";

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = ProductModel;
db.images = ImageModel;
db.categories = CategoryModel;

db.products.hasMany(db.images, { as: "images" });
db.images.belongsTo(db.products, {
  foreignKey: "id",
  as: "product",
});
//
db.categories.hasMany(db.products, { as: "products" });
db.products.belongsTo(db.categories, {
  foreignKey: "id",
  as: "category",
});

export default db;
