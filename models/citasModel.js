const mongoose = require('mongoose');

//Definir el esquema del cliente
const citaSchema = new mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    servicio: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Cita', citaSchema);