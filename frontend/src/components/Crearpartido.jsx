import React, { useRef, useState, useEffect } from 'react';
import { consumircampeonatosequip } from '../API/Alip_Api';

import axios from 'axios';

export function Crearpartido({
  id,
  estado,
  local,
  visitante,
  rlocal,
  rvisitante,
  fecha,
}) {
  const [validated, setValidated] = useState('false');

  let [listar_equipos, setListar_equipos] = useState([]);

  useEffect(() => {
    const solicitar_campeonatosequip = async () => {
      const dato = await consumircampeonatosequip();
      setListar_equipos(dato.campeonatos.integrantescampeonato);
    };
    solicitar_campeonatosequip();
  }, []);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.target.className += ' was-validated';

    setValidated(true);
  };

  const loc = useRef();
  const visi = useRef();
  const fech = useRef();

  function guardar(event) {
    event.preventDefault();
    const estado = 'Sin Jugar';
    const local = loc.current.value;
    const visitante = visi.current.value;
    const rlocal = 0;
    const rvisitante = 0;
    const fecha = fech.current.value;
    console.log(estado, local, visitante, rlocal, rvisitante, fecha);
    axios
      .post(`http://localhost:8081/partidos/guardar`, {
        headers: { 'content-type': 'application/json' },
        estado,
        local,
        visitante,
        rlocal,
        rvisitante,
        fecha,
      })
      .then((res) => {
        const respuesta = res.data;
        alert(respuesta.msg);
        if (respuesta.status === 'Ok') {
          window.location.href = '/partidos';
        }
      })
      .catch((error) => alert(error));
  }
  return (
    <>
      <button
        className='btn btn-primary'
        id='crear'
        data-bs-toggle='modal'
        data-bs-target={`#modal_crear_part_${id}`}
      >
        <i className='fas fa-edit'></i>
      </button>
      {/* <!-- Modal editar partido  --> */}
      <div
        className='modal fade'
        id={`modal_crear_part_${id}`}
        tabIndex='-1'
        aria-labelledby='titulo_editar'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-sm' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 id='titulo_eliminar'>Crear Partido</h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form
                id='editar_usuario'
                action=''
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <div className='form-group'>
                  <label htmlFor='elocal' className='form-label'>
                    Equipo Local
                  </label>
                  <select className='form-control-sm' id='elocal' ref={loc}>
                    {listar_equipos.map((equipo, idx) => (
                      <option key={idx} value={equipo.id}>
                        {equipo.nombre}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='form-group'>
                  <label htmlFor='evisi' className='form-label'>
                    Equipo Visitante
                  </label>
                  <select className='form-control-sm' id='evisi' ref={visi}>
                    {listar_equipos.map((equipo, idx) => (
                      <option key={idx} value={equipo.id}>
                        {equipo.nombre}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='form-group'>
                  <label htmlFor='fechaini' className='form-label'>
                    Fecha del partido
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='fechaini'
                    placeholder='Fecha inicial'
                    ref={fech}
                  />
                </div>
                <br />
                <div className='form-group'>
                  <div className='modal-footer'>
                    <button
                      className='btn btn-primary'
                      type='button'
                      onClick={guardar}
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
