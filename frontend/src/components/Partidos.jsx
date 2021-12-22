import React, { useEffect, useState } from 'react';
import { Base } from './Base';
import { Editarresultado } from './Editarresultado';
import { Crearpartido } from './Crearpartido';
import { consumirpartidos } from '../API/Alip_Api';

//import { Link } from "react-router-dom";

export function Partidos() {
  // Con esto cambiamos el título a la página que por default esta en Alib-app
  document.title = 'Partidos';

  let [Listar_Pt, setListar_Pt] = useState([]);
  let [listar_partidos, setListar_partidos] = useState([]);

  useEffect(() => {
    const solicitar_partidos = async () => {
      const dato = await consumirpartidos();
      setListar_Pt(dato.partidos);
      setListar_partidos(dato.partidos);
    };
    solicitar_partidos();
  }, []);
  console.log(Listar_Pt);

  function dateformat(fecha) {
    const newfecha = new Date(fecha).toLocaleDateString();
    return newfecha;
  }

  return (
    <>
      <Base />

      {/* <!-- BEGIN: Content --> */}
      <div className='app-content content'>
        {/* <!-- Content-wrapper --> */}
        <div className='content-wrapper'>
          <div className='card'>
            <div className='card-body border-bottom'>
              <h2>Partidos</h2>
              {/* <!-- Seccion de filtros --> */}
              <h4 className='card-title'>Busqueda y filtros</h4>
              <div className='row'>
                <div className='col-md-3'>
                  <h4 className='card-title'>Escoja un Campeonato</h4>
                  <select
                    name='campeonatos'
                    className='form-control'
                    placeholder='Escoger Campeonato'
                  >
                    <option value='camp1' defaultValue>
                      Liga Betplay Dimayor
                    </option>
                    <option value='camp2'>UEFA</option>
                    <option value='camp3'>Premier</option>
                  </select>

                  <div>
                    <i className='mr-1'> Crear Partido:</i>
                    <Crearpartido />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Fin card-body -->
  
            <!-- Fin seccion del filtros --> */}

            <div>
              {/* <!-- Seccion de tabla --> */}
              <div
                className='card-dataTable table-responsive pt-0'
                style={{ padding: '5px' }}
              >
                <div
                  className='table-responsive table-bordered'
                  id='Div-tablaequipo'
                >
                  <table className='table table-hover'>
                    <thead>
                      <tr>
                        <th>Estado</th>
                        <th>Fecha</th>
                        <th>Equipo Local</th>
                        <th>Resultado Local</th>
                        <th>Equipo Visitante</th>
                        <th>Resultado Visitante</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody className='js-table-body' id='tablaequipos'>
                      {listar_partidos.map((pa, idx) => (
                        <tr key={idx}>
                          <td>{pa.estado}</td>
                          <td>{dateformat(pa.fecha)}</td>
                          <td>{pa.local.nombre}</td>
                          <td>{pa.rlocal}</td>
                          <td>{pa.visitante.nombre}</td>
                          <td>{pa.rvisitante}</td>
                          <td>
                            <Editarresultado
                              idLocal={pa.local._id}
                              idVisitante={pa.visitante._id}
                              id={pa._id}
                              rlocal={pa.rlocal}
                              rvisit={pa.rvisitante}
                            />
                          </td>
                        </tr>
                      ))}
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
