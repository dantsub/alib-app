import { Base } from './Base';
import { useRef, useState } from 'react';
import axios from 'axios';

export function Inscribir() {
  // Con esto cambiamos el título a la página que por default esta en Alib-app
  document.title = 'Crear Equipo';
  const [logo, setLogo] = useState();

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

  const nomequ = useRef();

  const uploadfile = (event) => {
    setLogo(event.target.files[0]);
  };

  function guardar(event) {
    event.preventDefault();
    const nombre = nomequ.current.value;
    const eusuario = '61ba6767356bdee10c857254'; // Aquí tengo que traerme el id  del usuario en sesión
    const datos = new FormData();
    datos.append('nombre', nombre);
    datos.append('logo', logo);
    datos.append('eusuario', eusuario);
    console.log(nombre);
    console.log(logo);
    axios
      .post(`http://localhost:8081/equipos/guardar`, datos, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        const respuesta = res.data;
        alert(respuesta.msg);
        if (respuesta.status === 'Ok') {
          window.location.href = '/jugadores';
        }
      })
      .catch((error) => alert(error));
    nomequ.current.value = '';
    setLogo('');
  }
  return (
    <>
      <Base />

      {/* <!-- BEGIN: Content --> */}
      <div className='app-content content'>
        {/* <!-- Content-wrapper --> */}
        <div className='content-wrapper'>
          <div className='card'>
            
          <h4 class='card-title'>Escoja un Campeonato</h4>
                <div className='col-md-2 '>
                  <select name='campeonatos' class='form-control'>
                    <option value='camp1' selected>
                      Liga Betplay Dimayor
                    </option>
                    <option value='camp2'>UEFA</option>
                    <option value='camp3'>Premier</option>
                  </select>
                </div>
                            
            <div className='card-body border-bottom'>
              <h2>¡INSCRIBE TU EQUIPO!</h2>
            </div>

            <div>
              {/* <!-- Seccion de Formulario --> */}
              <div className='row'>
                <div className='col-md-12 col-lg-4 mx-auto'>
                  <form
                    action=''
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <div className='form-group'>
                      <label for='' className='form-label'>
                        Nombre del Equipo
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='doc'
                        placeholder='Nombre del equipo'
                        required
                        ref={nomequ}
                      />
                      <div className='invalid-feedback'>
                        Por favor ingrese el nombre del equipo
                      </div>
                    </div>

                    <br />
                    <div className='row'>
                      <div className='col-lg-4 center-content'>
                        <button
                          className='btn btn-primary'
                          type='submit'
                          onClick={guardar}
                        >
                          Guardar
                        </button>
                      </div>
                    </div>
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
