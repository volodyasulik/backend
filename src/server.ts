import bodyParser from "body-parser";
import express from "express";
import "dotenv/config";

import AppRouter from "./routes";
import AppDataSource from "./config/database";

const app = express();
const router = new AppRouter(app);
// Connect to MongoDB
AppDataSource.initialize()
  .then(() => console.log("Connection success"))
  .catch((err) => "Erro!");

// Express configuration
app.set("port", process.env.PORT || 4200);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.init();

const port = app.get("port");
// eslint-disable-next-line no-console
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;
