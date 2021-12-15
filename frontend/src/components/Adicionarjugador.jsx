import { useState, useRef } from "react";

export function Adicionarjugador(){

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
    const docjug = useRef();
    const fnacjug = useRef();
  

    function guardar(){
        const nombre = nomjug.current.value;
        const documento = docjug.current.value;
        const fnacimiento = fnacjug.current.value;
        fetch(`http://localhost:8081/players/guardar`,{
            headers: {"content-type":"application/json"},
            method: "POST",
            body: JSON.stringify({nombre, documento, fnacimiento})
             })
        .then(dato=>dato.json())
        .then(dato=>alert(dato.msg))
        .catch(error=>alert(error));
    };

// function consultar(){
//         const nombre =nomjug.current.value;
//         fetch(`http://localhost:8081/jugadores/consultar/${nombre}`)
//         .then(res=>res.json())
//         .then(res=>{
//             posjug.current.value=res.posicion;
//             numjug.current.value=res.numerocamiseta;
//         });
//     }



    return (
        <>

        <button className="btn btn-primary" id="crear" data-bs-toggle="modal"
                    data-bs-target="#modal_adicionar_jugador">
                    <i class="fa fa-address-book"></i> Adicionar Jugador
                  </button> 
            
        {/* <!-- Modal Adicionar Jugador  --> */}

        <div
        className="modal fade"
        id="modal_adicionar_jugador"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        >
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
                Adicionar Jugador
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
                    <input type="text"  className="form-control" id="nombre" placeholder="Nombre del jugador" required minlength="2" ref={nomjug} />
                    <div className="invalid-feedback">
                        Por favor ingrese el nombre del jugador
                    </div>
                </div>
                <div className="form-group">
                    <label for="" className="form-label">Documento</label>
                    <input type="number"  className="form-control" id="documento" placeholder="Documento" required ref={docjug} />
                    <div className="invalid-feedback">
                        Por favor ingrese un documento válido
                    </div>
                </div>
                <div className="form-group">
                    <label for="" className="form-label">Fecha de nacimiento</label>
                    <input type="date"  className="form-control" id="nacimiento" placeholder="Fecha Nacimiento" required ref={fnacjug} />
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
                onClick={guardar}
            >
                Adicionar Jugador
            </button>


            </div>
            </form>
        </div>
        </div>
        </div>

        {/* <!-- FIN MODAL ADICIONAR JUGADOR --> */}

        
        </>
    );
}