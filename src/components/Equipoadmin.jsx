import { Base } from "./Base";
import { Eliminarequipo } from "./Eliminarequipo";
import { useRef, useState } from "react";
import pescaito from '../asset/pescaito.jpg';
import tiburones from '../asset/tiburonesfc.jpg';
import india from '../asset/india.jpg';


export function Equipoadmin(){
  // Con esto cambiamos el título a la página que por default esta en Alib-app
    document.title="Equipo";
    
    const equipo = [{
        "logo":pescaito,
        "nombre":"Real Pescaito",
        "fecha":"22/05/2021",
        "rep":"Julio Gonzalez",
       },
       {
        "logo":tiburones,
        "nombre":"Tiburones F.C.",
        "fecha":"23/07/2021",
        "rep":"Carlos Mercado",
       },
       {
        "logo":india,
        "nombre":"Atletico India Catalina",
        "fecha":"22/11/2021",
        "rep":"Melissa Henao",
       },
      
    
    ]

const [listar_equipo, setListar_equipo] = useState(equipo);

const buscar_equipo = (evento)=>{
    setListar_equipo(equipo.filter(e=> e.nombre.toLowerCase().includes(evento.target.value.toLowerCase())));
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
              <h2>Equipos</h2>
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
                    onChange={buscar_equipo}
                  />
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
                      <tr>
                        <th>Logo</th>
                        <th>Nombre Equipo</th>
                        <th>Fecha Creación</th>
                        <th>Representante Equipo</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="js-table-body" id="tablaequipos">
                    {listar_equipo.map(eq=>
                        <tr>
                            <td>
                                <div className="container">
                                    <div className="col-md-4 px-0">
                                        <img src={eq.logo} className="img-fluid" width="150px" height="150px" />
                                    </div>
                                </div>
                            </td>
                            <td>{eq.nombre}</td>
                            <td>{eq.fecha}</td>
                            <td>{eq.rep}</td>
                            <td> 
                               <Eliminarequipo />
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