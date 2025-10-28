const { Router } = require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();
// Rutas
// host + /api/events

//! Cualquier peticion que se encuentre debajo va tener que usar lo que se indica en este caso
//! todas las peticiones van a pasar por el validarjwt
router.use(validarJWT);

//Obtener evento
// host + /api/events/events
router.get('/events', getEventos);

//Crear un nuevo evento
// host + /api/events/new
 router.post('/new', crearEvento);

//Actualizar evento
// host + /api/events/:id
router.put('/:id', actualizarEvento);

// Eliminar evento
// host + /api/events/:id
router.delete('/:id', eliminarEvento);

module.exports = router;
