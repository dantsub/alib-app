import { useRef, useState } from "react";
import axios from "axios";

export function Editarjugador({documento, nombre, fnacimiento}){
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

    const nomjug = useRef();
    const fnacjug = useRef();

const editarjug = async (doc) =>{
    const nom = nomjug.current.value;
    const fnac = fnacjug.current.value;
    const response = await axios.post(`http://localhost:8081/players/editar`,
        {
            documento : doc,
            nombre : nom,
            fnacimiento : fnac
        },
        {headers: {"content-type":"application/json"}})
    const data = response.data;
    alert(data.msg)
    if (data.status==="Ok"){
        console.log("Status OK")
    }
    nomjug.current.value="";
    fnacjug.current.value=""; 
    };

    function dateedit(fecha) {
        const curr = new Date(fecha)
        var newfecha = curr.toISOString().substr(0,10);
        return newfecha;
      }


    return (
        <>

            <button className="btn btn-primary" id="crear" data-bs-toggle="modal"
                        data-bs-target={`#modal_adicionar_${documento}`}>
                        <i class="fa fa-address-book"></i> Editar Jugador
                    </button> 
                
            {/* <!-- Modal Editar Jugador  --> */}

            <div
            className="modal fade"
            id={`modal_adicionar_${documento}`}
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            >
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    Editar Jugador
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
                </div>
                <form
                id="adicionarjugador"
                action=""
                noValidate validated={validated} onSubmit={handleSubmit}
                >
                <input type="hidden" name="oculto" value="adicionarjugador"/>
                <input type="hidden" name="ocultoborrar" value=""/>
                <div className="modal-body">
                    <div className="form-group">
                        <label for="" className="form-label">Nombre del Jugador</label>
                        <input type="text"  className="form-control" id="nombre" placeholder="Nombre del jugador" required minlength="2" ref={nomjug} defaultValue ={nombre} />
                        <div className="invalid-feedback">
                            Por favor ingrese el nombre del jugador
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="" className="form-label">Documento</label>
                        <input type="number" readOnly className="form-control" id="documento" placeholder="Documento" required value={documento}/>
                        <div className="invalid-feedback">
                            Por favor ingrese un documento válido
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="" className="form-label">Fecha de nacimiento</label>
                        <input type="date"  className="form-control" id="nacimiento" placeholder="Fecha Nacimiento" required ref={fnacjug} defaultValue ={dateedit(fnacimiento)} />
                        <div className="invalid-feedback">
                                Por favor ingrese la fecha de nacimiento
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
                    onClick={()=>{editarjug(documento)}}
                >
                    Editar Jugador
                </button>


                </div>
                </form>
            </div>
            </div>
            </div>

            {/* <!-- FIN MODAL EDITAR JUGADOR --> */}


        </>
    );
}