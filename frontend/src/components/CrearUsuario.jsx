import { Inicio } from './Inicio';
import LogIn from './LogIn';
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function CrearUsuario() {
  document.title = 'Crear Usuario';

  const storage = localStorage.getItem('user');
  const [user, setuser] = useState(JSON.parse(storage));

  useEffect(() => {
    setuser(JSON.parse(storage));
  }, [storage]);

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

  const docusuario = useRef();
  const nomusuario = useRef();
  const emailusuario = useRef();
  const passusuario = useRef();
  const rolusuario = useRef();

  const [alerta, setAlerta] = useState(false);

  function guardarusuario(event) {
    event.preventDefault();
    const doc = docusuario.current.value;
    const nom = nomusuario.current.value;
    const email = emailusuario.current.value;
    const pass = passusuario.current.value;
    const idrol = rolusuario.current.value;
    const idestado = '1';
    axios
      .post(`http://localhost:8081/usuarios/guardar`, {
        headers: { 'Content-Type': 'application/json' },
        doc,
        nom,
        email,
        pass,
        idrol,
        idestado,
      })
      .then((res) => {
        const respuesta = res.data;
        alert(respuesta.msg);
        if (respuesta.status === 'Ok') {
          setAlerta(true);
          setTimeout(() => {
            setAlerta(false);
          }, 3000);
        }
      })
      .catch((error) => alert(error));
    docusuario.current.value = '';
    nomusuario.current.value = '';
    emailusuario.current.value = '';
    passusuario.current.value = '';
    rolusuario.current.value = '';
  }

  return (
    <>
      {storage ? (
        <>
        <Inicio/>

      {/* <!-- BEGIN: Content --> */}
      <div className='app-content content'>
        {/* <!-- Content-wrapper --> */}
        <div className='content-wrapper'>
          <div className='card'>
            <div className='card-body border-bottom'>
              <div className='container'>
                <div className='row'>
                  <div
                    className='col-md-12 col-lg-6 mx-auto'
                    style={{ 'text-align': 'center' }}
                  >
                    <h2>Formulario de creación de usuarios</h2>
                  </div>
                </div>
                <div className='row'>
                  {alerta && (
                    <div
                      className='col-md-12 col-lg-6 mx-auto alert alert-success fade-show'
                      role='alert'
                      style={{ 'text-align': 'center ' }}
                    >
                      Usuario creado con exito
                    </div>
                  )}
                </div>

                <div className='row'>
                  <div className='col-md-12 col-lg-4 mx-auto'>
                    <form
                      action=''
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmit}
                    >
                      <div className='form-group'>
                        <label htmlFor='' className='form-label'>
                          Documento
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='doc'
                          placeholder='Numero de documento'
                          ref={docusuario}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='' className='form-label'>
                          Nombre Completo
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='nom'
                          placeholder='Nombres y Apellidos'
                          ref={nomusuario}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='' className='form-label'>
                          Correo Electronico
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='correo'
                          placeholder='Correo Electronico'
                          ref={emailusuario}
                        />
                      </div>

                      <div className='form-group'>
                        <label htmlFor='' className='form-label'>
                          Contraseña
                        </label>
                        <div className='input-group input-group-merge form-password-toggle'>
                          <input
                            className='form-control form-control-merge'
                            id='login-password'
                            type='password'
                            name='login-password'
                            placeholder='Contraseña'
                            aria-describedby='login-password'
                            tabIndex='0'
                            ref={passusuario}
                          />
                        </div>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='' className='form-label'>
                          Rol del usuario
                        </label>
                        <select
                          className='form-control'
                          id='rol'
                          ref={rolusuario}
                        >
                          <option value='1'>Usuario Interno</option>
                          <option value='2'>Usuario Externo</option>
                        </select>
                      </div>
                      <br />
                      <div className='mt-2'>
                        <button
                          className='btn btn-primary'
                          type='button'
                          onClick={guardarusuario}
                        >
                          Guardar
                        </button>
                        <Link to='/listausuarios'>
                          {' '}
                          <button type='button' className='btn btn-secondary'>
                            Cancelar
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- / Content-wrapper --> */}
      </div>
      {/* <!-- END: Content --> */}
    </>
      ) : <LogIn />
      }
    </>
  );
}