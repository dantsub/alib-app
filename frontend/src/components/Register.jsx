import React from 'react';
import logo from '../asset/logoAlib.jpg';

const Register = () => {
  const formDoc = useRef();
  const formPass = useRef();
  const formEmail = useRef();
  
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
          style={{ transform: 'translate3d(100%, 0px, 0px)' }}
        >
          <div className='pace-progress-inner'></div>
        </div>
        <div className='pace-activity'></div>
      </div>
      <div className='app-content content '>
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
                      Por favor llene los siguientes campos para crear su cuenta
                    </p>

                    <form
                      className='auth-register-form mt-2'
                      action='index.html'
                      method='POST'
                      novalidate='novalidate'
                    >
                      <div className='mb-1'>
                        <label htmlFor='register-document' className='form-label'>
                          Número de documento
                        </label>
                        <input aria-label='.' type='hidden' name='idrol' value='Usuario externo' />
                        <input aria-label='.' type='hidden' name='idestado' value='1' />
                        <input
                          type='text'
                          className='form-control'
                          id='register-document'
                          name='register-document'
                          placeholder='2564789953'
                          aria-describedby='register-document'
                          tabindex='1'
                          autofocus=''
                        />
                      </div>
                      <div className='mb-1'>
                        <label htmlFor='register-username' className='form-label'>
                          Nombre completo
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='register-username'
                          name='register-username'
                          placeholder='johndoe'
                          aria-describedby='register-username'
                          tabindex='1'
                          autofocus=''
                        />
                      </div>
                      <div className='mb-1'>
                        <label htmlFor='register-email' className='form-label'>
                          Correo
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='register-email'
                          name='register-email'
                          placeholder='john@example.com'
                          aria-describedby='register-email'
                          tabindex='2'
                        />
                      </div>

                      <div className='mb-1'>
                        <label htmlFor='register-password' className='form-label'>
                          Contraseña
                        </label>

                        <div className='input-group input-group-merge form-password-toggle'>
                          <input
                            type='password'
                            className='form-control form-control-merge'
                            id='register-password'
                            name='register-password'
                            placeholder='············'
                            aria-describedby='register-password'
                            tabindex='3'
                          />
                          <span className='input-group-text cursor-pointer'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='14'
                              height='14'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
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
                            id='register-privacy-policy'
                            tabindex='4'
                          />
                          <label
                            className='form-check-label'
                            htmlFor='register-privacy-policy'
                          >
                            Estoy de acuerdo con los{' '}
                            <a href='...'>terminos &amp; condiciones</a>
                          </label>
                        </div>
                      </div>
                      <button
                        className='btn btn-primary w-100 waves-effect waves-float waves-light'
                        tabindex='-1'
                      >
                        Registrar
                      </button>
                    </form>

                    <p className='text-center mt-2'>
                      <span>Ya tienes cuenta?</span>
                      <a href='./login'>
                        <span> Ingresa a tu cuenta</span>
                      </a>
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

export default Register;
