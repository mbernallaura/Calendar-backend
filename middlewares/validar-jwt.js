const { response } = require('express');
const jwt = require("jsonwebtoken");

//!Se valida el token y si es valido manda el id y el name del usuario de forma segura para los otros middlewares 

const validarJWT = (req, res = response, next) =>{
    // x-token headers
    const token = req.header('x-token')

    if( !token ){
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        const { uid, name } = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        req.uid = uid;
        req.name = name;
        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        });
    }

    next();
}

module.exports ={
    validarJWT
}