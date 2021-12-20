import logo from '../asset/logoAlib.jpg';
import { Link } from 'react-router-dom';
import LogIn from './LogIn';
import { useEffect, useState } from 'react';

export function Base() {
  const storage = localStorage.getItem('user');
  const [user, setUser] = useState(JSON.parse(storage));

  useEffect(() => {
    setUser(JSON.parse(storage));
  }, [storage]);

  const close = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <>
      { storage ? (
        <>
          <nav
            className='
            header-navbar
            navbar navbar-expand-lg
            align-items-center
            floating-nav
            navbar-light navbar-shadow'
          >
            <ul
              className='
                nav
                navbar-nav
                align-items-center
                justify-content-between
                w-100
                pl-1'
            >
              <ul className='nav navbar-nav align-items-center gap-2'>
                <li className='nav-item d-xl-none'>
                  <span className='nav-link menu-toggle'>
                    <i className='fa fa-bars feather feather-menu ficon'></i>
                  </span>
                </li>
                <li className='nav-item'>
                  <span>
                    <i className='fa fa-power-off'></i>
                    <span className='' onClick={close}>Cerrar sesión</span>
                  </span>
                </li>
              </ul>
              <li className='nav-item dropdown dropdown-user'>
                <div className='d-flex mr-1 gap-2'>
                  <div className='user-nav d-sm-flex d-none flex-column mr-1'>
                    <span className='user-name fw-bolder'>{user.nom}</span>
                    <span className='user-status'>Usuario</span>
                  </div>
                  <span className='avatar' style={{ width: '40px' }}>
                    <div
                      className='avatar-initials round'
                      style={{ width: '40px', height: '40px' }}
                      data-name='js'
                    ></div>
                    <span className='avatar-status-online'></span>
                  </span>
                </div>
              </li>
            </ul>
          </nav>

          <div
            className='
            main-menu
            menu-fixed menu-light menu-accordion menu-shadow
            expanded'
            data-scroll-to-active='true'
          >
            <div className='navbar-header expanded'>
              <ul className='nav navbar-nav flex-row'>
                <li className='nav-item me-auto'>
                  <span className='navbar-brand'>
                    <div className='col-md-4 px-0'>
                      <img
                        src={logo}
                        className='img-fluid align-items-center'
                        style={{ width: '900' }}
                        alt="logo"
                      />
                    </div>

                    <h2 className='sr-only'>Alib</h2>
                  </span>
                </li>
                <li className='nav-item nav-toggle'>
                  <span
                    className='nav-link modern-nav-toggle pe-0'
                    data-bs-toggle='collapse'
                  >
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
                      className='
                      feather feather-x
                      d-block d-xl-none
                      text-primary
                      toggle-icon
                      font-medium-4'
                    >
                      <line x1='18' y1='6' x2='6' y2='18'></line>
                      <line x1='6' y1='6' x2='18' y2='18'></line>
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
            <ul className='navigation navigation-main'>
              <li className='navigation-header'>
                <span>GESTIONES</span>
              </li>
            </ul>
            <div>
              <span
                className='nav-link dropdown-toggle'
                data-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='fa fa-flag'></i> Campeonatos
              </span>
              <div
                class='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <Link to='/campeonatos'>
                  <span class='dropdown-item'>Gestión</span>
                </Link>
                <Link to='/campeonatos_eqip'>
                  <span class='dropdown-item'>Camp. Equipos</span>
                </Link>
              </div>
            </div>
            <div>
              <span
                className='nav-link dropdown-toggle'
                data-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='fa fa-users'></i> Equipos
              </span>
              <div
                class='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <Link to='/equipos'>
                  <span class='dropdown-item'>Gestión</span>
                </Link>
                <Link to='/jugadores'>
                  <span class='dropdown-item'>Jugadores</span>
                </Link>
              </div>
            </div>
            <div>
              <span
                className='nav-link dropdown-toggle'
                data-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='fa fa-futbol'></i> Partidos
              </span>
              <div
                class='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <Link to='/partidos'>
                  <span class='dropdown-item'>Gestión</span>
                </Link>
                <Link to='/fechas'>
                  <span class='dropdown-item'>Fechas</span>
                </Link>
                <Link to='/posiciones'>
                  <span class='dropdown-item'>Tabla de Posiciones</span>
                </Link>
              </div>
            </div>
            <div>
              <span className='nav-link dropdown-toggle'>
                <Link to='/listausuarios'>
                  <i className='fa fa-user-friends'></i> Usuarios
                </Link>
              </span>
            </div>
          </div>
        </>
      ) : <LogIn />
      }
    </>
  );
}
