import Sequelize from "sequelize"
import { sequelize } from "../db.mjs"

const Image = sequelize.define('image', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

export default Image;