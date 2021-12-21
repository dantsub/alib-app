import React, { useEffect, useState } from 'react';
import { Base } from './Base';
import { Listadoequipos } from './Listadoequipos';
import { Aprobarequipo } from './Aprobarequipo';
import { consumircampeonatosequip } from '../API/Alip_Api';
import { consumircampeonatos } from '../API/Alip_Api';

export function Campeonatodetails() {
  document.title = 'Equipo';

  let [listar_equipos, setListar_equipos] = useState([]);
  let [Listar_eqip, setListar_equip] = useState([]);

  useEffect(() => {
    const solicitar_campeonatosequip = async () => {
      const dato = await consumircampeonatosequip();
      setListar_equipos(dato.equipos);
      setListar_equip(dato.equipos);
    };
    solicitar_campeonatosequip();
  }, []);

  const buscar_equipos = (evento) => {
    var resultado_busqueda = Listar_eqip.filter((e) => {
      if (
        e.nombre.toLowerCase().includes(evento.target.value.toLowerCase()) ||
        e.manager.toLowerCase().includes(evento.target.value.toLowerCase())
      ) {
        return e;
      }
      return false;
    });
    setListar_equipos(resultado_busqueda);
  };


  let [listar_campeonato, setListar_campeonato] = useState([]);


  useEffect(() => {
    const solicitar_campeonato = async () => {
      const dato = await consumircampeonatos();
      setListar_campeonato(dato.campeonatos);
    };
    solicitar_campeonato();
  }, []);


 

  return (
    <>
      <Base />

      {/* <!-- BEGIN: Content --> */}

      <div className='app-content content'>
        <div className='content-wrapper'>
          <div className='card'>
            <div className='card-body border-bottom'>
              <div className='row'>
                <div className='col'>
                  <h1 className='my-2'>Equipos integrantes del campeonato</h1>
                </div>
              </div>
              {/* <!-- Seccion de filtros --> */}
              <h4 className='card-title'>Busqueda y filtros</h4>
              <div className='row'>
                <h4 class='card-title'>Escoja un Campeonato</h4>
                <div className='col-md-2 '>
                  <select  name='campeonatos' class='form-control' placeholder='Escoger Campeonato'>
                      {listar_campeonato?.map((camp,idx) =>(
                      <option value={camp._id} key={idx} selected>
                        {camp.nombrecamp}
                      </option>
                    ))}  
                  </select>       
                </div>
                <div className='col-md-3 d-flex align-items-end'>
                  <Listadoequipos />
                </div>

                <label className='form-label' for='Searchproducto'>
                  Busqueda de equipos
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='Searchproducto'
                  placeholder='Busqueda'
                  aria-controls='Buscar'
                  onChange={buscar_equipos}
                />
              </div>
            </div>
            {/* <!-- Fin card-body --> */}

            {/* <!-- Fin seccion del filtros --> */}

            <div>
              {/* <!-- Seccion de tabla --> */}
              <div
                className='card-dataTable table-responsive pt-0'
                style={{ padding: '5px' }}
              >
                <div
                  className='table-responsive table-bordered'
                  id='Div-tablajugador'
                >
                  <table className='table table-hover'>
                    <thead>
                      <tr>
                        <th>Logo</th>
                        <th>Equipo</th>
                        <th>Manager</th>
                        <th>Campeonato</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody className='js-table-body' id='tablajugadores'>
                      {listar_equipos.map((equip, idx) => (
                        <tr key={idx}>
                          <td>
                            <div className='container'>
                              <div className='col-md-4 px-0'>
                                <img
                                  src={equip.logo}
                                  alt=''
                                  className='img-fluid'
                                  width='80px'
                                  height='80px'
                                />
                              </div>
                            </div>
                          </td>
                          <td>{equip.nombre}</td>
                          <td>{equip.rep}</td>
                          <td>{equip.ecamp}</td>
                          <td>
                            <Aprobarequipo eusuario={equip.eusuario} ecamp={equip.ecamp}/>
                          </td>
                          <td>{/* <Eliminarequipo /> */}</td>
                        </tr>
                      ))}
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
