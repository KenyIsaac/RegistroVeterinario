import React from 'react';

export default function RegistrarMascota() {
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
                        <form onSubmit={"guardar"}>

                        <div className="row">

                            <div className="col-md-6">
                            <label>Nombre de la mascota</label>
                            <input type="text" className="form-control required" />
                            </div>

                            <div className="col-md-6">
                            <label>Fecha de nacimiento</label>
                            <input type="text" className="form-control required" />
                            </div>

                            <div className="col-md-6">
                            <label>Especie</label>
                            <input type="text" className="form-control required" />
                            </div>

                            <div className="col-md-6">
                            <label>Estado reproductivo</label>
                            <input type="text" className="form-control required" />
                            </div>

                            <div className="col-md-6">
                            <label>Última vacuna</label>
                            <input type="text" className="form-control required" />
                            </div>

                            <div className="col-md-6">
                            <label>Última desparacitación</label>
                            <input type="text" className="form-control required" />
                            </div>

                            <div className="col-md-6">
                            <label>Nombre del propietario</label>
                            <input type="text" className="form-control required" />
                            </div>

                            <div className="col-md-6">
                            <label>Número de celular</label>
                            <input type="text" className="form-control required" />
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
