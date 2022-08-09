//aca creamos la logica que van a tener las rutas
import { Project } from "../Models/Projec.js"
import { Task } from "../Models/Task.js"

export const getPorojects =async(req, res)=>{
   try {
    const projects = await Project.findAll()
    res.json(projects)
   } catch (error) {
    return res.status(500).json({message: error.message})
   }

}

export const getProject = async(req,res)=>{
  try {
    const {id}=req.params
    const project = await Project.findOne({
      where:{
        id,
      }      
    })

    if(!project){
      return res.status(400).json({message:'Project does not exists'})
    }


    res.json(project)
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

export const updateProject = async(req, res)=>{
 try {
  const {id}=req.params
  const {name, priority, description}=req.body
  const project = await Project.findByPk(id)
  project.name=name
  project.priority=priority
  project.description=description

  await project.save()

  res.json(project)
 } catch (error) {
  console.log(error)
  return res.status(500).json({message: error.message})
 }

}

export const deleteProject = async(req, res)=>{ 
  try {
    const {id}=req.params
    const project =await Project.destroy({
      where:{
        id,
      }
    })
    res.status(200).json({message:'Project distroy'})
  } catch (error) {
    return res.status(500).json({message: error.message})
  }

}


export const getProjectTasks = async(req, res)=>{
  const{id}=req.params
  const tasks = await Task.findAll({
    where:{
      projectId:id
    }
  })
  res.json(tasks)
}