import React, {  useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Axios from 'axios';
import MaterialTable from 'material-table';
import { Modal, Button, handleClose } from 'react-bootstrap';

function BasicSearch() {

    const[mascotas, setMascotas] = useState([])
    const[idMascota, setIdMascota] = useState(' ')
    const[nombreMascota, setNombreMascota] = useState('')
    const[fechaNacimiento, setFechaNacimiento] = useState('')
    const[ultimaVacuna, setUltimaVacuna] = useState('')
    const[ultimaDesparasitacion, setUltimaDesparasitacion] = useState('')
    const[propietarioNombre, setPropietarioNombre] = useState('')
    const[numeroTelefono, setNumeroTelefono] = useState('')

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(()=>{

        obtenerMascotas()

    },[])

    const obtenerMascotas= async()=>{

         const id = sessionStorage.getItem('idPropietario')
         const token = sessionStorage.getItem('token')
         const respuesta = await Axios.get('/mascota/listarMascotaPropietario/'+id,mascotas,{
             headers:{'autorizacion':token}
         })

         console.log(respuesta)
         setMascotas(respuesta.data)

    }


        const obtenerMascota = async(idParametro)=>{


            setShow(true)
            const id = idParametro
            const token = sessionStorage.getItem('token')
            const respuesta = await Axios.get('/mascota/listar/'+id,mascotas,{
             headers:{'autorizacion':token}
         })

         console.log(respuesta.data)



         setIdMascota(respuesta.data._id)
         setNombreMascota(respuesta.data.setNombreMascota)
         setFechaNacimiento(respuesta.data.setFechaNacimiento)
         setUltimaVacuna(respuesta.data.setUltimaVacuna)
         setUltimaDesparasitacion(respuesta.data.setUltimaDesparasitacion)
         setPropietarioNombre(respuesta.data.setPropietarioNombre)
         setNumeroTelefono(respuesta.data.setNumeroTelefono)

        }



        const actualizar = async (e)=>{
            e.preventDefault();
            const  id = idMascota
            const token = sessionStorage.getItem('token')
            const mascota ={

                nombreMascota,
                fechaNacimiento,
                ultimaVacuna,
                ultimaDesparasitacion,
                propietarioNombre,
                numeroTelefono

            }
            const respuesta = await Axios.put('/mascota/actualizar/'+id,mascotas,{
                headers:{'autorizacion':token}
            })
            const mensaje = respuesta.data.mensaje
            obtenerMascota()

            Swal.fire({
                icon:'success',
                title:mensaje,
                showConfirmButtom:false,
                timer:1800
            })

            setShow(false)

        }

        const eliminar= async (id) =>{

            const token = sessionStorage.getItem('token')
            const respuesta = await Axios.delete('/mascota/eliminar/'+id,{
                headers:{'autorizacion':token}
            })
            const mensaje = respuesta.data.mensaje
     
            Swal.fire({
                icon:'success',
                title:mensaje,
                showConfirmButtom:false,
                timer:1800
            })
            obtenerMascotas()
            


        }




        const data = mascotas.map((mascotas)=>({

            id:mascotas._id,
            nombreMascota:mascotas.nombreMascota,
            fechaNacimiento:mascotas.fechaNacimiento,
            ultimaVacuna:mascotas.ultimaVacuna,
            ultimaDesparasitacion:mascotas.ultimaDesparasitacion,
            propietarioNombre:mascotas.propietarioNombre,
            numeroTelefono:mascotas.numeroTelefono


        }))





    return (
        <div className="container">
                <br />
            <MaterialTable
                title="Lista de mascotas"
                columns={[
                { title: 'ID', field: '_id' },
                { title: 'Nombres', field: 'nombreMascota' },
                { title: 'Fecha de Nacimiento', field: 'fechaNacimiento' },
                { title: 'Ultima Vacuna', field: 'ultimaVacuna' },
                { title: 'Ultima desparasitacion', field: 'ultimaDesparasitacion' },
                { title: 'Nombre propietario', field: 'propietarioNombre' },
                { title: 'Telefono', field: 'numeroTelefono' },

                

                ]}
           
                data={data}   


                options={{
                search: true,
                actionsColumnIndex: -1,
                initialPage:1
                }}

                actions={[
                    {

                    icon:'delete',
                    tooltip:'Eliminar',
                    onclick:(event,rowData)=>eliminar(rowData.id)
                    

                    },

                    {

                    icon:'edit',
                    tooltip:'Editar',
                    onClick:(event,rowData)=>obtenerMascota(rowData.id)

                    }
            ]}

            />


                <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Editar Mascota</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="container mt-4">
                <div className="row">
                <div className="col-md-7  mx-auto">
                    <div className="card">
                    <div className="container text-center fa-5x">
                    <i class="fas fa-paw"></i>
                    </div>
                    <div className="card-header bg-success text-center">
                        <h4>Editar Mascota</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={'guardar'}>

                        <div className="row">

                            <div className="col-md-6">
                            <label>Nombre de la mascota</label>
                            <input type="text" className="form-control required" onChange={(e)=>setNombreMascota(e.target.value)} value={nombreMascota} />
                            </div>

                            <div className="col-md-6">
                            <label>Fecha de nacimiento</label>
                            <input type="text" className="form-control required" onChange={(e)=>setFechaNacimiento(e.target.value)} value={fechaNacimiento}/>
                            </div>


                            <div className="col-md-6">
                            <label>Última vacuna</label>
                            <input type="text" className="form-control required" onChange={(e)=>setUltimaVacuna(e.target.value)} value={ultimaVacuna}/>
                            </div>

                            <div className="col-md-6">
                            <label>Última desparacitación</label>
                            <input type="text" className="form-control required" onChange={(e)=>setUltimaDesparasitacion(e.target.value)} value={ultimaDesparasitacion}/>
                            </div>

                            <div className="col-md-6">
                            <label>Nombre del propietario</label>
                            <input type="text" className="form-control required" onChange={(e)=>setPropietarioNombre(e.target.value)} value={propietarioNombre}/>
                            </div>

                            <div className="col-md-6">
                            <label>Número de celular</label>
                            <input type="text" className="form-control required" onChange={(e)=>setNumeroTelefono(e.target.value)} value={numeroTelefono}/>
                            </div>


                        </div>

                        <br />


                        </form>
                    </div>
                    </div>
                </div>
                </div>
             </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={eliminar}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={actualizar}>
                        Guardar cambios 
                    </Button>
                    </Modal.Footer>
                </Modal>



      </div>
    )
  }
  
export default BasicSearch