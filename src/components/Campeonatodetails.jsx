import { Base } from "./Base";
import { Eliminarcampeonato } from "./Eliminarcampeonato";
import { Listadoequipos } from "./Listadoequipos";
import { useRef, useState } from "react";
import uefa from '../asset/uefa.jpg';
import { Aprobarequipo } from "./Aprobarequipo";
import { Eliminarequipo } from "./Eliminarequipo";
import real_madrid from '../asset/real_madrid.jpg';
import Chelsea_FC from '../asset/Chelsea_FC.jpg';
import juventus from '../asset/juventus.jpg';
import barza from '../asset/barza.jpg';


export function Campeonatodetails(){
    document.title="Equipo";
    
    const equipos = [{
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


const [listar_equipos, setListar_equipos] = useState(equipos);

const buscar_equipos = (evento)=>{
    setListar_equipos(equipos.filter(j=> j.equipo.toLowerCase().includes(evento.target.value.toLowerCase())));
}
    
    return (
        <>
        <Base />

        {/* <!-- BEGIN: Content --> */}
        
        <div className="app-content content">

            <div className="content-wrapper">
            <div className="card">
                <div className="card-body border-bottom">
                <div className="row">
                    <div className="col">
                    <h1 className="my-2">Equipos integrantes del campeonato</h1>
                    <h2 className="my-2">Campeonato: Uefa</h2>
                </div>
                <div className="col col-lg-2">
                    <span className="brand-logo" style={{ width: '40px' }}>
                        <div className="brand-logo round" width="40" height="40" >
                        <img  src={uefa} width="120" height="120" />
                        </div>
                        <span className="avatar-status-online"></span>
                    </span>
                    
                </div>
                </div>
                {/* <!-- Seccion de filtros --> */}
                <h4 className="card-title">Busqueda y filtros</h4>
                <div className="row">
                    <div className="col-md-3">
                    <label className="form-label" for="Searchproducto"
                        >Busqueda de equipos</label>
                    <input
                        type="text"
                        className="form-control"
                        id="Searchproducto"
                        placeholder="Busqueda"
                        aria-controls="Buscar"
                        onChange={buscar_equipos}
                    />
                    </div>
                
    
                    <div className="col-md-3 d-flex align-items-end">
            
                        <Listadoequipos />
            
                    </div>
                    <div className="col-md-3 d-flex align-items-end">
                        <Eliminarcampeonato />
            
                    </div>
                </div>
                </div>
                {/* <!-- Fin card-body --> */}
    
                {/* <!-- Fin seccion del filtros --> */}
    
                <div>
                {/* <!-- Seccion de tabla --> */}
                <div
                    className="card-dataTable table-responsive pt-0"
                    style={{ padding: '5px' }}
                >
                    <div
                    className="table-responsive table-bordered"
                    id="Div-tablajugador"
                    >
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>Logo</th>
                            <th>Equipo</th>
                            <th>Manager</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>
                        <tbody className="js-table-body" id="tablajugadores">
                        {listar_equipos.map(equip=>
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
                                    <Aprobarequipo/>
                                </td>
                                <td> 
                                    <Eliminarequipo />
                                
                                </td>
                            </tr>
                        )}

                        </tbody>
                    </table>
    
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        </>
    );
}