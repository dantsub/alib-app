import { useState } from 'react';
export function Editarresultado() {
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
  return (
    <>
      <button
        className='btn btn-primary'
        id='editar'
        data-bs-toggle='modal'
        data-bs-target='#modal_editar'
      >
        <i className='fas fa-edit'></i>
      </button>

      {/* <!-- Modal editar partido  --> */}
      <div
        className='modal fade'
        id='modal_editar'
        tabindex='-1'
        aria-labelledby='titulo_editar'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-sm'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 id='titulo_editar'>Editar Resultado</h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <form
              id='editarpartido'
              action=''
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <input aria-label='.' type='hidden' name='oculto' value='editarresultado' />
              <div className='modal-body'>
                <table className='default'>
                  <tr>
                    <th>--</th>
                    <th>Equipo A</th>
                    <th>Equipo B</th>
                  </tr>
                  <tr>
                    <td>Goles</td>
                    <td>
                      <input
                        type='text'
                        size='1'
                        maxlength='2'
                        className='form-control'
                        placeholder=''
                        name='r1'
                      />
                    </td>
                    <td>
                      <input
                        type='text'
                        size='1'
                        maxlength='2'
                        className='form-control'
                        placeholder=''
                        name='r2'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Faltas</td>
                    <td>
                      <input
                        type='text'
                        size='1'
                        maxlength='2'
                        className='form-control'
                        placeholder=''
                        name='f1'
                      />
                    </td>
                    <td>
                      <input
                        type='text'
                        size='1'
                        maxlength='2'
                        className='form-control'
                        placeholder=''
                        name='f2'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>T. Amarillas</td>
                    <td>
                      <input
                        type='text'
                        size='1'
                        maxlength='2'
                        className='form-control'
                        placeholder=''
                        name='ta1'
                      />
                    </td>
                    <td>
                      <input
                        type='text'
                        size='1'
                        maxlength='2'
                        className='form-control'
                        placeholder=''
                        name='ta2'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>T. Rojas</td>
                    <td>
                      <input
                        type='text'
                        size='1'
                        maxlength='2'
                        className='form-control'
                        placeholder=''
                        name='tr1'
                      />
                    </td>
                    <td>
                      <input
                        type='text'
                        size='1'
                        maxlength='2'
                        className='form-control'
                        placeholder=''
                        name='tr2'
                      />
                    </td>
                  </tr>
                </table>
                <div className='modal-footer'>
                  <button className='btn btn-primary' type='button'>
                    Guardar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
