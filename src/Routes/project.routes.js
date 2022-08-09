import { Router } from "express";
import { createtPoroject, deleteProject, getPorojects, getProject, updateProject } from "../Controllers/project.controller.js";

const router = Router()


router.get('/projects', getPorojects)
router.get('/projects/:id', getProject)
router.post('/projects', createtPoroject)
router.put('/projects/:id',updateProject)
router.delete('/projects/:id', deleteProject)


export default router