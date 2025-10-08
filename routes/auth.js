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

//?Rutas
//TODO: auth, crear, login, renew, crud de ventos
//! Para llegar aca se usa la ruta /api/auth
router.get('/', (req, res)=>{
    res.json({
        ok: true
    })
});

module.exports = router;