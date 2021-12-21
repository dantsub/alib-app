import { useRef,useState } from 'react';
import axios from "axios";

export function Editarresultado({id,estado,encuentro,resultado,fecha,cancha}) {
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

  const esta = useRef();
  const encu = useRef();
  const resu = useRef();
  const fech = useRef();
  const canc = useRef();

  function guardar(event) {
    event.preventDefault();
    const estado = esta.current.value;
    const encuentro = encu.current.value;
    const resultado = resu.current.value;
    const fecha = fech.current.value;
    const cancha = canc.current.value;
    console.log(estado, encuentro, resultado,fecha,cancha )
    axios
      .post(`http://localhost:8081/partidos/guardar`, {
        headers: { 'content-type': 'application/json' },
        estado,
        encuentro,
        resultado,
        fecha,
        cancha,
      })
      .then((res) => {
        const respuesta = res.data;
        alert(respuesta.msg);
        if (respuesta.status === 'Ok') {
          window.location.href = '/fechas';
        }
      })
      .catch((error) => alert(error));
      esta.current.value = '';
      encu.current.value = '';
      resu.current.value = '';
      fech.current.value = '';
      canc.current.value = '';
  }
  return (
    <>
      <button
        className='btn btn-primary'
        id='editar'
        data-bs-toggle='modal'
        data-bs-target={`#modal_editar_${id}`}
      >
        <i className='fas fa-edit'></i>
        
      </button>
      {/* <!-- Modal editar partido  --> */}
      <div
        className='modal fade'
        id={`modal_editar_${id}`}
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
                    <th>RESULTADOS</th>
                    
                  </tr>
                  <tr>
                    <td>Estado</td>
                    <td>
                      <input
                      ref={esta}
                        type='text'
                        size='1'
                        maxlength='2'
                        className='form-control'
                        placeholder='estado'
                        name='estado'
                        defaultValue={estado}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Encuentro</td>
                    <td>
                      <input
                       ref={encu}
                        type='text'
                        size='1'
                        maxlength='2'
                        className='form-control'
                        placeholder=''
                        name='encuentro'
                        defaultValue={encuentro}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Resultado</td>
                    <td>
                      <input
                       ref={resu}
                        type='text'
                        size='1'
                        maxlength='2'
                        className='form-control'
                        placeholder=''
                        name='0/0'
                        defaultValue={resultado}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Fecha</td>
                    <td>
                      <input
                       ref={fech}
                        type='text'
                        size='1'
                        maxlength='2'
                        className='form-control'
                        placeholder=''
                        name='fecha'
                        defaultValue={fecha}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Cancha</td>
                    <td>
                      <input
                       ref={canc}
                        type='text'
                        size='1'
                        maxlength='5'
                        className='form-control'
                        placeholder=''
                        name='cancha'
                        defaultValue={cancha}
                      />
                    </td>
                  </tr>
                </table>
                <div className='modal-footer'>
                  <button className='btn btn-primary' type='button' onClick={guardar}>
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
