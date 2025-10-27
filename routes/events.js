const { Router } = require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');

const router = Router();
// Rutas
// host + /api/events

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
