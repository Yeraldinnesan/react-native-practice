"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _getTasks = require("../controllers/tasks/getTasks.js");
var tasksRoutes = (0, _express.Router)();
tasksRoutes.get("/", _getTasks.getTasks);
tasksRoutes.get("/count");
tasksRoutes.get("/:id");
tasksRoutes.post("/tasks");
tasksRoutes["delete"]("/tasks");
tasksRoutes.put("/tasks");
var _default = tasksRoutes;
exports["default"] = _default;