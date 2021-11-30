import { Base } from "./Base";
import { Eliminarcampeonato } from "./Eliminarcampeonato";
import { useRef, useState } from "react";
import uefa from '../asset/uefa.jpg'
import LigaBetPlay from '../asset/LigaBetPlay.jpg'
import conmebol from '../asset/conmebol.jpg'
import { Adicionarcampeonato } from "./Adicionarcampeonato";


export function Gescampeonatos(){
    document.title="Campeonato";
    
    const campeonato = [{
        "logo":uefa,
        "nombre":"Liga de campeones de la UEFA",
        "fecha_ini":"01/05/2021",
        "fecha_fin":"31/05/2022",
        "organizador":"Nora Lila Dams Pérez",
        "num_equpos":"30",
        "lugar":"Europa",
        "estado":"En inscripciones"
       },
       {
        "logo":LigaBetPlay,
        "nombre":"Liga Betplay Dimayor",
        "fecha_ini":"01/05/2021",
        "fecha_fin":"31/05/2022",
        "organizador":"Lesly Sharyn Campo Jimenez",
        "num_equpos":"20",
        "lugar":"Colombia",
        "estado":"En proceso"
       },
       {
        "logo":conmebol,
        "nombre":"Eliminatorias Sudamericanas Catar 2022",
        "fecha_ini":"01/05/2021",
        "fecha_fin":"31/05/2022",
        "organizador":"Luis Alejandro Gómez Cuellar",
        "num_equpos":"20",
        "lugar":"Colombia",
        "estado":"Terminado"
       },
    ]

    const [listar_campeonato, setListar_campeonato] = useState(campeonato);

    const buscar_campeonato = (evento)=>{
      setListar_campeonato(campeonato.filter(e=> e.nombre.toLowerCase().includes(evento.target.value.toLowerCase())));
    }
  
    return (
    <>
      <Base />
      {/* <!-- BEGIN: Content --> */}
      <div className="app-content content">
        {/* <!-- Content-wrapper --> */}
        <div className="content-wrapper">
          <div className="card">
            <div className="card-body border-bottom">
              <h2>Campeonatos</h2>
              {/* <!-- Seccion de filtros --> */}
              <h4 className="card-title">Busqueda y filtros</h4>
              <div className="row">
                <div className="col-md-3">
                  <label className="form-label" for="Searchproducto"
                    >Busqueda de Campeonatos</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Searchproducto"
                    placeholder="Busqueda"
                    aria-controls="Buscar"
                    onChange={buscar_campeonato}
                  />
                </div>

                <div className="col-md-3 d-flex align-items-end">
                  <Adicionarcampeonato />
                </div>

              </div>
            </div>
            {/* <!-- Fin card-body -->
            <!-- Fin seccion del filtros --> */}

            <div>
              {/* <!-- Seccion de tabla --> */}
              <div
                className="card-dataTable table-responsive pt-0"
                style={{ padding: '5px' }}
              >
                <div
                  className="table-responsive table-bordered"
                  id="Div-tablaequipo"
                >
                  <table className="table table-hover">
                    <thead>
                      <tr className="js-row">
                        <th>Logo</th>
                        <th>Campeonato</th>
                        <th>Fecha Ini.</th>
                        <th>Fecha fin</th>
                        <th>Organizador</th>
                        <th>Núm Equipos</th>
                        <th>Lugar</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="js-table-body" id="tablaequipos">
                    {listar_campeonato.map(camp=>
                        <tr className="js-row">
                            <td>
                                <div className="container">
                                    <div className="col-md-4 px-0">
                                        <img src={camp.logo} className="img-fluid" width="150px" height="150px" />
                                    </div>
                                </div>
                            </td>
                            <td>{camp.nombre}</td>
                            <td>{camp.fecha_ini}</td>
                            <td>{camp.fecha_fin}</td>
                            <td>{camp.organizador}</td>
                            <td>{camp.num_equpos}</td>
                            <td>{camp.lugar}</td>
                            <td>{camp.estado}</td>
                            <td> 
                               <Eliminarcampeonato />
                                <button className="btn btn-primary" id="detalles" >
                                    <i className="fa fa-window-restore"></i>
                                </button>
                            </td>
                        </tr>
                        )}
                       
                    </tbody>
                  </table>
                  {/* <!-- #fin de la tabla --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}