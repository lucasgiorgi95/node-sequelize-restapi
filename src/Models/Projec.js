import {DataTypes} from "sequelize";
import { sequelize } from "../DataBase/db.js";
import { Task } from "./Task.js";
//aca definimos la tabla, que recibira dos parametros el primero es el nombre de la tabla y el segundo es
//un objeto donde se definen todos los valos que tendra esa tabla
export const Project = sequelize.define('projects',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
    },
    priority:{
        type:DataTypes.INTEGER,
    },
    description:{
        type:DataTypes.STRING,
    },
})


Project.hasMany(Task, {
    foreignKey:'projectId',
    sourceKey:'id'
})


Task.belongsTo(Project, {
    foreignKey:'projectId',
    sourceKey:'id'
})