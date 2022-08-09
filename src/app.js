import express from "express";
import projectRoutes from  './Routes/project.routes.js'
import tasksRoutes from './Routes/tasks.routes.js'

const app = express()

//midleware
app.use(express.json())



app.use(projectRoutes)
app.use(tasksRoutes)
export default app;