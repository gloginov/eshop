import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'
import db from "./db.mjs"

// worked port
const PORT = 3000

const start = async () => {
  const app = express();
  const admin = new AdminJS({
    databases: [db],
    resources: db.tables(),
    rootPath: '/admin'
  });
  
  const router = AdminJSExpress.buildRouter(admin)
  app.use(admin.options.rootPath, router)
  
  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  });
}

start()