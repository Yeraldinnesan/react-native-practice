"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("./routes/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();

// Define a middleware function
// const myMiddleware = (req, res, next) => {
//   // Do some processing or add functionality here
//   console.log("Middleware executed");
//   next(); // Call next() to move to the next middleware or route handler
// };

// app.use(myMiddleware); // Add the middleware to the application

app.use("/", _index["default"]);
var _default = app;
exports["default"] = _default;