export function Eliminarjugador(){
    return (
        <>
             <button
                className="btn btn-danger table-buttons"
                data-bs-toggle="modal"
                data-bs-target="#modal_eliminar_jugador"
                >
                <i class="fa fa-trash"></i> Eliminar jugador
            </button>
                    
            {/* <!-- Modal Eliminar --> */}
            <div
                className="modal fade"
                id="modal_eliminar_jugador"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Eliminar jugador
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                    </div>
                    <form
                    id="borrarjugador"
                    action=""
                    >
                    <input type="hidden" name="oculto" value="eliminarjugador"/>
                    <input type="hidden" name="ocultoborrar" value=""/>
                    <div className="modal-body">
                    <p className="text-center">
                        ¿Está seguro que desea eliminar el jugador?
                        </p>
                      
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
                        Eliminar Jugador
                    </button>


                    </div>
                    </form>
                </div>
                </div>
            </div>

            {/* <!-- FIN MODAL ELIMINAR --> */}
        </>
    );
}