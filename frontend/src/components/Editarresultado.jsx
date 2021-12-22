import { useRef,useState } from 'react';
import axios from "axios";

export function Editarresultado({ id, rlocal, rvisit, idLocal, idVisitante }) {
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

 
  const resloc = useRef();
  const resvisi = useRef();

  const editarpartido = async (event) => {
    event.preventDefault();
    const estadoc = "Jugado";
    const idpartido = id;
    let rlocalc = resloc.current.value;
    let rvisitantec = resvisi.current.value;
    const response = await axios.post(`http://localhost:8081/partidos/editar`, {
      _id:idpartido,
      estado: estadoc,
      rlocal: rlocalc,
      rvisitante: rvisitantec
    },
      { headers: { 'content-type': 'application/json' } })
    const data = response.data;
    alert(data.msg);
    if (data.status === 'Ok') {
      if (rlocalc === rvisitantec) {
        rlocalc = rvisitantec = 1;
      }
      editarPuntos(idLocal, rlocalc);
      editarPuntos(idVisitante, rvisitantec);
      window.location.href = '/partidos';
    }
  }

  const editarPuntos = async (equipo, puntos) => {
    try {
      const response = await axios.post('http://localhost:8081/partidos/actualizar', {
          equipo,
          puntos,
        },
        { headers: { 'content-type': 'application/json' }
      })
  
      const data = response.data;
      if (data.status === 'Ok') {
        alert(data.msg);
      }
    } catch (error) {
      console.log(error);
    }
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
                    <td>Resultado equipo local</td>
                    <td>
                      <input
                      ref={resloc}
                        type='number'
                        size='1'
                        maxlength='2'
                        className='form-control'
                        placeholder='resultado local'
                        name='estado'
                        defaultValue={rlocal}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Resultado equipo visitante</td>
                    <td>
                      <input
                       ref={resvisi}
                        type='number'
                        size='1'
                        maxlength='2'
                        className='form-control'
                        placeholder='resultado visitante'
                        name='encuentro'
                        defaultValue={rvisit}
                      />
                    </td>
                  </tr>
                </table>
                <div className='modal-footer'>
                  <button className='btn btn-primary' type='button' onClick={editarpartido}>
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
