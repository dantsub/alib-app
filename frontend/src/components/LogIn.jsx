import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../asset/logoAlib.jpg';

const LogIn = () => {
  const formDoc = useRef();
  const formPass = useRef();

  const [validated, setValidated] = useState('false');

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    e.target.className += ' was-validated';

    setValidated(true);
  };

  const login = async (e) => {
    e.preventDefault();
    const doc = formDoc.current.value;
    const pass = formPass.current.value;

    try {
      const response = await axios.post('http://localhost:8081/autenticacion/login', {
          headers: { 'Content-Type': 'application/json' },
          doc,
          pass,
        })
      const { data } = response;
      if (data.estado === 'Ok') {
        alert(data.msg);
        setValidated(true);

        window.localStorage.setItem('user', JSON.stringify(data.usuario));
        window.localStorage.setItem('token', JSON.stringify(data.token));

        setTimeout(() => {
          setValidated(false);
        }, 3000);
      } else {
        formDoc.current.value = '';
        formPass.current.value = '';
      }
      window.location.href = '/';
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div
      className='pace-done vertical-layout vertical-menu-modern blank-page navbar-floating footer-static'
      data-open='click'
      data-menu='vertical-menu-modern'
      data-col='blank-page'
    >
      <div className='pace pace-inactive'>
        <div
          className='pace-progress'
          data-progress-text='100%'
          data-progress='99'
          style={{ transform: 'translate3d(100%, 0, 0)' }}
        >
          <div className='pace-progress-inner'></div>
        </div>
        <div className='pace-activity'></div>
      </div>
      <div className='app-content content'>
        <div className='content-overlay'></div>
        <div className='header-navbar-shadow'></div>
        <div className='content-wrapper'>
          <div className='content-header row'></div>
          <div className='content-body'>
            <div className='auth-wrapper auth-basic px-2'>
              <div className='auth-inner my-2'>
                <div className='card mb-0'>
                  <div className='card-body'>
                    <a href='index.html' className='brand-logo'>
                      <img src={logo} alt='logo' width='150' height='100' />
                      <h2 className='brand-text text-primary ms-1 sr-only'>
                        Alib
                      </h2>
                    </a>

                    <h4 className='card-title mb-1'>Bienvenido a Alib! 👋</h4>
                    <p className='card-text mb-2'>
                      Por favor ingresa a tu cuenta
                    </p>

                    <form
                      className='auth-login-form mt-2'
                      action=''
                      method='POST'
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmit}
                    >
                      <div className='mb-1'>
                        <label htmlFor='login-doc' className='form-label'>
                          Documento
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='login-doc'
                          name='doc'
                          placeholder='1124457789'
                          aria-describedby='login-email'
                          tabIndex='-1'
                          ref={formDoc}
                        />
                      </div>

                      <div className='mb-1'>
                        <div className='d-flex justify-content-between'>
                          <label
                            className='form-label'
                            htmlFor='login-password'
                          >
                            Contraseña
                          </label>
                        </div>
                        <div className='input-group input-group-merge form-password-toggle'>
                          <input
                            type='password'
                            className='form-control form-control-merge'
                            id='login-password'
                            name='pass'
                            tabIndex='-1'
                            placeholder='············'
                            aria-describedby='login-password'
                            ref={formPass}
                          />
                          <span className='input-group-text cursor-pointer'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='14'
                              height='14'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              className='feather feather-eye'
                            >
                              <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                              <circle cx='12' cy='12' r='3'></circle>
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className='mb-1'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            id='remember-me'
                            tabIndex='3'
                          />
                          <label
                            className='form-check-label'
                            htmlFor='remember-me'
                          >
                            {' '}
                            Recuerdame{' '}
                          </label>
                        </div>
                      </div>
                      <button
                        className='btn btn-primary w-100 waves-effect waves-float waves-light'
                        tabIndex='-1'
                        type='submit'
                        onClick={login}
                      >
                        Ingresa
                      </button>
                    </form>

                    <p className='text-center mt-2'>
                      <span>Nuevo en nuestra plataforma?</span>
                      <Link to='/resgister'>
                        <span>Crear una cuenta</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
