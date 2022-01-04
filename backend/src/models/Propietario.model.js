const mongoose = require('mongoose')
const {Schema} = mongoose

const PropietarioSchema = new Schema({
nombre:String,
correo:String,
contrasena:String,
date:{type:Date,default:Date.now}
//Se convierte en modelo y se exporta


})

module.exports = mongoose.model('propietario',PropietarioSchema)