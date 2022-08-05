//aca creamos la logica que van a tener las rutas
import { Project } from "../Models/Projec.js"

export const getPorojects =async(req, res)=>{
   try {
    const projects = await Project.findAll()
    res.json(projects)
   } catch (error) {
    return res.status(500).json({message: error.message})
   }

}

export const createtPoroject =async(req, res)=>{
    const {name, priority, description}=req.body
    try {
    const newProject = await Project.create({
        name, priority, description
    })

   res.json(newProject)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

