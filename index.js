//! Haciendo Backend server
// Configurando express
const express = require('express');
//bd import
const { dbConnection } = require('./database/config');
const cors = require('cors');

// Configurar .env
require('dotenv').config();
//console.log(process.env);


// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors())

// Directorio Publico
//! .use() = es un midelware que es una funcion que se ejecuta antes de otra cosa, ejm: cuando alguien haga una peticion
app.use( express.static('public') ); 


// Lectura y parseo del body
//! Las peticiones  que vengan en formato JSON se procesan y se extrae el contenido
app.use( express.json() );


// Rutas
//! Todo el archivo ./routes/auth que esta en require va a ser exportado y lo habilitara en la ruta /api/auth
app.use('/api/auth', require('./routes/auth'));
//TODO: auth, crear, login, renew, crud de ventos


// Escuchar peticiones
// app.listen(4000, ()=>{
//     console.log("Servidor corriendo");
// })
app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
    
});