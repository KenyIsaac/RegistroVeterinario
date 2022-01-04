const mongoose = require('mongoose')
const Schema = mongoose.Schema



const MascotasSchema = new Schema({

    nombreMascota:String,
    fechaNacimiento:String,
    especie:String,
    estadoReproductivo:String,
    ultimaVacuna:String,
    ultimaDesparasitacion:String,
    numeroTelefono:String,
    date:{type:Date,default:Date.now}



})


module.exports = mongoose.model('mascota',MascotasSchema)