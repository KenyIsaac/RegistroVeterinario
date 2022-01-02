import React from 'react';

export default function RegistrarPropietario() {
    return (
       
            
            <div className="container mt-4">
                <div className="row">
                <div className="col-md-7  mx-auto">
                    <div className="card">
                    <div className="container text-center fa-5x">
                        <i className="fas fa-user-plus"></i>
                    </div>
                    <div className="card-header bg-success text-center">
                        <h4>Registrar propietario</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={"guardar"}>

                        <div className="row">

                            <div className="col-md-6">
                            <label>Nombre del propietario</label>
                            <input type="text" className="form-control required" />
                            </div>

                            <div className="col-md-6">
                            <label>Documento de identidad</label>
                            <input type="text" className="form-control required" />
                            </div>

                            <div className="col-md-6">
                            <label>Número telefónico</label>
                            <input type="text" className="form-control required" />
                            </div>

                            <div className="col-md-6">
                            <label>Ciudad de residencia</label>
                            <input type="text" className="form-control required" />
                            </div>

                            <div className="col-md-6">
                            <label>Correo electrónico</label>
                            <input type="text" className="form-control required" />
                            </div>

                            <div className="col-md-6">
                            <label>Contacto de emergencia</label>
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
