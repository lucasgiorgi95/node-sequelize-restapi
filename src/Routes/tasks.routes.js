import { Router } from "express";
import { createTasks, deleteTasks, getTask, getTasks, updateTasks } from "../Controllers/tasks.controllers.js";

const router = Router()

router.get('/task', getTasks)
router.get('/task/:id',getTask)
router.post('/task',createTasks)
router.put('/task/:id',updateTasks)
router.delete('/task/:id',deleteTasks)

export default router