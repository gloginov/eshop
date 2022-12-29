import db from "../db.mjs"
import { sequelize } from "../db.mjs"
import Sequelize from "sequelize"
import ProductModel from "./product.model.mjs";

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = ProductModel;

export default db;