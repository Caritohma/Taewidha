const router = require('express').Router();
const proveedorOperations = require('../operations/proveedor.operations');

/*
	Archivo de operaciones
	-------------------
	const operacion = require('<ARCHIVO DE OPERACIONES>');

	Ruta base
	------------
	'/api/proveedores'

	Puntos de conexion (endpoints)
	------------------
	crear un dato:                  post('/',     operacion.metodo)
	obtener todos los datos:        get('/',      operacion.metodo)
	obtener un dato:                get('/:id',   operacion.metodo)
	modificar un dato:              put('/:id',   operacion.metodo)
	eliminar un dato:               delete('/:id',operacion.metodo)
*/

router.get('/', proveedorOperations.getProveedores)
router.get('/:id', proveedorOperations.getProveedor)
router.post('/', proveedorOperations.crearProveedor)
router.put('/:id', proveedorOperations.actualizarProveedor)
router.delete('/:id', proveedorOperations.borrarProveedor)

module.exports = router
