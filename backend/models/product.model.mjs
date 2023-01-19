import Sequelize from "sequelize"
import { sequelize } from "../db.mjs"

const Product = sequelize.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  available: {
    type: Sequelize.BOOLEAN
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  oldPrice: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
})

export default Product;