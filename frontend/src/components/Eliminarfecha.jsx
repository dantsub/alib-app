export function Eliminarfecha(){
    return (
    <>
        <button
        className="btn btn-danger table-buttons"
        data-bs-toggle="modal"
        data-bs-target="#modal_eliminar_fecha"
        >
        <i className="fa fa-trash"></i>
        </button>

        {/* <!-- Modal Eliminar --> */}
            <div
            className="modal fade"
            id="modal_eliminar_fecha"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Eliminar fecha
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <form
                    id="eliminarfecha"
                    action=""
                    >
                    <input type="hidden" name="oculto" value="eliminar"/>
                    <input type="hidden" name="ocultoborrar" value=""/>
                    <div className="modal-body">
                        <p className="text-center">
                            ¿Está seguro que desea eliminar la fecha?
                            </p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            No
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Si 
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