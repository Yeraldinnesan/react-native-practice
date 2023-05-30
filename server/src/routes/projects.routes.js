import { Router } from "express";
import { getProject } from "../controllers/projects/getProject";
import { deleteProject } from "../controllers/projects/deleteProject";
import { updateProject } from "../controllers/projects/updateProject";
import { createProject } from "../controllers/projects/createProject";
import { createProjectTask } from "../controllers/projects/createProjectTask";
import { getProjects } from "../controllers/projects/getProjects";
import { getProjectTasks } from "../controllers/projects/getProjectTasks";

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
 * /projects/{id}/tasks:
 *   get:
 *     summary: Get a Project's tasks
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 */
projectsRoutes.get("/:id/tasks", getProjectTasks);
/**
 * @swagger
 * /projects/{id}:
 get:
      summary: Get a Project
      tags:
        - Projects
      parameters:
        - in: path
          name: id
          schema:
            type: string
          required: true
      responses:
        '200':
          description: OK
 */
projectsRoutes.get("/:id", getProject);

/**
 * @swagger
 * /projects/{id}:
 put:
      summary: Update a Project
      tags:
        - Projects
      parameters:
        - in: path
          name: id
          schema:
            type: string
          required: true
      responses:
        '200':
          description: OK
 */
projectsRoutes.put("/:id", updateProject);

/**
 * @swagger
 * /projects/{id}:
 delete:
      summary: Delete a Project
      tags:
        - Projects
      parameters:
        - in: path
          name: id
          schema:
            type: string
          required: true
      responses:
        '200':
          description: OK
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

/**
 * @swagger
 * /projects/{id}/tasks
 *    post:
      summary: Create a Task for a Project
      tags:
        - Projects
      parameters:
        - in: path
          name: id
          schema:
            type: string
          required: true
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                title:
                  type: string
                description:
                  type: string
                due_date:
                  type: string
                  format: date
                status:
                  type: string
      responses:
        '200':
          description: OK
  /projects/{id}:
    get:
      summary: Get a Project
      tags:
        - Projects
      parameters:
        - in: path
          name: id
          schema:
            type: string
          required: true
      responses:
        '200':
          description: OK
 */
projectsRoutes.post("/:id/tasks", createProjectTask);

export default projectsRoutes;
