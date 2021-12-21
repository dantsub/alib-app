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

  const buscar_partido = (evento) => {
    var resultado_busqueda = Listar_Pt.filter((e) => {
      if (
        e.estado.toLowerCase().includes(evento.target.value.toLowerCase()) ||
        e.encuentro.toLowerCase().includes(evento.target.value.toLowerCase()) ||
        e.cancha.toLowerCase().includes(evento.target.value.toLowerCase())
      ) {
        return e;
      }
      return false;
    });
    setListar_partidos(resultado_busqueda);
  };
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
                  <h4 class='card-title'>Escoja un Campeonato</h4>
                  <select name='campeonatos' class='form-control'>
                    <option value='camp1' selected>
                      Liga Betplay Dimayor
                    </option>
                    <option value='camp2'>UEFA</option>
                    <option value='camp3'>Premier</option>
                  </select>
                  <label className='form-label' for='Searchproducto'>
                    Busqueda de partidos
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='Searchproducto'
                    placeholder='Busqueda'
                    aria-controls='Buscar'
                    onChange={buscar_partido}
                  />
                  <div><i className='mr-1'> Crear Partido:</i>
              <Crearpartido /></div>
                  
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
                        <th>Encuentro</th>
                        <th>Resultado</th>
                        <th>Fecha</th>
                        <th>Cancha</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody className='js-table-body' id='tablaequipos'>
                      {listar_partidos.map((pa,idx) => (
                        <tr key={idx}>
                          <td>{pa.estado}</td>
                          <td>{pa.encuentro}</td>
                          <td>{pa.resultado}</td>
                          <td>{dateformat(pa.fecha)}</td>
                          <td>{pa.cancha} 
                          </td>
                          <td>
                            <Editarresultado id={pa._id} estado={pa.estado} encuentro={pa.encuentro} resultado={pa.resultado} fecha={pa.fecha} cancha={pa.cancha} />
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
