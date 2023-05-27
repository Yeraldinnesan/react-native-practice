import express from "express";
import routes from "./routes/index.js";

const app = express();

// Define a middleware function
// const myMiddleware = (req, res, next) => {
//   // Do some processing or add functionality here
//   console.log("Middleware executed");
//   next(); // Call next() to move to the next middleware or route handler
// };

// app.use(myMiddleware); // Add the middleware to the application

app.use("/", routes);

export default app;
