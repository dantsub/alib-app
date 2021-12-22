import React, { useEffect, useRef, useState } from 'react';
import { Base } from './Base';
import axios from 'axios';

export function Crearequipo() {
  // Con esto cambiamos el título a la página que por default esta en Alib-app
  document.title = 'Crear Equipo';
  //Traer los datos de usuario
  const storage = localStorage.getItem('user');
  const [user, setuser] = useState(JSON.parse(storage));

  useEffect(() => {
    setuser(JSON.parse(storage));
  }, [storage]);

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
    const eusuario = user._id; // Aquí tengo que traerme el id  del usuario en sesión
    const datos = new FormData();
    datos.append('nombre', nombre);
    datos.append('logo', logo);
    datos.append('eusuario', eusuario);
    console.log(datos);
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
            <div className='card-body border-bottom'>
              <h2>¡CREA TU EQUIPO!</h2>
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
                      <label htmlFor='doc' className='form-label'>
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
                    <div className='form-group'>
                      <label htmlFor='logo' className='form-label'>
                        Logo del Equipo
                      </label>
                      <input
                        type='file'
                        className='form-control'
                        id='logo'
                        placeholder='logo'
                        required
                        onChange={uploadfile}
                      />
                      <div className='invalid-feedback'>
                        Por favor ingrese el logo del equipo
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
