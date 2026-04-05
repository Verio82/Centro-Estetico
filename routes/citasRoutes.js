//Importamos express
const express = require('express');

//Importamos el modelo de usuario
const Cita = require('../models/citasModel');

//Crear el router de express
const router = express.Router();

//Crear una nueva cita
router.post('/', async (req, res) => { 
    try {
        const cita = new Cita(req.body);
        await cita.save();
        
        res.status(201).json(cita);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Obtener todas las citas
router.get('/', async (req, res) => {
    try {
        const citas = await Cita.find().populate('cliente');
        res.json(citas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Editar cita (PUT)
router.put('/:id', async (req, res) => {
  try {
    const cita = await Cita.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!cita) return res.status(404).json({ mensaje: "Cita no encontrada" });
    res.json(cita);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al editar la cita", error: error.message });
  }
});

// Eliminar cita (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    const cita = await Cita.findByIdAndDelete(req.params.id);
    if (!cita) return res.status(404).json({ mensaje: "Cita no encontrada" });
    res.json({ mensaje: "Cita eliminada correctamente" });
  } catch (error) {
    res.status(400).json({ mensaje: "Error al eliminar la cita", error: error.message });
  }
});

module.exports = router;