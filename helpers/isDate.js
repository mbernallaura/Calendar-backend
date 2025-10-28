const moment = require('moment');

const isDate = (value) =>{
    if( !value ){
        return false;
    }

    //! moment indica si es una fecha correcta o no
    const fecha = moment( value );
    // isValid = funcion propia de momento
    if( fecha.isValid() ){
        return true;
    }else return false;

}

module.exports = { isDate }