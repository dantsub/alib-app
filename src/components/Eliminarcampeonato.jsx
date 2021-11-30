export function Eliminarcampeonato(){
    return (
    <>
        <button
        className="btn btn-danger table-buttons"
        data-bs-toggle="modal"
        data-bs-target="#modal_eliminar_campeonato"
        >
        <i className="fa fa-trash"></i>
        </button>

        {/* <!-- Modal Eliminar --> */}
            <div
            className="modal fade"
            id="modal_eliminar_campeonato"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Eliminar campeonato
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <form
                    id="eliminarcampeonato"
                    action=""
                    >
                    <input type="hidden" name="oculto" value="eliminar"/>
                    <input type="hidden" name="ocultoborrar" value=""/>
                    <div className="modal-body">
                        <p className="text-center">
                            ¿Está seguro que desea eliminar el campeonato?
                            </p>
                            {/* <!-- <p className="text-center fw-bold">{{producto.1}}</p> --> */}
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
                            Eliminar campeonato
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