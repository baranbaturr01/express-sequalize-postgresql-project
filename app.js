import {config} from "dotenv";
import express from 'express';
import db from './src/services/db.js'
import routes from './src/routes/router.js'
const app = express();

  db.sync({force: true}).then(() => {
  console.log('Database created');
}).then(() => {

  app.use(express.json());

  app.use(express.urlencoded({extended: true}));

  app.use(routes);
  app.listen(3000,  ()=> {
    console.log('Example app listening on port 3000!');
  });
  return app
}).catch(err => {
    console.log("ERORRRR!!!", err);
  }
)

