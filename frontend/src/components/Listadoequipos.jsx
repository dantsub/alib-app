import { useEffect, useState } from "react";
import { consumirlistarequipos } from "../API/Alip_Api"

export function Listadoequipos (){
    document.title="Listadoequipo";
    
    let [Refrescar, setRefrescar]  = useState(true);
    let [listado_equipos, setListado_equipos] = useState([]);

    useEffect ( () => {
        const solicitar_listadoequipos= async () => {
            const dato = await consumirlistarequipos();
            setListado_equipos(dato.equipos);
    
        };
        solicitar_listadoequipos();
    }, [Refrescar])
    console.log (listado_equipos);

     return (
        <>
            <button className="btn btn-primary" id="crear" data-bs-toggle="modal"
                data-bs-target="#modal_adicionar_campeonato">
                <i class="fa fa-plus-square"></i> Adicionar equipos
            </button> 
                
            {/* <!-- Modal ADICIONAR EQUIPOS A CAMPEONATOS  --> */}
    
            <div className="modal fade"
                id="modal_adicionar_campeonato"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Adicionar equipos a campeonatos
                            </h5>
                            <button 
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <form
                        id="adicionarequiposcampeonato"
                        action=""
                        >
                        <input type="hidden" name="oculto" value="adicionarequiposcampeonato"/>
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


                                <tbody className="table-body" id="tablaequipos">
                                    {listado_equipos.map(equip=>
                                        <tr>
                                            <td>
                                                <div className="container">
                                                    <div className="col-md-4 px-0">
                                                        <img src={equip.logo} className="img-fluid" width="100px" height="100px" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{equip.nombre}</td>
                                            <td>{equip.rep}</td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                    <label className="form-check-label" for="flexCheckDefault"/>
                                                </div>
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
                        >Cancelar</button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >Adicionar Equipos</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- FIN MODAL ADICIONAR EQUIPOS A CAMPEONATOS --> */}
        </>
        );
}
