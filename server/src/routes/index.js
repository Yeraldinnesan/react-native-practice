import { Router } from "express";
import tasks from "./tasks.routes.js";
import projects from "./projects.routes.js";

const router = Router();

router.use("/tasks", tasks);
router.use("/projects", projects);

export default router;
