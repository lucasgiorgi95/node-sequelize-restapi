


import {DataTypes} from "sequelize";
import { sequelize } from "../DataBase/db.js";

//aca definimos la tabla, que recibira dos parametros el primero es el nombre de la tabla y el segundo es
//un objeto donde se definen todos los valos que tendra esa tabla
export const Task = sequelize.define('tasks',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
    },
    done:{
        type:DataTypes.BOOLEAN,
        dafaultValue: false
    },
   
}, {
    timestamps:false
})