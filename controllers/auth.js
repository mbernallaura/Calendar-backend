/*Se solicita de nuevo express, y esto no vuelve hacer la carga de express 
solo recarga la que ya se habia hecho 
se hace esto es para obtener la ayuda(intelliSense) al hacer el request y el response en las peticiones
*/
//const express = require('express');
//Se desestructura lo anterior para hacer mas corto el codigo
const { response } = require("express");

const crearUsuario = (req, res = response)=>{
    res.json({
        ok: true,
        msg: 'registro'
    })
}

const loginUsuario = (req, res = response)=>{
    res.json({
        ok: true,
        msg: 'login'
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