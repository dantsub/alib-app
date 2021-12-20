import React, { useEffect, useState } from 'react';
import { Base } from './Base';
import { Eliminarfecha } from './Eliminarfecha';
import { Crearfecha } from './Crearfecha';
import { Editarfecha } from './Editarfecha';
import { consumirfechas } from '../API/Alip_Api';

export function Fechas() {
  document.title = 'Fechas';

  let [listar_fechas, setListar_fechas] = useState([]);

  useEffect(() => {
    const solicitar_fechas = async () => {
      const dato = await consumirfechas();
      setListar_fechas(dato.fechas);
    };
    solicitar_fechas();
  }, []);

  return (
    <>
      <Base />
      {/* <!-- BEGIN: Content --> */}
      <div className='app-content content'>
        {/* <!-- Content-wrapper --> */}
        <div className='content-wrapper'>
          <div className='card'>
            <div className='card-body border-bottom'>
              <h2>Fechas</h2>
              <h4 class='card-title'>Escoja un Campeonato</h4>
              <select name='campeonatos' class='form-control-sm'>
                <option value='camp1' selected>
                  Liga Betplay Dimayor
                </option>
                <option value='camp2'>UEFA</option>
                <option value='camp3'>Premier</option>
              </select>
              <i className='mr-1'> Crear Fecha:</i>
              <Crearfecha />
            </div>
          </div>
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
                      <th>Jornadas</th>
                      <th>Fecha Inicio</th>
                      <th>Feha Fin</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody className='js-table-body' id='tablaequipos'>
                    {listar_fechas.map((fe) => (
                      <tr className='js-row'>
                        <td>{fe.jornada}</td>
                        <td>{fe.fecha_ini}</td>
                        <td>{fe.fecha_fin}</td>
                        <td>
                          <Editarfecha jornada={fe.jornada} fecha_ini={fe.fecha_ini} fecha_fin = {fe.fecha_fin} />
                          <Eliminarfecha />
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
    </>
  );
}
