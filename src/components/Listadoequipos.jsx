import real_madrid from '../asset/real_madrid.jpg';
import Chelsea_FC from '../asset/Chelsea_FC.jpg';
import juventus from '../asset/juventus.jpg';
import barza from '../asset/barza.jpg';
import { useRef, useState } from "react";

export function Listadoequipos (){
    document.title="Listadoequipo";
    
    const listaequipos = [{
        "logo":real_madrid,
        "equipo":"Real Madrid",
        "manager":"Carlo Ancelotti"
       },
       {
        "logo":Chelsea_FC,
        "equipo":"Chelsea FC",
        "manager":"Thomas Tuchel"
       },
       {
        "logo":juventus,
        "equipo":"Juventus",
        "manager":"Massimiliano Allegri"
       },
       {
        "logo":barza,
        "equipo":"Barcelona FC",
        "manager":"Xavi Hernández"
       },
    
    ]


    const [listado_equipos, setListado_equipos] = useState(listaequipos);

    const buscar_equipos = (evento)=>{
        setListado_equipos(listaequipos.filter(j=> j.equipo.toLowerCase().includes(evento.target.value.toLowerCase())));
    }

    return (
        <>
            <button className="btn btn-primary" id="crear" data-bs-toggle="modal"
                data-bs-target="#modal_adicionar_campeonato">
                <i class="fa fa-plus-square"></i> Adicionar equipos
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
                            Listado de equipos
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
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Logo</th>
                                        <th>Equipo</th>
                                        <th>Manager</th>
                                        <th>Seleccionar</th>
                                    </tr>
                                </thead>


                                <tbody className="js-table-body" id="tablajugadores">
                                    {listado_equipos.map(equip=>
                                        <tr>
                                            <td>
                                                <div className="container">
                                                    <div className="col-md-4 px-0">
                                                        <img src={equip.logo} className="img-fluid" width="80px" height="80px" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{equip.equipo}</td>
                                            <td>{equip.manager}</td>
                                            <td>
                                                
                                            </td>
                                            <td> 
                                                
                                            
                                            </td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
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
                            Adicionar Equipos
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