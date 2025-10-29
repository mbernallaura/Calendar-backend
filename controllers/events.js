const { response } = require("express");
const Evento = require('../models/Evento');

const getEventos = (req, res = response) => {
    return res.status(201).json({
        ok: true,
        msg: "getEventos"
    });
}

const crearEvento = async (req, res = response) => {
    const evento = new Evento(req.body);

    try {
        evento.user = req.uid;

        // Guardar en base de datos
        const eventoGuardado = await evento.save();

        res.status(201).json({
            ok: true,
            evento: eventoGuardado
        });
    } catch (error) {
        console.log(error);
    
        res.status(500).json({
            ok: false,
            msg: "Hable con el admnistrador"
        })
    }

    return res.status(201).json({
        ok: true,
        msg: "crearEventos"
    });
}

// /123
const actualizarEvento = (req, res = response) =>{
    return res.status(201).json({
        ok: true,
        msg: "actualizarEvento"
    });
}

// /123
const eliminarEvento = (req, res = response) =>{
    return res.status(201).json({
        ok: true,
        msg: "eliminarEvento"
    });
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}