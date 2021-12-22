import axios from 'axios';
import React from 'react';

export function Eliminarcampeonato({ nombrecamp, estadocamp }) {
  console.log('Consele Log Eliminar campeonato', nombrecamp);
  let disabled = 'disabled';
  if (estadocamp === 'En inscripciones') {
    disabled = '';
  }

  const eliminarcamp = async (nombrecamp) => {
    const response = await axios.post(
      `http://localhost:8081/campeonatos/eliminarcamp`,
      { headers: { 'content-type': 'application/json' }, nombrecamp }
    );
    const data = response.data;
    alert(data.msg);
    if (data.status === 'Ok') {
      window.location.href = '/campeonatos';
    }
  };

  return (
    <>
      <button
        className='btn btn-danger table-buttons'
        disabled={disabled}
        data-bs-toggle='modal'
        data-bs-target={`#modal_eliminar_${nombrecamp
          .replace(/[ .]+/g, '')
          .toLowerCase()}`}
      >
        <i className='fa fa-trash'></i>
      </button>

      {/* <!-- Modal Eliminar --> */}
      <div
        className='modal fade'
        id={`modal_eliminar_${nombrecamp.replace(/[ .]+/g, '').toLowerCase()}`}
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Eliminar campeonato
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <form id='eliminarcampeonato' action=''>
              <input
                aria-label='.'
                type='hidden'
                name='oculto'
                value='eliminar'
              />
              <input
                aria-label='.'
                type='hidden'
                name='ocultoborrar'
                value=''
              />
              <div className='modal-body'>
                <p className='text-center'>
                  ¿Está seguro que desea eliminar el campeonato?
                </p>
                <p className='text-center fw-bold'>{nombrecamp}</p>
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
                  type='button'
                  className='btn btn-primary'
                  onClick={() => {
                    eliminarcamp(nombrecamp);
                  }}
                >
                  Eliminar campeonato
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- FIN MODAL ELIMINAR --> */}
    </>
  );
}
