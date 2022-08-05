import { Router } from "express";
import { createtPoroject, getPorojects } from "../Controllers/project.controller.js";

const router = Router()


router.get('/projects', getPorojects)
router.get('/projects/:id')
router.post('/projects', createtPoroject)
router.put('/projects/:id')
router.delete('/projects/:id')


export default router