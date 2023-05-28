import { Router } from "express";
import { getProject } from "../controllers/projects/getProject";
import { deleteProject } from "../controllers/projects/deleteProject";
import { updateProject } from "../controllers/projects/updateProject";
import { createProject } from "../controllers/projects/createProject";
import { getProjects } from "../controllers/projects/getProjects";

const projectsRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: Projects endpoints
 */

/**
 * @swagger
 * /projects:
 *   get:
 *     summary: Get all Projects
 *     tags: [Projects]
 */
projectsRoutes.get("/", getProjects);

/**
 * @swagger
 * /projects/{id}:
 *   get:
 *     summary: Get a Project
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 */
projectsRoutes.get("/:id", getProject);

/**
 * @swagger
 * /projects/{id}:
 *   put:
 *     summary: Update a Project
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 */
projectsRoutes.put("/:id", updateProject);

/**
 * @swagger
 * /projects/{id}:
 *   delete:
 *     summary: Delete a Project
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 */
projectsRoutes.delete("/:id", deleteProject);

/**
 * @swagger
 * /projects:
 * post:
 *   summary: Create a Project
 *   tags: [Projects]
 */
projectsRoutes.post("/", createProject);

export default projectsRoutes;
