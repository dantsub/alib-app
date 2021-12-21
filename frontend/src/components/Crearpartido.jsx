import { useRef,useState } from 'react';
import axios from "axios";

export function Crearpartido({id,estado,local,visitante, rlocal,rvisitante,fecha}) {
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
  const loc = useRef();
  const visi = useRef();
  const rloc = useRef();
  const rvisi = useRef();
  const fech = useRef();

  function guardar(event) {
    event.preventDefault();
    const estado = esta.current.value;
    const local = loc.current.value;
    const visitante = visi.current.value;
    const rlocal = rloc.current.value;
    const rvisitante = rvisi.current.value;
    const fecha = fech.current.value;
    console.log(estado, local, visitante,rlocal,rvisitante,fecha)
    axios
      .post(`http://localhost:8081/partidos/guardar`, {
        headers: { 'content-type': 'application/json' },
        estado,local,visitante, rlocal,rvisitante,fecha
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
      loc.current.value = '';
      visi.current.value = '';
      rloc.current.value = '';
      rvisi.current.value = '';
      fech.current.value = '';
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
        tabindex='-1'
        aria-labelledby='titulo_editar'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-sm'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 id='titulo_editar'>Crear Partido</h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <form
              id='crearpartido'
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
                    <th>Local</th>
                    <th>Vistante</th>
                  </tr>
                  <tr>
                    <td>Estado</td>
                    <td>
                      <input
                      ref={esta}
                        type='text'
                        className='form-control'
                        placeholder=''
                        name='estado'
                        defaultValue={estado}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Equipos</td>
                    <td>
                      <input
                       ref={loc}
                        type='text'
                        className='form-control'
                        placeholder=''
                        name='local'
                        defaultValue={local}
                      /></td>
                       <td>
                      <input
                       ref={visi}
                        type='text'
                        className='form-control'
                        placeholder=''
                        name='visitante'
                        defaultValue={visitante}
                      /></td>
                    
                  </tr>
                  <tr>
                    <td>Resultados</td>
                    <td>
                      <input
                       ref={rloc}
                        type='text'
                        size='1'
                        maxlength='2'
                        className='form-control'
                        placeholder=''
                        name='rlocal'
                        defaultValue={rlocal}
                      /></td>
                      <td>
                      <input
                       ref={rvisi}
                        type='text'
                        size='1'
                        maxlength='2'
                        className='form-control'
                        placeholder=''
                        name='rlocal'
                        defaultValue={rvisitante}
                      /></td>
                  </tr>
                  <tr>
                    <td>Fecha</td>
                    <td>
                      <input
                       ref={fech}
                        type='date'
                        className='form-control'
                        placeholder=''
                        name='fecha'
                        defaultValue={fecha}
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
