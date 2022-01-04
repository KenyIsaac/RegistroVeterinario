const PropietarioCtrl= {}
const Propietario = require('../models/Propietario.model')
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')

PropietarioCtrl.crearPropietario=async(req,res)=>{

    const{nombre,correo,contrasena} = req.body
    const NuevoPropietario = new Propietario({
        nombre,
        correo,
        contrasena
    })
    const correoPropietario = await Propietario.findOne({correo:correo})
    if (correoPropietario)
    {
        res.json({
            mensaje: 'Este usuario ya existe, por favor, verifica tus datos'
        })
    }

    else {

        NuevoPropietario.contrasena = await bcrypt.hash(contrasena,10)
        const token = jwt.sign({_id:NuevoPropietario._id},"Secreto")
        await NuevoPropietario.save()

        res.json({
            mensaje: 'Bienvenido',
            id: NuevoPropietario._id,
            nombre: NuevoPropietario.nombre,
            token
        }) 
    }

}



PropietarioCtrl.login = async(req,res)=>{

    const{correo,contrasena}=req.body
    const propietario = await Propietario.findOne({correo:correo})
    if(!propietario){
        return res.json({
            mensaje: 'Correo incorrecto'
        })
    }

    const match = await bcrypt.compare(contrasena,propietario.contrasena)
    if(match){

        const token = jwt.sign({_id: propietario.id},'Secreto')
        res.json({
            mensaje: 'Bienvenido',
            id:Propietario.id,
            nombre: Propietario.nombre,
            token
        })

    }

    else {

        res.json({
            mensaje: 'Contraseña incorrecta'
        })

    }

}




module.exports=PropietarioCtrl