const express = require('express');
const morgan = require('morgan');
const mongoose = require('./conexion');
const app = express();

//Configuracion
app.set('port',process.env.PORT||3000)
app.use(morgan('dev'))
app.use(express.json())

//Lista de rutas para cada coleccion
app.use('/api/proveedores', require('./routes/proveedor.routes'));

//Arranque
app.listen(app.get('port'), ()=> {
	console.log(process.env.npm_package_name + "iniciando en puerto"+ app.get('port'))
});