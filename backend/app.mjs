import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'
// db and sequielize
import db from "./models/index.mjs"
import cors from "cors"
import logger from "morgan"
import bodyParser from "body-parser"
import productRouter from "./routes/product.routes.mjs"

// worked port
const PORT = 3000

const start = async () => {
  const app = express();
  
  // Init Admin js backend dashboard
  const admin = new AdminJS({
    databases: [db],
    resources: db.tables(),
    rootPath: '/admin'
  });
  
  // parsers for any requests
  // create application/json parser
  const jsonParser = bodyParser.json()
  // create application/x-www-form-urlencoded parser
  const urlencodedParser = bodyParser.urlencoded({ extended: false })
  
  const router = AdminJSExpress.buildRouter(admin)
  // For frontend application
  const corsOptions = {
    origin: 'http://localhost:8080/'
  }
  // use cors for frontend application
  app.use(cors(corsOptions));
  // use morgan logger
  app.use(logger('dev'));
  
  app.use(admin.options.rootPath, router);
  // error callback
  app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });
  // use routes
  app.use(productRouter)
  //
  db.sequelize.sync()
    .then(result => {
      console.log(result)
        app.listen(PORT, () => {
          console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
        });
    })
    .catch(err=> {
      console.log(err)
    })
}

start()