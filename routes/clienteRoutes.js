//Importamos express
const express = require('express');

//Importamos el modelo de usuario
const Cliente = require('../models/clienteModel');

//Crear el router de express
const router = express.Router();

//Crear un nuevo cliente
router.post('/', async (req, res) => {
    try { 
        
        const cliente = new Cliente(req.body);
        await cliente.save();
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).json({ mensaje: "Error al crear el cliente", error: error.message });
    }
});

//Obtener todos los clientes
router.get('/', async (req, res) => {
    
        const clientes = await Cliente.find();
        res.json(clientes);
    
});

// Editar cliente (PUT)
router.put('/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!cliente) return res.status(404).json({ mensaje: "Cliente no encontrado" });
    res.json(cliente);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al editar el cliente", error: error.message });
  }
});

// Eliminar cliente (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndDelete(req.params.id);
    if (!cliente) return res.status(404).json({ mensaje: "Cliente no encontrado" });
    res.json({ mensaje: "Cliente eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ mensaje: "Error al eliminar el cliente", error: error.message });
  }
});

module.exports = router;