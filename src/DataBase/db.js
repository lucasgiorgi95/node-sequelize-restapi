//importamos Sequelice en mayusculas para referirnos a la biblioteca misma, porque en minusculas solo hacemos una 
//instancia de la misma
import  Sequelize from "sequelize";

// al ser una clase la podemos instanciar, recibira varios valores, el primero sera el nomre de la base de datos
//username, password, el host y el dialecto
export const sequelize = new Sequelize('projecsdb','postgres', '300517',{
    host:'localhost',
    dialect: 'postgres'
})