/**
 * Rutas de Usuarios / Auth
 * host + /api/auth
 */

//! usa la libreria que este en memoria, NO lo carga dos veces
// const express = require('express');
// const router = express.Router

//Es lo mismo que lo anterior pero mas optimizado
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router();


//?Rutas
//TODO: auth, crear, login, renew, crud de ventos
//! Para llegar aca se usa la ruta /api/auth
// router.get('/', (req, res)=>{
//     res.json({
//         ok: true
//     })
// });

//host + api/auth/new
router.post('/new', 
    [//middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min:6 }),
        validarCampos
    ],
    crearUsuario
);
//host + api/auth/
router.post('/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min:6 }),
        validarCampos
    ],
    loginUsuario
);

//host + api/auth/renew
//! Si solo es un middleware se coloca de la siguiente 
//! manera de lo contrario como se venia colocando 
router.get('/renew', validarJWT,revalidarToken);

module.exports = router;