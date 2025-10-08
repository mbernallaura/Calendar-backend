//! Haciendo Backend server
//?Configurando express
const express = require('express');

//?Configurar .env
require('dotenv').config();
//console.log(process.env);


//? Crear el servidor de express
const app = express();

//?Directorio Publico
//! .use() = es un midelware que es una funcion que se ejecuta siempre que pasa en algun lugar, cuando alguien haga una peticion
app.use( express.static('public') ); 

//?Rutas
//! Todo el archivo ./routes/auth que esta en require va a ser exportado y lo habilitara en la ruta /api/auth
app.use('/api/auth', require('./routes/auth'));
//TODO: auth, crear, login, renew, crud de ventos
// app.get('/', (req, res)=>{
//     res.json({
//         ok: true
//     })
// });

//?Escuchar peticiones
// app.listen(4000, ()=>{
//     console.log("Servidor corriendo");
// })
app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
    
});