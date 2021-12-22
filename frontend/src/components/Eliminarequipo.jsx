import React from 'react';
import axios from 'axios';

export function Eliminarequipo({ nombre }) {
  const eliminarequ = async (nombre) => {
    const response = await axios.post(
      `http://localhost:8081/equipos/eliminar`,
      { headers: { 'content-type': 'application/json' }, nombre }
    );
    const data = response.data;
    alert(data.msg);
    if (data.status === 'Ok') {
      window.location.href = '/equipos';
    }
  };

  return (
    <>
      <button
        className='btn btn-danger table-buttons'
        data-bs-toggle='modal'
        data-bs-target={`#modal_eliminar_${nombre
          .replace(/[ .]+/g, '')
          .toLowerCase()}`}
      >
        <i className='fa fa-trash'></i>
      </button>

      {/* <!-- Modal Eliminar --> */}
      <div
        className='modal fade'
        id={`modal_eliminar_${nombre.replace(/[ .]+/g, '').toLowerCase()}`}
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Eliminar equipo
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <form id='borrarequipo' action=''>
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
                  ¿Está seguro que desea eliminar el equipo?
                </p>
                <p className='text-center fw-bold'>{nombre}</p>
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
                  onClick={() => {
                    eliminarequ(nombre);
                  }}
                >
                  Eliminar Equipo
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
