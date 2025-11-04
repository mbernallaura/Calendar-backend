const { response } = require("express");
const Evento = require('../models/Evento');

const getEventos = async (req, res = response) => {
    //! .find() = se puede especificar condiciones detro del parentesis "filtros"
    //! .populate('referencia', 'si quiero campos en especifico') = rellena el campo que necesitamos es decir en este caso necesitamos el user 
    //! con su info para que tambien se visualice en el json y no solo el id del usuario
    //! .populate('user', 'name password')
    const eventos = await Evento.find()
                                .populate('user', 'name');

    return res.status(201).json({
        ok: true,
        eventos
    });
}

const crearEvento = async (req, res = response) => {
    const evento = new Evento(req.body);

    try {
        evento.user = req.uid;

        // Guardar en base de datos
        const eventoGuardado = await evento.save();

        return res.status(201).json({
            ok: true,
            evento: eventoGuardado
        });
    } catch (error) {
        console.log(error);
    
        res.status(500).json({
            ok: false,
            msg: "Hable con el admnistrador"
        });
    }
}

// /123
const actualizarEvento = async(req, res = response) =>{
    // Obtener id de la url
    const eventoId = req.params.id;
    const uid = req.uid;

    try {
        const evento = await Evento.findById( eventoId );

        if ( !evento ) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }

        if (evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            });
        }

        const nuevoEvento  = {
            ...req.body,
            user: uid
        }
        //! Si no le colocamos new:true me devolvera los datos viejos aunque en la bd ya se guardaron 
        const eventoActualizado = await Evento.findByIdAndUpdate( eventoId, nuevoEvento, { new: true } );
        return res.json({
            ok: true,
            evento: eventoActualizado
        });
        
    } catch (error) {
        console.log(error);
    
        res.status(500).json({
            ok: false,
            msg: "Hable con el admnistrador"
        });
    }
}

// /123
const eliminarEvento = async (req, res = response) =>{
    // Obtener id de la url
    const eventoId = req.params.id;
    const uid = req.uid;

    try {
        const evento = await Evento.findById( eventoId );

        if ( !evento ) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }

        if (evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de eliminar este evento'
            });
        }

        await Evento.findByIdAndDelete( eventoId );

        return res.json({
            ok: true,
            msg: "Evento eliminado"
        });
        
    } catch (error) {
        console.log(error);
    
        res.status(500).json({
            ok: false,
            msg: "Hable con el admnistrador"
        });
    }
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}