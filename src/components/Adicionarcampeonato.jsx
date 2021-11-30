export function Adicionarcampeonato(){
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
                    >
                    <input type="hidden" name="oculto" value="adicionarjugador"/>
                    <input type="hidden" name="ocultoborrar" value=""/>
                    <div className="modal-body">
                        <div className="form-group">
                            <label for="" className="form-label">Nombre del Campeonato</label>
                            <input type="text"  className="form-control" id="nombre_campeonato" placeholder="Nombre del campeonato"/>
                        </div>
                        <div className="form-group">
                            <label for="" className="form-label">Fecha inicial</label>
                            <input type="date"  className="form-control" id="fecha_inicial" placeholder="Fecha inicial"/>
                        </div>
                        <div className="form-group">
                            <label for="" className="form-label">Fecha final</label>
                            <input type="date"  className="form-control" id="fecha_final" placeholder="Fecha final"/>
                        </div>
                        <div className="form-group">
                            <label for="" className="form-label">Organizador del evento</label>
                            <input type="text"  className="form-control" id="organizador_evento" placeholder="Organizador del evento"/>
                        </div>
                        <div className="form-group">
                            <label for="" className="form-label">Lugar del evento</label>
                            <input type="text"  className="form-control" id="lugar_evento" placeholder="Lugar del evento"/>
                        </div>                        
                        <div className="form-group">
                            <label for="" className="form-label">Número de equipos</label>
                            <input type="number"  className="form-control" id="num_equipos" placeholder="Número de equipos"/>
                        </div>
                        <div className="form-group">
                            <label for="" className="form-label">Premios</label>
                            <input type="text"  className="form-control" id="premios" placeholder="Premios"/>
                        </div>
                        <div className="form-group">
                            <label for="" className="form-label">Logo del campeonato</label>
                            <input type="file"  className="form-control" id="logo_campeonato" placeholder="Logo del campeonato"/>
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