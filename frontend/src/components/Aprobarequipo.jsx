import React from 'react';
import axios from 'axios';

export function Aprobarequipo({ ecamp, idequipo }) {
  async function aprobar(ecamp, idequipo) {
    const response = await axios.post(
      `http://localhost:8081/equipos/aprobarequip`,
      {
        _id: idequipo,
        estadocamp: ecamp,
      },
      { headers: { 'content-type': 'application/json' } }
    );
    const data = response.data;
    alert(data.msg);
    if (data.status === 'Ok') {
      console.log('Status OK');
    }
  }

  async function registrarposicion(idequipo) {
    const ide = idequipo;
    const response2 = await axios.post(
      `http://localhost:8081/posiciones/guardar`,
      {
        equipo: ide,
        puntos: 0,
        poscamp: '61c13c4afc32079b6559d740',
      },
      { headers: { 'content-type': 'application/json' } }
    );
    const data2 = response2.data;
    alert(data2.msg);
    if (data2.status === 'Ok') {
      console.log('Status OK');
    }
  }

  return (
    <>
      <button
        className='btn btn-primary table-buttons'
        data-bs-toggle='modal'
        data-bs-target='#modal_aprobar_equipo'
      >
        <i className='fa fa-check-square'></i>
      </button>

      {/* <!-- Modal Aprobarequipo --> */}
      <div
        className='modal fade'
        id='modal_aprobar_equipo'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Aprobar equipo
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <form id='aprobarcampeonato' action=''>
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
                  ¿Está seguro que desea aprobar el equipo?
                </p>
                {/* <!-- <p className="text-center fw-bold">{{producto.1}}</p> --> */}
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
                    aprobar(ecamp, idequipo);
                    registrarposicion(idequipo);
                  }}
                >
                  Aprobar equipo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- FIN MODAL  Aprobarequipo --> */}
    </>
  );
}
