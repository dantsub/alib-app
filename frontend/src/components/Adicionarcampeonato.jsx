import React, { useState, useRef } from 'react';
import axios from 'axios';

export function Adicionarcampeonato() {
  const [validated, setValidated] = useState('false');
  const [logocamp, setLogocamp] = useState();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.target.className += ' was-validated';

    setValidated(true);
  };

  const nombrecampg = useRef();
  const fecinicampg = useRef();
  const fecfincampg = useRef();
  const orgcampg = useRef();
  const lugarcampg = useRef();
  const numequipcampg = useRef();
  const premioscampg = useRef();
  const uploadfile = (event) => {
    setLogocamp(event.target.files[0]);
  };

  function guardarcamp(event) {
    event.preventDefault();
    const nombrecamp = nombrecampg.current.value;
    const fecinicamp = fecinicampg.current.value;
    const fecfincamp = fecfincampg.current.value;
    const orgcamp = orgcampg.current.value;
    const lugarcamp = lugarcampg.current.value;
    const numequipcamp = numequipcampg.current.value;
    const premioscamp = premioscampg.current.value;
    const estadocamp = 'En inscripciones';
    const datos = new FormData();
    datos.append('nombrecamp', nombrecamp);
    datos.append('fecinicamp', fecinicamp);
    datos.append('fecfincamp', fecfincamp);
    datos.append('orgcamp', orgcamp);
    datos.append('lugarcamp', lugarcamp);
    datos.append('numequipcamp', numequipcamp);
    datos.append('premioscamp', premioscamp);
    datos.append('logocamp', logocamp);
    datos.append('estadocamp', estadocamp);

    console.log(nombrecamp);
    console.log(fecinicamp);
    console.log(logocamp);

    axios
      .post(`http://localhost:8081/campeonatos/guardarcamp`, datos, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        const respuesta = res.data;
        alert(respuesta.msg);
        if (respuesta.status === 'Ok') {
          window.location.href = '/campeonatos';
        }
      })
      .catch((error) => alert(error));
    nombrecampg.current.value = '';
    fecinicampg.current.value = '';
    fecfincampg.current.value = '';
    orgcampg.current.value = '';
    lugarcampg.current.value = '';
    numequipcampg.current.value = '';
    premioscampg.current.value = '';
  }

  return (
    <>
      <button
        className='btn btn-primary'
        id='crear'
        data-bs-toggle='modal'
        data-bs-target='#modal_adicionar_campeonato'
      >
        <i className='fa fa-plus-square'></i> Adicionar Campeonato
      </button>

      {/* <!-- Modal Adicionar Campeonato  --> */}

      <div
        className='modal fade'
        id='modal_adicionar_campeonato'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Adicionar Campeonato
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <form
              id='adicionarcampeonato'
              action=''
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <input
                aria-label='.'
                type='hidden'
                name='oculto'
                value='adicionarcampeonato'
              />
              <input
                aria-label='.'
                type='hidden'
                name='ocultoborrar'
                value=''
              />
              <div className='modal-body'>
                <div className='form-group'>
                  <label htmlFor='' className='form-label'>
                    Nombre del Campeonato
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='nombre_campeonato'
                    placeholder='Nombre del campeonato'
                    required
                    ref={nombrecampg}
                  />
                  <div className='invalid-feedback'>
                    Por favor ingrese el nombre del campeonato
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor='' className='form-label'>
                    Fecha inicial
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='fecha_inicial'
                    placeholder='Fecha inicial'
                    required
                    ref={fecinicampg}
                  />
                  <div className='invalid-feedback'>
                    Por favor ingrese la fecha inicial
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor='' className='form-label'>
                    Fecha final
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='fecha_final'
                    placeholder='Fecha final'
                    required
                    ref={fecfincampg}
                  />
                  <div className='invalid-feedback'>
                    Por favor ingrese la fecha fecha
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor='' className='form-label'>
                    Organizador del evento
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='organizador_evento'
                    placeholder='Organizador del evento'
                    required
                    ref={orgcampg}
                  />
                  <div className='invalid-feedback'>
                    Por favor ingrese el organizador del evento
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor='' className='form-label'>
                    Lugar del evento
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='lugar_evento'
                    placeholder='Lugar del evento'
                    required
                    ref={lugarcampg}
                  />
                  <div className='invalid-feedback'>
                    Por favor ingrese el lugar del evento
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor='' className='form-label'>
                    Número de equipos
                  </label>
                  <input
                    type='number'
                    className='form-control'
                    id='num_equipos'
                    placeholder='Número de equipos'
                    required
                    ref={numequipcampg}
                  />
                  <div className='invalid-feedback'>
                    Por favor ingrese el número de equipos
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor='' className='form-label'>
                    Premios
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='premios'
                    placeholder='Premios'
                    required
                    ref={premioscampg}
                  />
                  <div className='invalid-feedback'>
                    Por favor ingrese los premios
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor='' className='form-label'>
                    Logo del campeonato
                  </label>
                  <input
                    type='file'
                    className='form-control'
                    id='logo_campeonato'
                    placeholder='Logo del campeonato'
                    onChange={uploadfile}
                  />
                  <div className='invalid-feedback'>
                    Por favor ingrese el logo
                  </div>
                </div>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Cancelar
                </button>
                <button
                  type='submit'
                  className='btn btn-primary'
                  onClick={guardarcamp}
                >
                  Adicionar Campeonato
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- FIN MODAL ADICIONAR CAMPEONATO --> */}
    </>
  );
}
