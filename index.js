//Importamos express
const express = require('express');

//Importar la funcion de conexion a la base de datos
const connectDB = require('./database');

//Importamos dotenv
require('dotenv').config();

//Importar las rutas de usuarios
const clienteRoutes = require('./routes/clienteRoutes.js');

const citasRoutes = require('./routes/citasRoutes.js');

//Crear una instancia de express
const app = express();

//Importamos cors
const cors = require('cors');

//Definimos el puerto
const PORT = process.env.PORT || 3000;    

//Llamamos a la conexion para la BD
connectDB();

//Middleware de express
app.use(express.json());

//Definimos una ruta de prueba para verificar que el servidor funciona
app.get('/', (req, res) => {
    res.send('API funcionando');
});

app.use(cors());

app.use('/api/clientes', clienteRoutes);

app.use('/api/citas', citasRoutes);

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});