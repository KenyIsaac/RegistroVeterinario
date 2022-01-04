// Dependencias que requiero
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require ('body-parser')
require('./database')


//Acá es la configuración del puerto

app.set('Port', process.env.PORT || 4000);
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(cors({origen: '*'}))

app.use('/propietario',require('./routes/Propietario.route'))
app.use('/mascota',require('./routes/Mascota.route'))


app.listen(app.get('Port'),()=>{
    console.log('El servidor se ejecuta por el puerto',app.get('Port'))
})