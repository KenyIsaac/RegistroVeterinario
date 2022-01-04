import React, {  useState, } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';

export default function RegistrarPropietario() {


    const [nombre, setNombre]=useState('')
    const [correo, setCorreo]=useState('')
    const [contrasena, setContrasena]=useState('')

    const  registro = async(e)=>{
        e.preventDefault();
        const usuario={nombre, correo, contrasena}
        const respuesta = await Axios.post('./propietario/crear',usuario)
        console.log(respuesta)
        const mensaje = respuesta.data.mensaje
        if(mensaje!=='Bienvenido')
        {
            Swal.fire({
                icon:'error',
                title:mensaje,
                showConfirmButtom:false,
                timer:1800
            })
        }

        else{
            // const token= respuesta.data.token
            // const nombre= respuesta.data.nombre
            // const idUsuario = respuesta.data.id
            // sessionStorage.setItem('token',token)
            // sessionStorage.setItem('nombre',nombre)
            // sessionStorage.setItem('idUsuario',idUsuario)


            Swal.fire({
                icon:'success',
                title:"Propietario creado correctamente",
                showConfirmButtom:false,
                timer:1800
            })

            setTimeout(()=>{
                window.location.href='/'
            },2000)
        }




    }


    return (


            <div className="container mt-4">
                <div className="row">
                <div className="col-md-7  mx-auto">
                    <div className="card">
                    <div className="container text-center fa-5x">
                    <i className="fas fa-user-plus"></i>
                    </div>
                    <div className="card-header bg-success text-center">
                        <h4>Registrar Propietario</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={registro}>

                        <div className="row">

                            <div className="form-group">
                            <label>Nombre del propietario</label>
                            <input type="text" className="form-control required" onChange={(e)=>setNombre(e.target.value)} />
                            </div>

                            <div className="form-group">
                            <label>Correo</label>
                            <input type="text" className="form-control required" onChange={(e)=>setCorreo(e.target.value)}/>
                            </div>

                            <div className="form-group">
                            <label>Contraseña</label>
                            <input type="text" className="form-control required" onChange={(e)=>setContrasena(e.target.value)} />
                            </div>


                        </div>

                        <br />

                        <button type="submit" class="btn btn-outline-info">
                            <span class="fa fa-save"></span> Guardar
                        </button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
             </div>


    )
}
