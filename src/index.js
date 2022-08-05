import app from './app.js'
import {sequelize} from './DataBase/db.js'
import './Models/Projec.js'
import './Models/Tasks.js'
//sequelice tiene varios metodos, por ejemplo podemos hacer que esto se ejecute de forma asincrona
//encerrando todo dentro de una funcion, tambien un manejo de errores con un catch

//primero arranca la base de datos y luego el servidor


async function main(){
 try {
    //este mentodo sync de sequelize nos permite hacer una sincronizacion con la base de datos
    //
  await sequelize.sync({force: true})
  console.log('la coneccion anda')
  app.listen(3000)
  console.log('the server is running on the port:', 3000)
 } catch (error) {
  console.error('este es el error', error)
 }
}

main()

