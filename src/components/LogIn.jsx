import React from 'react';
import logo from '../asset/logoAlib.jpg';

const LogIn = () => {
  return (
    <div className="pace-done vertical-layout vertical-menu-modern blank-page navbar-floating footer-static" data-open="click" data-menu="vertical-menu-modern" data-col="blank-page">
      <div className='pace pace-inactive'>
        <div
          className='pace-progress'
          data-progress-text='100%'
          data-progress='99'
          style={{transform: 'translate3d(100%, 0, 0)'}}
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
                      <img
                        src={logo}
                        alt='logo'
                        width='150'
                        height='100'
                      />
                      <h2 className='brand-text text-primary ms-1 sr-only'>Alib</h2>
                    </a>

                    <h4 className='card-title mb-1'>Bienvenido a Alib! 👋</h4>
                    <p className='card-text mb-2'>Por favor ingresa a tu cuenta</p>

                    <form
                      className='auth-login-form mt-2'
                      action='index.html'
                      method='POST'
                      novalidate='novalidate'
                    >
                      <div className='mb-1'>
                        <label for='login-email' className='form-label'>
                          Correo
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='login-email'
                          name='login-email'
                          placeholder='john@example.com'
                          aria-describedby='login-email'
                          tabindex='-1'
                          autofocus=''
                        />
                      </div>

                      <div className='mb-1'>
                        <div className='d-flex justify-content-between'>
                          <label className='form-label' for='login-password'>
                            Contraseña
                          </label>
                          <a href='auth-forgot-password-basic.html'>
                            <small>Olvidaste tu contraseña?</small>
                          </a>
                        </div>
                        <div className='input-group input-group-merge form-password-toggle'>
                          <input
                            type='password'
                            className='form-control form-control-merge'
                            id='login-password'
                            name='login-password'
                            tabindex='-1'
                            placeholder='············'
                            aria-describedby='login-password'
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
                            id='remember-me'
                            tabindex='3'
                          />
                          <label className='form-check-label' for='remember-me'>
                            {' '}Recuerdame{' '}
                          </label>
                        </div>
                      </div>
                      <button
                        className='btn btn-primary w-100 waves-effect waves-float waves-light'
                        tabindex='-1'
                      >
                        Ingresa
                      </button>
                    </form>

                    <p className='text-center mt-2'>
                      <span>Nuevo en nuestra plataforma?</span>
                      <a href='./resgister'>
                        <span>Crear una cuenta</span>
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

export default LogIn;
