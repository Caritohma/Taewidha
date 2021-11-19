const mongoose = require ('mongoose');
const { Schema } = mongoose;

const ProveedorSchema = new Schema({
	nombreproveedor: {type:String, required:true},
	nit: { type: Number, required: true},
	correoelectronico:{type:String, required:true},
	numerocelular:{type:Number, required:true},
	direccion:{type:String, required:true},
	nombreproducto:{type:String, required:true},
	cantidad:{type:Number, required:true},
	valorpedido:{type:Number, required:true},
	fechasolicitudpedido:{type:String, required:true},
	fechaentrega:{type:String, required:true}
});

module.exports = mongoose.model('Proveedore', ProveedorSchema);
