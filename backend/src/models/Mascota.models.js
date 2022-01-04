const mongoose = require('mongoose')
const Schema = mongoose.Schema



const MascotasSchema = new Schema({

    nombremascota:{type:String, required:[true,'Nombre obligatorio']},
    fechaNacimiento:String,
    especie:String,
    estadoReproductivo:String,
    ultimaVacuna:String,
    ultimaDesparasitacion:String,
    propietario:String,
    propietarioNombre:String,
    numeroTelefono:String,
    date:{type:Date,default:Date.now}



})


module.exports = mongoose.model('mascota',MascotasSchema)