const {Router}= require('express')
const router = Router()
const PropietarioCtrl= require('../controller/Propietario.controller')

router.post('/crear',PropietarioCtrl.crearPropietario)
router.post('/login',PropietarioCtrl.login)

module.exports = router