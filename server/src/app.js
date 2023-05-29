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

app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs, { explorer: true }));
app.use("/", routes);
export default app;
