"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasksRoutes = _interopRequireDefault(require("./tasks.routes.js"));
var _projectsRoutes = _interopRequireDefault(require("./projects.routes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.use("/tasks", _tasksRoutes["default"]);
// router.use("/projects", projects);
var _default = router;
exports["default"] = _default;