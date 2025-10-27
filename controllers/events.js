const { response } = require("express");

const getEventos = (req, res = response) => {
    return res.status(201).json({
        ok: true,
        msg: "getEventos"
    });
}

const crearEvento = (req, res = response) => {
    const { title, notes } = req.body;

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