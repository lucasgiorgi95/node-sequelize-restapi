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

export const createTasks = (req, res)=>{
    const{}=req.body
    try {
        
    } catch (error) {
        return  res.status(500).json({message:error.message})
    }
}

export const updateTasks = (req, res)=>{
    try {
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const deleteTasks = (req, res)=>{
    try {
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
