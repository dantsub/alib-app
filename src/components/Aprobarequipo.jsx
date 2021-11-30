export function Aprobarequipo(){
    return (
    <>
        <button
        className="btn btn-primary table-buttons"
        data-bs-toggle="modal"
        data-bs-target="#modal_aprobar_equipo"
        >
        <i className="fa fa-check-square"></i>
        </button>

        {/* <!-- Modal Aprobarequipo --> */}
            <div
            className="modal fade"
            id="modal_aprobar_equipo"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Aprobar equipo
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <form
                    id="aprobarcampeonato"
                    action=""
                    >
                    <input type="hidden" name="oculto" value="eliminar"/>
                    <input type="hidden" name="ocultoborrar" value=""/>
                    <div className="modal-body">
                        <p className="text-center">
                            ¿Está seguro que desea aprobar el equipo?
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
                            Aprobar equipo
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
        {/* <!-- FIN MODAL  Aprobarequipo --> */}
    </>
    );
}