import AdminJS from 'adminjs'
import { Adapter } from 'adminjs-sql'
AdminJS.registerAdapter(Adapter)
import Sequelize from "sequelize"

const db = await Adapter.init('mysql2', {
  host: 'mysql_backend',
  port: '3306',
  user: 'user',
  password: 'NThiZWIy',
  database: 'eshop'
});

const sequelize = new Sequelize("eshop", "user", "NThiZWIy", {
  dialect: "mysql",
  host: "mysql_backend",
  port: "3306"
});

export { sequelize, db as default };