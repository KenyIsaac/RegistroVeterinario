import React from 'react';

export default function RegistrarMascota() {
    return (
       
            
            <div className="container mt-4">
                <div className="row">
                <div className="col-md-7  mx-auto">
                    <div className="card">
                    <div className="container text-center fa-5x">
                        <i className="fas fa-user-plus"></i>
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
                            <label>Nº de microchip</label>
                            <input type="text" className="form-control required" />
                            </div>

                            <div className="col-md-6">
                            <label>Nombre del propietario</label>
                            <input type="text" className="form-control required" />
                            </div>

                            <div className="col-md-6">
                            <label>Teléfono del propietario</label>
                            <input type="text" className="form-control required" />
                            </div>

                            <div className="col-md-6">
                            <label>Estado reproductivo</label>
                            <input type="text" className="form-control required" />
                            </div>

                            <div className="col-md-6">
                            <label>Estado vacunal</label>
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
