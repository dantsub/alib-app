import { Base } from "./Base";
import { Eliminarequipo } from "./Eliminarequipo";
import { Eliminarjugador } from "./Eliminarjugador";
import { Adicionarjugador } from "./Adicionarjugador";
import { useRef, useState } from "react";
import tiburones from '../asset/tiburonesfc.jpg';


export function Equipodetails(){

    const jugador = [{
        "documento":"5421545",
        "nombre":"James Rodriguez",
        "edad":"32",
       },
       {
        "documento":"26515154",
        "nombre":"Radamel Falcao",
        "edad":"38",
       },
       {
        "documento":"465151215",
        "nombre":"David Ospina",
        "edad":"34",
       },
      
    
    ]

const [listar_jugador, setListar_jugador] = useState(jugador);

const buscar_jugador = (evento)=>{
    setListar_jugador(jugador.filter(j=> j.nombre.toLowerCase().includes(evento.target.value.toLowerCase())));
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
                    <h1 className="my-2">Integrantes del Equipo</h1>
                    <h2 className="my-2">Equipo: Tiburones F.C </h2>
                </div>
                <div className="col col-lg-2">
                    <span className="brand-logo" style={{ width: '40px' }}>
                        <div className="brand-logo round" width="40" height="40" >
                        <img  src={tiburones} width="120" height="120" />
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
                        >Busqueda de jugador</label
                    >
                    <input
                        type="text"
                        className="form-control"
                        id="Searchproducto"
                        placeholder="Busqueda"
                        aria-controls="Buscar"
                        onChange={buscar_jugador}
                    />
                    </div>
                
    
                    <div className="col-md-3 d-flex align-items-end">
            
                        <Adicionarjugador />
            
                    </div>
                    <div className="col-md-3 d-flex align-items-end">
                        <Eliminarequipo />
            
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
                            <th>Documento</th>
                            <th>Nombres y Apellidos</th>
                            <th>Edad</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>
                        <tbody className="js-table-body" id="tablajugadores">
                        {listar_jugador.map(jug=>
                            <tr>
                                <td>{jug.documento}</td>
                                <td>{jug.nombre}</td>
                                <td>{jug.edad}</td>
                                <td> 
                                    <Eliminarjugador />
                                
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