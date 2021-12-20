import { useRef, useState } from 'react';
import axios from "axios";

export function Editarfecha({jornada, fecha_ini, fecha_fin}) {
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

  const fechaini = useRef();
  const fechafin = useRef();
  const jor = useRef();
  const editarfecha = async(event)=>{
    const jorn = jor.current.value;
    const fechai = fechaini.current.value;
    const fechaf = fechafin.current.value;
    const response = await axios.post(
      `http://localhost:8081/fechas/editarfechas`,
      {
        jornada: jorn,
        fecha_ini: fechai,
        fecha_fin: fechaf,
      },
      { headers: { 'content-type': 'application/json' } }
    )
    const data = response.data;
    if (data.status==="OK"){
    console.log('Status OK');
    }
  };

  function dateEdit(fecha){
    const fe = new Date(fecha);
    var fechas = fe.toISOString().substr(0,10);
    return fechas;
  }
  return (
    <>
      <button
        className='btn btn-primary align-self-end btn-crear'
        id='editar'
        data-bs-toggle='modal'
        data-bs-target={`#modal_editar_fecha_${jornada.replace(/[ .]+/g, '').toLowerCase()}`}
      >
        <i className='fas fa-edit'></i>
      </button>

      {/* <!-- Modal Crear Fecha  --> */}
      <div
        className='modal fade'
        id={`modal_editar_fecha_${jornada.replace(/[ .]+/g, '').toLowerCase()}`}
        tabindex='-1'
        aria-labelledby='titulo_editar'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-sm'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 id='titulo_editar'>Editar Fecha</h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form
                id='editarfecha'
                action=''
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <input aria-label=" ," type='hidden' name='oculto' value='editarfecha'/>
                <label for='' className='form-label'>
                  Jornada {jornada}
                </label>
                <select name='Jornadas' className='form-control-sm'>
                  <option value='1' selected>
                    1
                  </option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                </select>
                <div>
                  <label for='' className='form-label'>
                    Fecha inicial
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='fechaini'
                    placeholder='Fecha inicial'
                    ref={fechaini} defaultValue={dateEdit(fecha_ini)}/>
                </div>
                <div>
                  <label for='' className='form-label'>
                    Fecha Fin
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='fechafin'
                    placeholder='Fecha final'
                    ref={fechafin} defaultValue={dateEdit(fecha_fin)}/>
                </div>
                <table className='table-responsive'>
                  <tr className='col-4'>
                    <th width='5%'>Local</th>
                    <th width='5%'>Visante</th>
                    <th width='5%'>Fecha</th>
                  </tr>
                  <tr className='col-4'>
                    <th align='left'>
                      <select align='left' name='Equipos'>
                        <option value='Eq1'>Equipo A</option>
                        <option value='Eq2'>Equipo B</option>
                        <option value='Eq3'>Equipo C</option>
                        <option value='Eq4'>Equipo D</option>
                      </select>
                    </th>
                    <th>
                      <select name='Equipos' className='form-control-sm'>
                        <option value='Eq1'>Equipo A</option>
                        <option value='Eq2'>Equipo B</option>
                        <option value='Eq3'>Equipo C</option>
                        <option value='Eq4'>Equipo D</option>
                      </select>
                    </th>
                    <th>
                      <input
                        type='date'
                        id='fecha'
                        placeholder='Fecha'
                        className='form-control-sm'
                      />
                    </th>
                  </tr>
                  <tr className='col-4'>
                    <td>
                      <select name='Equipos' className='form-control-sm'>
                        <option value='Eq1'>Equipo A</option>
                        <option value='Eq2'>Equipo B</option>
                        <option value='Eq3'>Equipo C</option>
                        <option value='Eq4'>Equipo D</option>
                      </select>
                    </td>
                    <td>
                      <select name='Equipos' className='form-control-sm'>
                        <option value='Eq1'>Equipo A</option>
                        <option value='Eq2'>Equipo B</option>
                        <option value='Eq3'>Equipo C</option>
                        <option value='Eq4'>Equipo D</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type='date'
                        id='fecha'
                        placeholder='Fecha'
                        className='form-control-sm'
                      />
                    </td>
                  </tr>

                  <div className='modal-footer'>
                    <button className='btn btn-primary' type='submit' onClick={()=>{editarfecha(jornada)}} >
                      Editar
                    </button>
                  </div>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
