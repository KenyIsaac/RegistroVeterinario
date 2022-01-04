const Auth= {}
const jwt = require('jsonwebtoken')

Auth.verificarToken= (req,res,next)=>{
    if(!req.headers.autorizacion){
        return res.json({
            mensaje: 'No tienes autorización'
        })
    }

    const token = req.headers.autorizacion
    if(token===null){

        return res.json({
            mensaje: 'No tienes autorización'
        })

    }

    jwt.verify(token,'Secreto',(error,resultado)=>{
        if(error)
        return res.json({
            mensaje: 'No tienes autorización'

        })

        next();
    })
}










module.exports= Auth