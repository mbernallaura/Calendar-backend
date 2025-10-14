/*Se solicita de nuevo express, y esto no vuelve hacer la carga de express 
solo recarga la que ya se habia hecho 
se hace esto es para obtener la ayuda(intelliSense) al hacer el request y el response en las peticiones
*/

//const express = require('express');
//Se desestructura lo anterior para hacer mas corto el codigo
const { response } = require("express");
const { validationResult } = require('express-validator');


//!Request(req)  = Lo que la persona solicita
//!Response(res) = Lo que nosotros respondemos
const crearUsuario = (req, res = response)=>{
    const { name,  email, password } = req.body;

    //? manejo de errores

    //Sin express-validator
    // if (name.length < 5) {
    //     return res.status(400).json({
    //         ok: false,
    //         msg: 'El nombre debe de ser de 5 letras'
    //     })
    // }

    //Express-validator
    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }
    console.log(errors);
    

    res.status(201).json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password
    })
}

const loginUsuario = (req, res = response)=>{
    const { email, password } = req.body;

    //express-validator
    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    res.status(201).json({
        ok: true,
        msg: 'login',
        email,
        password
    })
}
const revalidarToken = (req, res = response)=>{
    res.json({
        ok: true,
        msg: 'renew'
    })
}

module.exports ={
    crearUsuario,
    loginUsuario,
    revalidarToken
}