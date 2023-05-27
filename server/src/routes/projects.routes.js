import { Router } from "express";
import { getProject } from "../controllers/projects/getProject";
import { deleteProject } from "../controllers/projects/deleteProject";
import { updateProject } from "../controllers/projects/updateProject";
import { createProject } from "../controllers/projects/createProject";
import { getProjects } from "../controllers/projects/getProjects";

const projectsRoutes = Router();

projectsRoutes.get("/", getProjects);
projectsRoutes.get("/:id", getProject);
projectsRoutes.get("/update", updateProject);
projectsRoutes.get("/delete", deleteProject);
projectsRoutes.get("/create", createProject);

export default projectsRoutes;
