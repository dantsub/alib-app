import { Base } from "./Base";
import { useRef, useState } from "react";


export function Crearequipo(){
    // Con esto cambiamos el título a la página que por default esta en Alib-app
        document.title="Crear Equipo";

        const [validated, setValidated] = useState("false");

        const handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            }
            event.target.className += " was-validated";

            setValidated(true);
        };

    return (
        <>

            <Base />
      
            
            {/* <!-- BEGIN: Content --> */}
            <div className="app-content content">
                {/* <!-- Content-wrapper --> */}
                <div className="content-wrapper">
                    <div className="card">
                        <div className="card-body border-bottom">
                        <h2>¡CREA TU EQUIPO!</h2>
        
                        </div>


                    
        
                    <div>
                    {/* <!-- Seccion de Formulario --> */}
                        <div className="row">
                            <div className="col-md-12 col-lg-4 mx-auto">
                                <form action="" noValidate validated={validated} onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label for="" className="form-label" >Nombre del Equipo</label>
                                        <input type="text"  className="form-control" id="doc" placeholder="Nombre del equipo" required/>
                                        <div className="invalid-feedback">
                                            Por favor ingrese el nombre del equipo
                                        </div>
                                    </div>                                    
                                    <div className="form-group">
                                    <label for="" className="form-label">Logo del Equipo</label>
                                    <input type="file"  className="form-control" id="logo" placeholder="logo" required/>
                                    <div className="invalid-feedback">
                                            Por favor ingrese el logo del equipo
                                    </div>
                                </div>
                                    <br/>
                                    <div className="row">
                                    <div className="col-lg-4 center-content">
                                        <button className="btn btn-primary" type="submit" >Guardar</button>
                                    </div>
                                    </div>
                                    <br />
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    


            

        </>
    );
}