const MascotaCtrl={}
const Mascota = require('../models/Mascota.models')


MascotaCtrl.crear= async(req,res)=>{

    const {nombreMascota, fechaNacimiento, especie, estadoReproductivo, ultimaVacuna, ultimaDesparasitacion, propietario, propietarioNombre, numeroTelefono} = req.body
    const NuevaMascota = new Mascota({

        nombreMascota,
        fechaNacimiento, 
        especie, 
        estadoReproductivo, 
        ultimaVacuna, 
        ultimaDesparasitacion, 
        propietario, 
        propietarioNombre, 
        numeroTelefono
    })

    const respuesta = await NuevaMascota.save()
    res.json({

        mensaje: 'Mascota creada',
        respuesta
    })




}


MascotaCtrl.listar= async(req,res)=>{
    const respuesta = await Mascota.find()
    res.json(respuesta)
}


MascotaCtrl.listarId= async(req,res)=>{
    const id = req.params.id
    const respuesta = await Mascota.findById({_id: id})
    res.json(respuesta)
}

MascotaCtrl.mascotaDeUnPropietario= async(req,res)=>{

    const id = req.params.id
    const respuesta = await Mascota.find({propietario:id})
    res.json(respuesta)
}


MascotaCtrl.eliminar= async(req,res)=>{

    const id = req.params.id
    await Mascota.findByIdAndRemove({_id: id})
    res.json({
        mensaje: 'Mascota eliminada'
    })

}

MascotaCtrl.actualizar= async(req,res)=>{

    const id = req.params.id
    await Mascota.findByIdAndUpdate({_id: id},req.body)
    res.json({
        mensaje: 'Mascota actualizada'
    })

}


MascotaCtrl.buscarMascotaCriterio = async(req,res)=>{
    const propietarioNombre= req.params.criterio;

    try{
        const  respuesta = await Mascota.find({propietarioNombre:propietarioNombre})
        res.json(respuesta)

    }catch(error){

        return res.status(400).json({
            mensaje:'Ocurrio un error en su busqueda',
            error
        })

    }
}








module.exports = MascotaCtrl