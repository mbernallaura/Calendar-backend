/*Se solicita de nuevo express, y esto no vuelve hacer la carga de express 
solo recarga la que ya se habia hecho 
se hace esto es para obtener la ayuda(intelliSense) al hacer el request y el response en las peticiones
*/

//const express = require('express');
//Se desestructura lo anterior para hacer mas corto el codigo
const { response } = require("express");
const Usuario = require('../models/Usuario');

//!Request(req)  = Lo que la persona solicita
//!Response(res) = Lo que nosotros respondemos
const crearUsuario = async (req, res = response)=>{
    const { name,  email, password } = req.body;

    try {
        // manda el usuario existente
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: "Un usuario existe con ese correo"
            })
        }
        
        usuario = new Usuario(req.body);

        //? Guardar en base de datos
        //! .save() es una promesa y va guardar los datos o mandara un error
        await usuario.save();

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador"
        })
    }


    //Sin express-validator
    // if (name.length < 5) {
    //     return res.status(400).json({
    //         ok: false,
    //         msg: 'El nombre debe de ser de 5 letras'
    //     })
    // }

    //Express-validator
    // const errors = validationResult( req );
    // if ( !errors.isEmpty() ) {
    //     return res.status(400).json({
    //         ok: false,
    //         errors: errors.mapped()
    //     });
    // }
    // console.log(errors);
    
}

const loginUsuario = (req, res = response)=>{
    const { email, password } = req.body;

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