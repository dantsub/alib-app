export function Adicionarjugador(){
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
            >
            <input type="hidden" name="oculto" value="adicionarjugador"/>
            <input type="hidden" name="ocultoborrar" value=""/>
            <div className="modal-body">
                <div className="form-group">
                    <label for="" className="form-label">Nombre del Jugador</label>
                    <input type="text"  className="form-control" id="nombre" placeholder="Nombre del jugador"/>
                </div>
                <div className="form-group">
                    <label for="" className="form-label">Documento</label>
                    <input type="number"  className="form-control" id="documento" placeholder="Documento"/>
                </div>
                <div className="form-group">
                <label for="" className="form-label">Fecha de nacimiento</label>
                <input type="date"  className="form-control" id="nacimiento" placeholder="Fecha Nacimiento"/>
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