const coleccionProveedores = require('../schemas/proveedor.schema')	
const proveedorOperations = {};

proveedorOperations.getProveedores = async function(req, res) {
	const proveedores = await coleccionProveedores.find();
	res.json(proveedores);
}

proveedorOperations.getProveedor = async function(req, res) {
	const proveedor = await coleccionProveedores.findById(req.params.id);
	res.json(proveedor);
}

proveedorOperations.crearProveedor = async function(req, res) {
	const proveedor = new coleccionProveedores(req.body);
	await proveedor.save();
	res.json({"status":"Dato de proveedor guardado"});
}

proveedorOperations.actualizarProveedor = async function(req, res) {
	const { id } = req.params;
	const proveedor = {
		nombreproveedor: req.body.nombreproveedor,
    	nit: req.body.nit,
    	correoelectronico:req.body.correoelectronico,
		numerocelular:req.body.numerocelular,
		direccion: req.body.direccion,
		nombreproducto:req.body.nombreproducto,
		cantidad:req.body.cantidad,
		valorpedido:req.body.valorpedido,
		fechasolicitudpedido:req.body.fechasolicitudpedido,
		fechaentrega:req.body.fechaentrega
	}
	console.log(proveedor)
	await coleccionProveedores.findByIdAndUpdate(req.params.id, {$set: proveedor}, {new: true});
	res.json({"status":"Dato de proveedor actualizado"});
}

proveedorOperations.borrarProveedor = async function(req, res) {
	await coleccionProveedores.findByIdAndRemove(req.params.id);
	res.json({"status":"Dato de proveedor borrado"});	
}

module.exports = proveedorOperations