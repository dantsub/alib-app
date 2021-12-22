import React, { useEffect, useState } from 'react';
import { Eliminarcampeonato } from './Eliminarcampeonato';
import { Adicionarcampeonato } from './Adicionarcampeonato';
import { consumircampeonatos } from '../API/Alip_Api';
import { Editarcampeonato } from './Editarcampeonato';
import { Inicio } from './Inicio';
import LogIn from './LogIn';

export function Gescampeonatos() {
  document.title = 'Campeonato';

  const storage = localStorage.getItem('user');
  const [user, setuser] = useState(JSON.parse(storage));

  useEffect(() => {
    setuser(JSON.parse(storage));
  }, [storage]);

  let [listar_campeonato, setListar_campeonato] = useState([]);
  let [Listar_cam, setListar_cam] = useState([]);

  useEffect(() => {
    const solicitar_campeonato = async () => {
      const dato = await consumircampeonatos();
      setListar_campeonato(dato.campeonatos);
      setListar_cam(dato.campeonatos);
    };
    solicitar_campeonato();
  }, []);

  const buscar_campeonato = (evento) => {
    var resultado_busqueda = Listar_cam.filter((e) => {
      if (
        e.nombrecamp
          .toLowerCase()
          .includes(evento.target.value.toLowerCase()) ||
        e.orgcamp.toLowerCase().includes(evento.target.value.toLowerCase())
      ) {
        return e;
      }
      return false;
    });
    setListar_campeonato(resultado_busqueda);
  };

  function dateformat(fecha) {
    const newfecha = new Date(fecha).toLocaleDateString();
    return newfecha;
  }

  function estado(est) {
    if (est === 'En inscripciones') {
      return (
        <span className='badge rounded-pill badge-light-success me-1'>
          En inscripciones
        </span>
      );
    } else {
      if (est === 'Terminado') {
        return (
          <span className='badge rounded-pill badge-light-danger me-1'>
            Terminado
          </span>
        );
      } else {
        return (
          <span className='badge rounded-pill badge bg-info text-dark me-1'>
            En proceso
          </span>
        );
      }
    }
  }

  return (
    <>
      {storage ? (
        <>
        <Inicio/>
      {/* <!-- BEGIN: Content --> */}
      <div className='app-content content'>
        {/* <!-- Content-wrapper --> */}
        <div className='content-wrapper'>
          <div className='card'>
            <div className='card-body border-bottom'>
              <h2>Campeonatos</h2>
              {/* <!-- Seccion de filtros --> */}
              <h4 className='card-title'>Busqueda y filtros</h4>
              <div className='row'>
                <div className='col-md-3'>
                  <label className='form-label' htmlFor='Searchproducto'>
                    Busqueda de Campeonatos
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='Searchproducto'
                    placeholder='Busqueda'
                    aria-controls='Buscar'
                    onChange={buscar_campeonato}
                  />
                </div>

                <div className='col-md-3 d-flex align-items-end'>
                  <Adicionarcampeonato />
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
                      <tr className='js-row'>
                        <th>Logo Campeonato</th>
                        <th>Campeonato</th>
                        <th>Fecha Ini.</th>
                        <th>Fecha fin</th>
                        <th>Organizador</th>
                        <th>Núm Equipos</th>
                        <th>Lugar</th>
                        <th>Premios</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody className='js-table-body' id='tablaequipos'>
                      {listar_campeonato?.map((camp, idx) => (
                        <tr key={idx} className='js-row'>
                          <td>
                            <div className='container'>
                              <div className='col-md-4 px-0'>
                                <img
                                  src={camp.logocamp}
                                  alt=''
                                  className='img-fluid'
                                  width='300px'
                                  height='300px'
                                />
                              </div>
                            </div>
                          </td>
                          <td>{camp.nombrecamp}</td>
                          <td>{dateformat(camp.fecinicamp)}</td>
                          <td>{dateformat(camp.fecfincamp)}</td>
                          <td>{camp.orgcamp}</td>
                          <td>{camp.numequipcamp}</td>
                          <td>{camp.lugarcamp}</td>
                          <td>{camp.premioscamp}</td>
                          <td>{estado(camp.estadocamp)}</td>

                          <div>
                            <td>
                              <Eliminarcampeonato
                                nombrecamp={camp.nombrecamp}
                                estadocamp={camp.estadocamp}
                              />
                            </td>
                            <td>
                              <Editarcampeonato
                                nombrecamp={camp.nombrecamp}
                                fecinicamp={camp.fecinicamp}
                                fecfincamp={camp.fecfincamp}
                                orgcamp={camp.orgcamp}
                                lugarcamp={camp.lugarcamp}
                                numequipcamp={camp.numequipcamp}
                                premioscamp={camp.premioscamp}
                                logocamp={camp.logocamp}
                                estadocamp={camp.estadocamp}
                              />
                            </td>
                          </div>
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
      ) : <LogIn />
      }
    </>
  );
}
