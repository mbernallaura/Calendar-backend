//! Haciendo Backend server
const express = require('express');
require('dotenv').config();

console.log(process.env);


//Crear el servidor de express
const app = express();

//Directorio Publico
app.use( express.static('public') ); //!.use() = es un midelware que es una funcion que se ejecuta siempre que pasa en algun lugar 

//Rutas
// app.get('/', (req, res)=>{
//     res.json({
//         ok: true
//     })
// });

//Escuchar peticiones
app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
    
});