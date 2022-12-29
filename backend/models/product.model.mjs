import Sequelize from "sequelize"
import { sequelize } from "../db.mjs"
import db from "../models/index.mjs"
// const dbProduct = db.products;

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
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
})


// Product.removeAll = result => {
//   dbProduct.query("DELETE FROM products", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }
//
//     console.log(`deleted ${res.affectedRows} tutorials`);
//     result(null, res);
//   });
// };
//
// Product.updateById = (id, tutorial, result) => {
//   dbProduct.query(
//     "UPDATE products SET title = ?, description = ?, published = ?, remainder = ?, available = ?, discount = ?, price = ?, oldPrice = ?, category = ?, storage = ?  WHERE id = ?",
//     [tutorial.title, tutorial.description, tutorial.published, tutorial.remainder, tutorial.available, tutorial.discount, tutorial.price, tutorial.oldPrice, tutorial.category, tutorial.storage, id],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }
//
//       if (res.affectedRows == 0) {
//         // not found Tutorial with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }
//
//       console.log("updated tutorial: ", { id: id, ...tutorial });
//       result(null, { id: id, ...tutorial });
//     }
//   );
// };
//
// Product.getAllPublished = result => {
//   dbProduct.query("SELECT * FROM products WHERE published=true", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }
//
//     console.log("tutorials: ", res);
//     result(null, res);
//   });
// };
//
//
// //
// //
// Product.create = (newProduct, result) => {
//   dbProduct.query("INSERT INTO products SET ?", newProduct, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }
//
//     console.log("created product: ", { id: res.insertId, ...newProduct });
//     result(null, { id: res.insertId, ...newProduct });
//   });
// };
// //
// Product.findById = (id, result) => {
//   dbProduct.query(`SELECT * FROM products WHERE id = ${id}`, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }
//
//     if (res.length) {
//       console.log("found tutorial: ", res[0]);
//       result(null, res[0]);
//       return;
//     }
//
//     // not found Tutorial with the id
//     result({ kind: "not_found" }, null);
//   });
// };
// //
// Product.getAll = (title, result) => {
//   let query = "SELECT * FROM products";
//
//   if (title) {
//     query += ` WHERE title LIKE '%${title}%'`;
//   }
//
//   dbProduct.query(query, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }
//
//     console.log("tutorials: ", res);
//     result(null, res);
//   });
// };
// //
//
// //
// //
// //
// Product.remove = (id, result) => {
//   dbProduct.query("DELETE FROM products WHERE id = ?", id, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }
//
//     if (res.affectedRows == 0) {
//       // not found Tutorial with the id
//       result({ kind: "not_found" }, null);
//       return;
//     }
//
//     console.log("deleted tutorial with id: ", id);
//     result(null, res);
//   });
// };
// //
// Product.removeAll = result => {
//   dbProduct.query("DELETE FROM products", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }
//
//     console.log(`deleted ${res.affectedRows} tutorials`);
//     result(null, res);
//   });
// };

export default Product;

//
// export default Product;