import { Router } from "express";
import { getTasks } from "../controllers/tasks/getTasks.js";
import { getTaskCount } from "../controllers/tasks/getTaskCount.js";
import { getTask } from "../controllers/tasks/getTask.js";
import { createTask } from "../controllers/tasks/createTask.js";
import { deleteTask } from "../controllers/tasks/deleteTask.js";
import { updateTask } from "../controllers/tasks/updateTask.js";

const tasksRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Tasks endpoints
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all Tasks
 *     tags: [Tasks]
 */
tasksRoutes.get("/", getTasks);

/**
 * @swagger
 * /tasks/count:
 *   get:
 *     summary: Get count of all Tasks
 *     tags: [Tasks]
 */
tasksRoutes.get("/count", getTaskCount);

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Get a Task
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 */
tasksRoutes.get("/:id", getTask);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a Task
 *     tags: [Tasks]
 */
tasksRoutes.post("/", createTask);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a Task
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 */
tasksRoutes.delete("/:id", deleteTask);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update a Task
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 */
tasksRoutes.put("/:id", updateTask);

export default tasksRoutes;
