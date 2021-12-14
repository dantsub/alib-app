import { useState } from "react";
export function Editarfecha(){
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
            <button 
            className="btn btn-primary align-self-end btn-crear"
            id="editar"
            data-bs-toggle="modal"
            data-bs-target="#modal_editar_fecha">
            <i className="fas fa-edit"></i>
            </button>

            {/* <!-- Modal Crear Fecha  --> */}
            <div className="modal fade" 
            id="modal_editar_fecha" 
            tabindex="-1" 
            aria-labelledby="titulo_editar"
            aria-hidden="true">
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 id="titulo_editar">Editar Fecha</h5>
                        <button type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close">
                        </button>
                    </div>
                    <div className="modal-body">
                    <form
                        id="editarfecha"
                        action=""
                        noValidate validated={validated} onSubmit={handleSubmit}
                        >
                        <input type="hidden" name="oculto" value="editarfecha"/>
                        <label for="" className="form-label">Jornada</label>
                        <select name="Jornadas" className="form-control-sm">
                        <option value="1"selected>1</option>
                        <option value="2" >2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        </select>
                        <div>
                        <label for="" className="form-label">Fecha inicial</label>
                        <input type="date" className="form-control" id="fechaini" placeholder="Fecha inicial"/>
                    </div>
                    <div>
                        <label for="" className="form-label">Fecha Fin</label>
                        <input type="date" className="form-control" id="fechafin" placeholder="Fecha final"/>
                    </div>
                    <div>
                   
                            <div>                        
                                <th width= "10%">Local</th>
                                <th width= "10%">Visante</th>
                                <th width= "10%">Fecha</th>
                            </div>
                            <div>
                                <th width= "10%" align="left"><select align="left" name="Equipos" className="form-control-sm">
                                <option value="Eq1">Equipo A</option>
                                <option value="Eq2">Equipo B</option>
                                <option value="Eq3">Equipo C</option>
                                <option value="Eq4">Equipo D</option>
                                </select></th>
                                <th><select name="Equipos" className="form-control-sm">
                                <option value="Eq1">Equipo A</option>
                                <option value="Eq2">Equipo B</option>
                                <option value="Eq3">Equipo C</option>
                                <option value="Eq4">Equipo D</option></select></th>
                                <th><input type="date" id="fecha" placeholder="Fecha" className="form-control-sm"/></th>
                            </div>
                            <tr>
                                <td><select name="Equipos" className="form-control-sm">
                                <option value="Eq1">Equipo A</option>
                                <option value="Eq2">Equipo B</option>
                                <option value="Eq3">Equipo C</option>
                                <option value="Eq4">Equipo D</option>
                                </select></td>
                                <td><select name="Equipos" className="form-control-sm">
                                <option value="Eq1">Equipo A</option>
                                <option value="Eq2">Equipo B</option>
                                <option value="Eq3">Equipo C</option>
                                <option value="Eq4">Equipo D</option></select></td>
                                <td><input type="date" id="fecha" placeholder="Fecha" className="form-control-sm"/></td>
                            </tr>
                                                                               
                            <div className="modal-footer">
                                <button className="btn btn-primary" type="button">
                                    Editar
                                </button>
                                </div>
                                </div>
                            </form>
                        </div>
                    
                    </div>
                </div>
            </div>           
        </>
    );
}