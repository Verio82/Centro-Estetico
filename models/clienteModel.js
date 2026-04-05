const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        minlength: [3, 'El nombre debe tener al menos 3 caracteres']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        match: [/^\S+@\S+\.\S+$/, 'Formato de email inválido'],
        unique: true
    },
    telefono: {
        type: String,
        match: [/^\d{10}$/, 'El teléfono debe tener 10 dígitos'],
        required: true
    }
});

module.exports = mongoose.model('Cliente', clienteSchema);