// // const express = require('express')
// // const app = express()
// // const port = 3000
// //
// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })
// //
// // app.listen(port, () => {
// //   console.log(`Example app listening on port ${port}`)
// // })
// import AdminJS from 'adminjs'
//
// const adminJS = new AdminJS({
//   // ...
// })
//
// adminJS.watch()

const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const db = require('./db')
const express = require('express')

const PORT = 3000

const start = async () => {
  const app = express()
  const bodyParser = require("body-parser");
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  
  const admin = new AdminJS({})
  
  const adminRouter = AdminJSExpress.buildRouter(admin)
  app.use(admin.options.rootPath, adminRouter)
  
  app.get('/tasks', async (req, res) => {
    try {
      const result = await db.pool.query("select * from tasks");
      res.send(result);
    } catch (err) {
      throw err;
    }
  });
  
  app.get('/tasks', async (req, res) => {
    try {
      const result = await db.pool.query("select * from tasks");
      res.send(result);
    } catch (err) {
      throw err;
    }
  });

// POST
  app.post('/tasks', async (req, res) => {
    let task = req.body;
    try {
      const result = await db.pool.query("insert into tasks (description) values (?)", [task.description]);
      res.send(result);
    } catch (err) {
      throw err;
    }
  });
  
  app.put('/tasks', async (req, res) => {
    let task = req.body;
    try {
      const result = await db.pool.query("update tasks set description = ?, completed = ? where id = ?", [task.description, task.completed, task.id]);
      res.send(result);
    } catch (err) {
      throw err;
    }
  });
  
  app.delete('/tasks', async (req, res) => {
    let id = req.query.id;
    try {
      const result = await db.pool.query("delete from tasks where id = ?", [id]);
      res.send(result);
    } catch (err) {
      throw err;
    }
  });
  
  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start()