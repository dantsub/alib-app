import logo from '../asset/logoAlib.jpg' 
import { Link } from "react-router-dom";

export function Base(){
    return (
        <>

{/* <!-- BEGIN: Navbar --> */}
    <nav
      className="
        header-navbar
        navbar navbar-expand-lg
        align-items-center
        floating-nav
        navbar-light navbar-shadow
      "
    >
      <ul
        className="
          nav
          navbar-nav
          align-items-center
          justify-content-between
          w-100
          pl-1
        "
      >
        <ul className="nav navbar-nav align-items-center gap-2">
          <li className="nav-item d-xl-none">
            <a className="nav-link menu-toggle" href="...">
              <i className="fa fa-bars feather feather-menu ficon"></i>
            </a>
          </li>
          <li className="nav-item">
            {/* <!-- Agregué un acceso directo a login en cerrar sesión --> */}
            <a href="...">
              <i className="fa fa-power-off"></i>
              <span className="">Cerrar sesión</span>
            </a>
          </li>
        </ul>
        <li className="nav-item dropdown dropdown-user">
          <div className="d-flex mr-1 gap-2">
            <div className="user-nav d-sm-flex d-none flex-column mr-1">
              <span className="user-name fw-bolder">Lesly Sharyn</span>
              <span className="user-status">Usuario</span>
            </div>
            <span className="avatar" style={{ width: '40px' }}>
              <div
                className="avatar-initials round"
                style={{ width: '40px' }}
                style={{ height: '40px' }}
                data-name="js"
              ></div>
              <span className="avatar-status-online"></span>
            </span>
          </div>
        </li>
      </ul>
    </nav>
    {/* <!-- END: Navbar -->

    <!-- BEGIN: Main Menu --> */}
    <div
      className="
        main-menu
        menu-fixed menu-light menu-accordion menu-shadow
        expanded
      "
      data-scroll-to-active="true"
    >
      {/* <!-- LOGO --> */}
      <div className="navbar-header expanded">
        <ul className="nav navbar-nav flex-row">
          <li className="nav-item me-auto">
            <a className="navbar-brand" href="...">

              <div className="col-md-4 px-0">
                <img
                  src={logo}
                  className="img-fluid align-items-center"
                  style={{ width: '900' }}
                />
              </div>

              <h2 className="sr-only">Alib</h2>
            </a>
          </li>
          <li className="nav-item nav-toggle">
            <a
              className="nav-link modern-nav-toggle pe-0"
              data-bs-toggle="collapse"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="
                  feather feather-x
                  d-block d-xl-none
                  text-primary
                  toggle-icon
                  font-medium-4
                "
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- GESTIONES --> */}
      <ul className="navigation navigation-main">
        <li className="navigation-header"><span>GESTIONES</span></li>
      </ul>
      <div>
      
      <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fa fa-flag"></i>  Campeonatos                
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link to ="/campeonatos">
              <a class="dropdown-item">Gestión</a>
              </Link>
              <Link to ="/campeonatos_eqip">
              <a class="dropdown-item">Camp. Equipos</a>
            </Link>
          </div>
        </div>
      <div> 
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fa fa-users"></i>  Equipos
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to ="/equipos">
            <a class="dropdown-item">Gestión</a>
            </Link>
            <Link to ="/jugadores">
            <a class="dropdown-item">Jugadores</a>
            </Link>
        </div>
      </div>
      <div> 
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fa fa-futbol"></i>  Partidos
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <Link to ="/partidos">
          <a class="dropdown-item">Gestión</a>
          </Link>
          <Link to ="/fechas">
          <a class="dropdown-item">Fechas</a>
          </Link>
          <Link to ="/posiciones">
          <a class="dropdown-item">Tabla de Posiciones</a>
          </Link>
        </div>
      </div>
      <div> 
        <a className="nav-link dropdown-toggle">
        <Link to ="/listausuarios">
        <i className="fa fa-user-friends"></i>  Usuarios                
          </Link>
          </a>
        </div>
      
</div>
    {/* <!-- END: Main Menu --> */}
        </>

    );
}