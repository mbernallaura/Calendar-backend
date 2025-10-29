const { Schema, model } = require('mongoose');

const EventoSchema = Schema({
    title:{
        type: String,
        required: true
    },
    notes:{
        type: String,
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});
//! Se puede sobreescribir ya que llamamos al toJSON de mongoose cuando hacemos .save() y lo guardamos en una variable para mostrarlo
//! Se puede sobreescribir el json para que no me aparezca en postman __v que es la version que no se necesita y _id por id
EventoSchema.method('toJSON', function(){
    const {__v,_id, ...object} =this.toObject();
    object.id = _id;
    return object;
})

module.exports = model('Evento', EventoSchema);