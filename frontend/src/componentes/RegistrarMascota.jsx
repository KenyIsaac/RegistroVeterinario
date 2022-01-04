import React, {  useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Axios from 'axios';


export default function RegistrarMascota() {

    const[nombreMascota, setNombreMascota] = useState('')
    const[fechaNacimiento, setFechaNacimiento] = useState('')
    const[ultimaVacuna, setUltimaVacuna] = useState('')
    const[ultimaDesparasitacion, setUltimaDesparasitacion] = useState('')
    const[propietarioNombre, setPropietarioNombre] = useState('')
    const[numeroTelefono, setNumeroTelefono] = useState('')




    const guardar = async(e)=>{
        e.preventDefault()
        const mascotas = {
            nombreMascota: sessionStorage.getItem('idNombreMascota'),
            fechaNacimiento,
            ultimaVacuna,
            ultimaDesparasitacion,
            propietario: sessionStorage.getItem('idUsuario'),
            propietarioNombre: sessionStorage.getItem('idPropietario'),
            numeroTelefono
            
        }

        if(nombreMascota===""){

            Swal.fire({
                icon:'error',
                title:"Debe registrar un nombre",
                showConfirmButtom:false,
                timer:1800
            })

        }

        else if(fechaNacimiento===""){

            Swal.fire({
                icon:'error',
                title:"Debe registrar una fecha de nacimiento",
                showConfirmButtom:false,
                timer:1800
            })

        }

        else if(ultimaVacuna===""){

            Swal.fire({
                icon:'error',
                title:"Debe registrar la última vacuna",
                showConfirmButtom:false,
                timer:1800
            })

        }

        else if(ultimaDesparasitacion===""){

            Swal.fire({
                icon:'error',
                title:"Debe registrar la última desparasitación",
                showConfirmButtom:false,
                timer:1800
            })

        }

        else if(propietarioNombre===""){

            Swal.fire({
                icon:'error',
                title:"Debe registrar un nombre",
                showConfirmButtom:false,
                timer:1800
            })

        }

        else if(numeroTelefono===""){

            Swal.fire({
                icon:'error',
                title:"Debe registrar un número de telefono",
                showConfirmButtom:false,
                timer:1800
            })

        }

        else{

            const token = sessionStorage.getItem('token')
            const respuesta = await Axios.post('/mascota/crear',mascotas,{
                headers:{'autorizacion':token}
            })

            const mensaje= respuesta.data.mensaje
            console.log(mensaje)

            Swal.fire({
                icon:'success',
                title:mensaje,
                showConfirmButtom:false,
                timer:1800
            })

            e.target.reset();
            setNombreMascota("");
            setFechaNacimiento("");
            setUltimaVacuna("");
            setUltimaDesparasitacion("");
            setPropietarioNombre("");
            setNumeroTelefono("");



        }
    }





    return (
       
            
            <div className="container mt-4">
                <div className="row">
                <div className="col-md-7  mx-auto">
                    <div className="card">
                    <div className="container text-center fa-5x">
                    <i class="fas fa-paw"></i>
                    </div>
                    <div className="card-header bg-success text-center">
                        <h4>Registrar Mascota</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={guardar}>

                        <div className="row">

                            <div className="col-md-6">
                            <label>Nombre de la mascota</label>
                            <input type="text" className="form-control required" onChange={(e)=>setNombreMascota(e.target.value)} />
                            </div>

                            <div className="col-md-6">
                            <label>Fecha de nacimiento</label>
                            <input type="text" className="form-control required" onChange={(e)=>setFechaNacimiento(e.target.value)}/>
                            </div>


                            <div className="col-md-6">
                            <label>Última vacuna</label>
                            <input type="text" className="form-control required" onChange={(e)=>setUltimaVacuna(e.target.value)} />
                            </div>

                            <div className="col-md-6">
                            <label>Última desparacitación</label>
                            <input type="text" className="form-control required" onChange={(e)=>setUltimaDesparasitacion(e.target.value)} />
                            </div>

                            <div className="col-md-6">
                            <label>Nombre del propietario</label>
                            <input type="text" className="form-control required" onChange={(e)=>setPropietarioNombre(e.target.value)}/>
                            </div>

                            <div className="col-md-6">
                            <label>Número de celular</label>
                            <input type="text" className="form-control required" onChange={(e)=>setNumeroTelefono(e.target.value)} />
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
