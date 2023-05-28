import { Router } from "express";
import { getTasks } from "../controllers/tasks/getTasks.js";
import { getTaskCount } from "../controllers/tasks/getTaskCount.js";
import { getTask } from "../controllers/tasks/getTask.js";
import { createTask } from "../controllers/tasks/createTask.js";
import { deleteTask } from "../controllers/tasks/deleteTask.js";
import { updateTask } from "../controllers/tasks/updateTask.js";

const tasksRoutes = Router();

tasksRoutes.get("/", getTasks);
tasksRoutes.get("/count", getTaskCount);
tasksRoutes.get("/:id", getTask);
tasksRoutes.post("/", createTask);
tasksRoutes.delete("/:id", deleteTask);
tasksRoutes.put("/:id", updateTask);

export default tasksRoutes;
