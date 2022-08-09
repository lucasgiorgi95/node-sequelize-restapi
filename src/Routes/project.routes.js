import { Router } from "express";
import { createtPoroject, deleteProject, getPorojects, getProject, getProjectTasks, updateProject } from "../Controllers/project.controller.js";

const router = Router()


router.get('/projects', getPorojects)
router.get('/projects/:id', getProject)
router.post('/projects', createtPoroject)
router.put('/projects/:id',updateProject)
router.delete('/projects/:id', deleteProject)

router.get('/projects/:id/task', getProjectTasks)


export default router