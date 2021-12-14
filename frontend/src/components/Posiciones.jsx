import { Base } from "./Base";
import { useEffect, useState } from "react";
import { consumirposiciones } from "../API/Alip_Api"
import { Link } from "react-router-dom";

export function Posiciones(){
  // Con esto cambiamos el título a la página que por default esta en Alib-app
    document.title="Posicion";

    let [Refrescar, setRefrescar]  = useState(true);
    let [Listar_Pos,setListar_Pos] = useState([]);
    let [listar_posicion, setListar_posicion] = useState([]);
    
    useEffect ( () => {
        const solicitar_posicion= async () => {
            const dato = await consumirposiciones();
            setListar_Pos(dato);
            setListar_posicion(dato);
    
        };
        solicitar_posicion();
    }, [Refrescar])
    console.log(Listar_Pos);
   
    return (
        <>
        <Base />
      
    {/* <!-- BEGIN: Content --> */}
    <div className="app-content content">
        {/* <!-- Content-wrapper --> */}
        <div className="content-wrapper">
          <div className="card">
            <div className="card-body border-bottom">
              <h2>TABLA DE POSICIONES</h2>
              {/* <!-- Seccion de filtros --> */}
              <h4 className="card-title">Busqueda y filtros</h4>
              <div className="row">
                <div className="col-md-3">
                <h4 class="card-title">Escoja un Campeonato</h4>
                  <select name="campeonatos" class="form-control">
                    <option value="camp1"selected>Liga Betplay Dimayor</option>
                    <option value="camp2" >UEFA</option>
                    <option value="camp3">Premier</option>
                  </select>
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
                  id="Div-tablaposicion"
                >
                  <table className="table table-hover">
                    <thead>
                      <tr>
                      <th>Logo</th>
                        <th>Equipo</th>
                        <th>PG</th>
                        <th>PP</th>
                        <th>PE</th>
                        <th>GF</th>
                        <th>GC</th>
                        <th>POS</th>
                      </tr>
                    </thead>
                    <tbody className="js-table-body" id="tablaequipos">
                    {listar_posicion.map(po=>
                        <tr>
                            <td><div className="col-md-4 px-0">
                                        <img src={po.logo} className="img-fluid" width="150px" height="150px" />
                                    </div></td>
                            <td>{po.nombre}</td>
                            <td>{po.PG}</td>
                            <td>{po.PP}</td>
                            <td>{po.PE}</td>
                            <td>{po.GF}</td>
                            <td>{po.GC}</td>
                            <td>{po.POS}</td>                                                                                 
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