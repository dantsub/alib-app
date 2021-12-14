import { Base } from "./Base";
import { Eliminarequipo } from "./Eliminarequipo";
import { Eliminarjugador } from "./Eliminarjugador";
import { Adicionarjugador } from "./Adicionarjugador";
import { useEffect, useState } from "react";
import tiburones from '../asset/tiburonesfc.jpg';
import { consumirjugadores } from "../API/Alip_Api"

export function Equipodetails(){
    // Con esto cambiamos el título a la página que por default esta en Alib-app
    document.title="Equipo";

    let [Refrescar, setRefrescar]  = useState(true);
    let [Listar_Jug,setListar_Jug] = useState([]);
    let [listar_jugador, setListar_jugador] = useState([]);
    
    useEffect (() => {
        const solicitar_jugador= async () => {
            const dato = await consumirjugadores();
            setListar_Jug(dato);
            setListar_jugador(dato);
    
        };
        solicitar_jugador();
    }, [Refrescar])
    

const buscar_jugador = (evento)=>{
    var resultado_busqueda = Listar_Jug.filter(e=> {
        if(e.nombre.toLowerCase().includes(evento.target.value.toLowerCase()) 
        || e.documento.toLowerCase().includes(evento.target.value.toLowerCase())
        || e.edad.toLowerCase().includes(evento.target.value.toLowerCase())
  
      ){
        return e;
      }
      
    });
    setListar_jugador(resultado_busqueda);
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