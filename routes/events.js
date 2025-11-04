const { Router } = require('express');
const { check } = require('express-validator')

const { isDate } = require('../helpers/isDate')
const { validarCampos } = require('../middlewares/validar-campos')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();
// Rutas
// host + /api/events

//! Cualquier peticion que se encuentre debajo va tener que usar lo que se indica en este caso
//! todas las peticiones van a pasar por el validarjwt
router.use(validarJWT);

//Obtener evento
// host + /api/events/
router.get('/', getEventos);

//Crear un nuevo evento
// host + /api/events/new
router.post('/new', 
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'Fecha de finalizacion es obligatoria').custom( isDate ),
        validarCampos
    ],
    crearEvento
);

//Actualizar evento
// host + /api/events/:id
router.put('/:id', actualizarEvento);

// Eliminar evento
// host + /api/events/:id
router.delete('/:id', eliminarEvento);

module.exports = router;
