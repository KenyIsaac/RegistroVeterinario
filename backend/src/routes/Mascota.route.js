const {Router}= require('express')
const router = Router()
const MascotaCtrl = require('../controller/Mascota.controller')
const Auth = require('../helper/Auth')

router.post('/crear', Auth.verificarToken, MascotaCtrl.crear)
router.get('/listarMascotas', Auth.verificarToken, MascotaCtrl.listar)
router.get('/listar/:id', Auth.verificarToken, MascotaCtrl.listarId)
router.get('/listarCriterio/:criterio', Auth.verificarToken, MascotaCtrl.buscarMascotaCriterio)
router.get('/listarMascotaPropietario/:id', Auth.verificarToken, MascotaCtrl.mascotaDeUnPropietario)
router.delete('/eliminar/:id', Auth.verificarToken, MascotaCtrl.eliminar)
router.put('/actualizar/:id', Auth.verificarToken, MascotaCtrl.actualizar)





module.exports = router