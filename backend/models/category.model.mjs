import Sequelize from "sequelize"
import { sequelize } from "../db.mjs"

const Category = sequelize.define('category', {
  title: {
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
  sticker: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

export default Category;