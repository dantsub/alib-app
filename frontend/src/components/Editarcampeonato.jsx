import { useRef, useState } from 'react';
import axios from 'axios';

export function Editarcampeonato({
  nombrecamp,
  fecinicamp,
  fecfincamp,
  orgcamp,
  lugarcamp,
  numequipcamp,
  premioscamp
}) {
  const [validated, setValidated] = useState('false');

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.target.className += ' was-validated';

    setValidated(true);
  };

  const fecinicampe = useRef();
  const fecfincampe = useRef();
  const orgcampe = useRef();
  const lugarcampe = useRef();
  const numequipcampe = useRef();
  const premioscampe = useRef();

  const editarcamp = async (doc) => {
    const fecinicampt = fecinicampe.current.value;
    const fecfincampt = fecfincampe.current.value;
    const orgcampt = orgcampe.current.value;
    const lugarcampt = lugarcampe.current.value;
    const numequipcampt = numequipcampe.current.value;
    const premioscampt = premioscampe.current.value;
    const response = await axios.post(
      `http://localhost:8081/campeonatos/editarcamp`,
      {
        nombrecamp: doc,
        fecinicamp: fecinicampt,
        fecfincamp: fecfincampt,
        orgcamp: orgcampt,
        lugarcamp: lugarcampt,
        numequipcamp: numequipcampt,
        premioscamp: premioscampt
      },
      { headers: { 'content-type': 'application/json' } }
    );
    const data = response.data;
    alert(data.msg);
    if (data.status === 'Ok') {
      console.log('Status OK');
    }
    fecinicampe.current.value = '';
    fecfincampe.current.value = '';
    orgcampe.current.value = '';
    lugarcampe.current.value = '';
    numequipcampe.current.value = '';
    premioscampe.current.value = '';
    //estadocampe.current.value="";
  };

  function dateedit(fecha) {
    const curr = new Date(fecha);
    var newfecha = curr.toISOString().substr(0, 10);
    return newfecha;
  }

  return (
    <>
      <button
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target={`#modal_editar_${nombrecamp
          .replace(/[ .]+/g, '')
          .toLowerCase()}`}
      >
        <i className='fa fa-edit'></i>
      </button>

      {/* <!-- Modal Adicionar Campeonato  --> */}

      <div
        className='modal fade'
        id={`modal_editar_${nombrecamp.replace(/[ .]+/g, '').toLowerCase()}`}
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Editar Campeonato
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
              <input aria-label="." type='hidden' name='oculto' value='adicionarcampeonato' />
              <input aria-label="." type='hidden' name='ocultoborrar' value='' />
              <div className='modal-body'>
                <div className='form-group'>
                  <label for='' className='form-label'>
                    Nombre del Campeonato
                  </label>
                  <input
                    type='text'
                    readOnly
                    className='form-control'
                    id='nombre_campeonato'
                    placeholder='Nombre del campeonato'
                    required
                    value={nombrecamp}
                  />
                  <div className='invalid-feedback'>
                    Por favor ingrese el nombre del campeonato
                  </div>
                </div>
                <div className='form-group'>
                  <label for='' className='form-label'>
                    Fecha inicial
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='fecha_inicial'
                    placeholder='Fecha inicial'
                    required
                    ref={fecinicampe}
                    defaultValue={dateedit(fecinicamp)}
                  />
                  <div className='invalid-feedback'>
                    Por favor ingrese la fecha inicial
                  </div>
                </div>

                <div className='form-group'>
                  <label for='' className='form-label'>
                    Fecha final
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='fecha_final'
                    placeholder='Fecha final'
                    required
                    ref={fecfincampe}
                    defaultValue={dateedit(fecfincamp)}
                  />
                  <div className='invalid-feedback'>
                    Por favor ingrese la fecha fecha
                  </div>
                </div>
                <div className='form-group'>
                  <label for='' className='form-label'>
                    Organizador del evento
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='organizador_evento'
                    placeholder='Organizador del evento'
                    required
                    ref={orgcampe}
                    defaultValue={orgcamp}
                  />
                  <div className='invalid-feedback'>
                    Por favor ingrese el organizador del evento
                  </div>
                </div>
                <div className='form-group'>
                  <label for='' className='form-label'>
                    Lugar del evento
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='lugar_evento'
                    placeholder='Lugar del evento'
                    required
                    ref={lugarcampe}
                    defaultValue={lugarcamp}
                  />
                  <div className='invalid-feedback'>
                    Por favor ingrese el lugar del evento
                  </div>
                </div>
                <div className='form-group'>
                  <label for='' className='form-label'>
                    Número de equipos
                  </label>
                  <input
                    type='number'
                    className='form-control'
                    id='num_equipos'
                    placeholder='Número de equipos'
                    required
                    ref={numequipcampe}
                    defaultValue={numequipcamp}
                  />
                  <div className='invalid-feedback'>
                    Por favor ingrese el número de equipos
                  </div>
                </div>
                <div className='form-group'>
                  <label for='' className='form-label'>
                    Premios
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='premios'
                    placeholder='Premios'
                    ref={premioscampe}
                    defaultValue={premioscamp}
                  />
                  <div className='invalid-feedback'>
                    Por favor ingrese los premios
                  </div>
                </div>
                {/* <div className='form-group'>
                  <label for='' className='form-label'>
                    Logo del campeonato
                  </label>
                  <input
                    type='file'
                    className='form-control'
                    id='logo_campeonato'
                    placeholder='Logo del campeonato'
                  />
                  <div className='invalid-feedback'>
                    Por favor ingrese el logo
                  </div>
                </div> */}
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
                    editarcamp(nombrecamp);
                  }}
                >
                  Editar Campeonato
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
