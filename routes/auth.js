/**
 * Rutas de Usuarios / Auth
 * host + /api/auth
 */

//! usa la libreria que este en memoria, NO lo carga dos veces
// const express = require('express');
// const router = express.Router

//Es lo mismo que lo anterior pero mas optimizado
const { Router } = require('express');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')

//?Rutas
//TODO: auth, crear, login, renew, crud de ventos
//! Para llegar aca se usa la ruta /api/auth
// router.get('/', (req, res)=>{
//     res.json({
//         ok: true
//     })
// });

//host + api/auth/new
router.post('/new', crearUsuario);

router.post('/', loginUsuario);

router.get('/renew', revalidarToken);

module.exports = router;