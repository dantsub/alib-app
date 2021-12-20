<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Base } from './Base';
import { EliminarUsuario } from './EliminarUsuario';
import { consumirlistarusuarios } from '../API/Alip_Api';
import { Link } from 'react-router-dom';
=======
import { Base } from "./Base";
import { useEffect, useState } from "react";
import { EditarUsuario } from "./EditarUsuario";
import { consumirlistarusuarios } from "../API/Alip_Api";
import { Link } from "react-router-dom";
>>>>>>> cf8bd44c0d5b0f1fdce15e10c8c03ea64246b718

export function ListaUsuarios() {
  document.title = 'Lista de Usuarios';

  let [listar_us, setlistar_us] = useState([]);
  let [listarUsuario, setListarUsuario] = useState([]);

  useEffect(() => {
    const solicitar_usuarios = async () => {
      const dato = await consumirlistarusuarios();
      console.log(dato);
      setlistar_us(dato.usuarios);
      setListarUsuario(dato.usuarios);
    };
    solicitar_usuarios();
  }, []);

  const buscar_usuarios = (evento) => {
    var busqueda = listar_us.filter((e) => {
      if (
        e.nombre.toLowerCase().includes(evento.target.value.toLowerCase()) ||
        e.correo.toLowerCase().includes(evento.target.value.toLowerCase()) ||
        e.rol.toLowerCase().includes(evento.target.value.toLowerCase()) ||
        e.estado.toLowerCase().includes(evento.target.value.toLowerCase())
      ) {
        return e;
      }
      return false;
    });
    setListarUsuario(busqueda);
  };

  function estado(id) {
<<<<<<< HEAD
    if (id === 'Inactivo') {
      return (
        <span class='badge rounded-pill badge-light-danger me-1'>Inactivo</span>
      );
=======
    if (id === "0") {
      return (<span class="badge rounded-pill badge-light-danger me-1"
                          >Inactivo</span>)
>>>>>>> cf8bd44c0d5b0f1fdce15e10c8c03ea64246b718
    } else {
      return (
        <span class='badge rounded-pill badge-light-success me-1'>Activo</span>
      );
    }
  }

<<<<<<< HEAD
  function botones(id) {
    if (id === 'Activado') {
      return (
        <div>
          <Link
            className='btn btn-primary table-buttons'
            to={{
              pathname: '/editarusuario',
              state: {
                id: id,
              },
            }}
          >
            <span className='fas fa-edit'></span>
          </Link>
          <EliminarUsuario id={id} />
        </div>
      );
    } else {
      return (
        <div className='btn-group'>
          <Link
            className='btn btn-primary table-buttons'
            to={{
              pathname: '/editarusuario',
              state: {
                id: id,
              },
            }}
          >
            <span className='fas fa-edit'></span>
          </Link>
        </div>
      );
    }
=======
  function rol(id) {
    if (id === "1") {
      return (<span class="badge rounded-pill badge-light-primary me-1"
                          >Usuario Interno</span>)
    } else {
      return (<span class="badge rounded-pill badge-light-secondary me-1"
                          >Usuario Externo</span>)
    }    
>>>>>>> cf8bd44c0d5b0f1fdce15e10c8c03ea64246b718
  }

  return (
    <>
      <Base />

      <div className='app-content content'>
        {/* <!-- Content-wrapper --> */}
        <div className='content-wrapper'>
          <div className='card'>
            <div className='card-body border-bottom'>
              <h2>Usuarios</h2>
              {/* <!-- Seccion de filtros --> */}
              <h4 className='card-title'>Busqueda y filtros</h4>
              <div className='row'>
                <div className='col-md-3'>
                  <label className='form-label' for='Searchproducto'>
                    Busqueda de usuarios
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='Searchproducto'
                    placeholder='Busqueda'
                    aria-controls='Buscar'
                    onChange={buscar_usuarios}
                  />
                </div>
                {/* <!-- Boton y Modal Crear Producto --> */}

                <div className='col-md-3 d-flex align-items-end'>
                  <span className='mr-1' style={{ margin: '10px' }}>
                    Crear Usuario
                  </span>

                  <Link to='/CrearUsuario'>
                    <button
                      type='button'
                      id='crear usuario'
                      className='btn btn-primary align-self-end btn-crear'
                      data-bs-toggle='modal'
                      data-bs-target='#modalNew'
                      title='Crear Nuevo Usuario'
                    >
                      <i className='fa fa-address-book'></i>
                    </button>
                  </Link>
                </div>

                {/* <!-- Fin Boton y Modal Crear Producto  --> */}
              </div>
            </div>
            {/* <!-- Fin card-body --> */}

            {/* <!-- Fin seccion del filtros --> */}

            <div>
              {/* <!-- Seccion de tabla --> */}
              <div
                className='card-dataTable table-responsive pt-0'
                style={{ padding: '5px !important' }}
              >
<<<<<<< HEAD
                <div
                  className='table-responsive table-bordered'
                  id='Div-tablaProducto'
                >
                  <table className='table table-hover' id='tablaprod'>
                    <thead>
                      <tr>
                        <th>Documento</th>
                        <th>Nombre Completo</th>
                        <th>Correo Electronico</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody className='js-table-body' id='tablausuarios'>
                      {listarUsuario.map((usuario) => (
                        <tr>
                          <td>{usuario.doc}</td>
                          <td>{usuario.nom}</td>
                          <td>{usuario.email}</td>
                          <td>{usuario.idrol}</td>
                          <td>{estado(usuario.idestado)}</td>
                          <td>{botones(usuario.idestado)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* <!-- #fin de la tabla --> */}
                </div>
=======
                <table className="table table-hover" id="tablaprod">
                  <thead>
                    <tr>
                      <th>Documento</th>
                      <th>Nombre Completo</th>
                      <th>Correo Electronico</th>
                      <th>Rol</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                    <tbody className="js-table-body" id="tablausuarios">
                                {listarUsuario.map(usuario => (
                                    <tr>
                                        <td>{usuario.doc}</td>
                                        <td>{usuario.nom}</td>
                                        <td>{usuario.email}</td>
                                        <td>{rol(usuario.idrol)}</td>
                                        <td>{estado(usuario.idestado)}</td>
                                    <td>
                                      <EditarUsuario doc={usuario.doc} nom={usuario.nom} email={usuario.email} idrol={usuario.idrol} idestado={usuario.idestado}/> 
                                        </td>
                                    </tr>
                                ))}
                    
                </tbody>
                </table>

                {/* <!-- #fin de la tabla --> */}
>>>>>>> cf8bd44c0d5b0f1fdce15e10c8c03ea64246b718
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </>
  );
}
=======
    </div>
            
        </>
  );
  
  
}
>>>>>>> cf8bd44c0d5b0f1fdce15e10c8c03ea64246b718
