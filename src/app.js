import express from "express";
import projectRoutes from  './Routes/project.routes.js'


const app = express()

//midleware
app.use(express.json())



app.use(projectRoutes)

export default app;