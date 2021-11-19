const mongoose = require('mongoose');
const database = "tiendademascotas";
const password = "admin";
const URI = 'mongodb+srv://admin:'+password+'@cluster0.gkpzb.mongodb.net/'+database+'?retryWrites=true&w=majority';


mongoose.connect(URI)
	.then(db => console.log("Atlas en linea"))
	.catch (err => console.err(err))

module.exports = mongoose;
