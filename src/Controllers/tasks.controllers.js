import { Task } from "../Models/Task.js"

export const getTasks = async(req, res)=>{
try {
    const tasks = await Task.findAll()
    res.json(tasks)
} catch (error) {
    return res.status(500).json({message: error.message})
}

}

export const getTask = async(req, res)=>{
    try {
        const{id}=req.params
        const task = await Task.findOne({
            where:{
                id,
            }
        })
        if(!task){
            return res.status(400).json({message:'Task does not exists'})
        }

        res.json(task)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const createTasks = async(req, res)=>{
    const{name, done, projectId}=req.body
    try {
        const newTask = await Task.create({
            name, 
            done,
            projectId,
        })
        res.json(newTask)
    } catch (error) {
        return  res.status(500).json({message:error.message})
    }
}

export const updateTasks = async(req, res)=>{
    try {
       const {id} = req.params
       const task= await Task.findByPk(id)
       task.set(req.body)
       await task.save()

       res.json(task)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error.message})
    }
}

export const deleteTasks = async(req, res)=>{
    try {
        const {id}=req.params
        await Task.destroy({
            where:{
                id,
            }
        })
        res.status(200).json({message:'Task Destroy'})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
