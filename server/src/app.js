import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.js";

import { options } from "./swaggerOptions.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const specs = swaggerJSDoc(options);

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("X-Total-Count", "1000");
  next();
});

app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs, { explorer: true }));
app.use("/", routes);
export default app;
