const jwt = require("jsonwebtoken");
//const { Promise } = require("mongoose");

const generarJWT = (uid, name) =>{
    
    const payload = { uid, name };

    //generar el token
    const token = jwt.sign( payload, process.env.SECRET_JWT_SEED, {
        expiresIn: '2h'
    }); 
    
    if ( !token ) {
        console.log(err);
        return "No se pudo generar el token";
    }

    return token;
}

module.exports = {
    generarJWT
}