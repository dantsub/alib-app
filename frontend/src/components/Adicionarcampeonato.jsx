import { useState, useRef } from "react";

export function Adicionarcampeonato(){

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


    const nombrecampg   = useRef();
	const fecinicampg   = useRef();
	const fecfincampg   = useRef();
	const orgcampg      = useRef();
	const lugarcampg    = useRef();
	const numequipcampg = useRef();
	const premioscampg  = useRef();
	const logocampg     = useRef();  

    function guardarcamp(){
        const nombrecamp    = nombrecampg.current.value;
        const fecinicamp    = fecinicampg.current.value;
        const fecfincamp    = fecfincampg.current.value;
        const orgcamp       = orgcampg.current.value;
        const lugarcamp     = lugarcampg.current.value;
        const numequipcamp  = numequipcampg.current.value;
        const premioscamp   = premioscampg.current.value;
        const logocamp      = logocampg.current.value;

        fetch(`http://localhost:8081/campeonatos/guardarcamp`,{
            headers: {"content-type":"application/json"},
            method: "POST",
            body: JSON.stringify({nombrecamp, fecinicamp, fecfincamp, orgcamp, lugarcamp, numequipcamp, premioscamp, logocamp})
             })
        .then(dato=>dato.json())
        .then(dato=>alert(dato.msg))
        .catch(error=>alert(error));
    };
    
    return (
    <>
        <button className="btn btn-primary" id="crear" data-bs-toggle="modal"
            data-bs-target="#modal_adicionar_campeonato">
            <i class="fa fa-plus-square"></i> Adicionar Campeonato
        </button> 
            
        {/* <!-- Modal Adicionar Campeonato  --> */}

        <div className="modal fade"
            id="modal_adicionar_campeonato"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Adicionar Campeonato
                    </h5>
                    <button 
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                    </div>
                    <form
                        id="adicionarcampeonato"
                        action=""
                        noValidate validated={validated} onSubmit={handleSubmit}
                        >
                        <input type="hidden" name="oculto" value="adicionarcampeonato"/>
                        <input type="hidden" name="ocultoborrar" value=""/>
                        <div className="modal-body">
                            <div className="form-group">
                                <label for="" className="form-label">Nombre del Campeonato</label>
                                <input type="text"  className="form-control" id="nombre_campeonato" placeholder="Nombre del campeonato" required ref={nombrecampg}/>
                                <div className="invalid-feedback">
                                    Por favor ingrese el nombre del campeonato
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Fecha inicial</label>
                                <input type="date"  className="form-control" id="fecha_inicial" placeholder="Fecha inicial" required ref={fecinicampg}/>
                                <div className="invalid-feedback">
                                    Por favor ingrese la fecha inicial
                                </div>                                
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Fecha final</label>
                                <input type="date"  className="form-control" id="fecha_final" placeholder="Fecha final" required ref={fecfincampg}/>
                                <div className="invalid-feedback">
                                    Por favor ingrese la fecha fecha
                                </div>                                
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Organizador del evento</label>
                                <input type="text"  className="form-control" id="organizador_evento" placeholder="Organizador del evento" required ref={orgcampg}/>
                                <div className="invalid-feedback">
                                    Por favor ingrese el organizador del evento
                                </div>                                
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Lugar del evento</label>
                                <input type="text"  className="form-control" id="lugar_evento" placeholder="Lugar del evento" required ref={lugarcampg}/>
                                <div className="invalid-feedback">
                                    Por favor ingrese el lugar del evento
                                </div>                                
                            </div>                        
                            <div className="form-group">
                                <label for="" className="form-label">Número de equipos</label>
                                <input type="number"  className="form-control" id="num_equipos" placeholder="Número de equipos" required ref={numequipcampg}/>
                                <div className="invalid-feedback">
                                    Por favor ingrese el número de equipos
                                </div>                                    
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Premios</label>
                                <input type="text"  className="form-control" id="premios" placeholder="Premios" required ref={premioscampg}/>
                                <div className="invalid-feedback">
                                    Por favor ingrese los premios
                                </div>                                    
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Logo del campeonato</label>
                                <input type="file"  className="form-control" id="logo_campeonato" placeholder="Logo del campeonato"  ref={logocampg}/>
                                <div className="invalid-feedback">
                                    Por favor ingrese el logo
                                </div>                                    
                            </div>
                        </div>
                        <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={guardarcamp}
                        >
                            Adicionar Campeonato
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {/* <!-- FIN MODAL ADICIONAR CAMPEONATO --> */}
    </>
    );
}