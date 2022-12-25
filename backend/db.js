const mariadb = require('mariadb');
const pool = mariadb.createPool(
  {
    host: 'mysql_backend',
    port: '3306',
    user: 'user',
    password: 'NThiZWIy',
    connectionLimit: 5,
    database: 'eshop'
  }
);
// pool.getConnection()
//   .then(conn => {
//     console.log(conn);
//     conn.query("SELECT 1 as val")
//       .then((rows) => {
//         console.log(rows); //[ {val: 1}, meta: ... ]
//         return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
//       })
//       .then((res) => {
//         console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
//         conn.end();
//       })
//       .catch(err => {
//         //handle error
//         conn.end();
//       })
//   }).catch(err => {
//   //not connected
// });

module.exports = Object.freeze({
  pool: pool
});