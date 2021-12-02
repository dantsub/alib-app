import { Base } from "./Base";
import { useRef, useState } from "react";
import { Eliminarusuario } from ".EliminarUsuario";

export function ListaUsuarios() {
    document.title = "Lista de Usuários";

    const usuarios = [{
        documento: "123456789",
        nombre: "Juan Rodrigo Jimenez",
        email: "Jrodrigo@correo.com",
        rol: "Usuario Interno",
        estado: "Activo"
    },
    {
        documento: "987654321",
        nombre: "Luis Felipe Cifuentes",
        email: "LCifuentes@correo.com",
        rol: "Usuario Externo",
        estado: "Inactivo"
    },
    {
        documento: "192837465",
        nombre: "Juan Felipe Jimenez",
        correo: "JFelipe@correo.com",
        rol: "Usuario Interno",
            estado: "Activo"
    },
        {
        documento: "987654321",
        nombre: "Luis Felipe Cifuentes",
        email: "LCifuentes@correo.com",
        rol: "Usuario Externo",
        estado: "Inactivo"
        },
    ];

    const [listarUsuario, setListarUsuario] = useState(usuarios);

    const buscar_usuarios = (evento) => {
        setListarUsuario(usuarios.filter(usuario => usuario.nombre.toLowerCase().includes(evento.target.value.toLowerCase())));
    }

    return (
        <>
            <Base />

            <div className="app-content content">
      {/* <!-- Content-wrapper --> */}
      <div className="content-wrapper">
        <div className="card">
          <div className="card-body border-bottom">
            <h2>Usuarios</h2>
            {/* <!-- Seccion de filtros --> */}
            <h4 className="card-title">Busqueda y filtros</h4>
            <div className="row">
              <div className="col-md-3">
                <label className="form-label" for="Searchproducto"
                  >Busqueda de usuarios</label
                >
                <input
                    type="text"
                    className="form-control"
                    id="Searchproducto"
                    placeholder="Busqueda"
                    aria-controls="Buscar"
                    onChange={buscar_usuarios}
                />
              </div>
              {/* <!-- Boton y Modal Crear Producto --> */}

              <div className="col-md-3 d-flex align-items-end">
                <span className="mr-1" style="margin-bottom: 10px">
                    Crear Usuario
                </span>
                                    
                <button
                  type="button"
                  id="crear usuario"
                  className="btn btn-primary align-self-end btn-crear"
                  data-bs-toggle="modal"
                  data-bs-target="#modalNew"
                  title="Crear Nuevo Usuario"
                >
                  <i className="fa fa-address-book"></i>
                </button>
              </div>

              {/* <!-- Fin Boton y Modal Crear Producto  --> */}
            </div>
          </div>
          {/* <!-- Fin card-body --> */}

          {/* <!-- Fin seccion del filtros --> */}

          <div>
            {/* <!-- Seccion de tabla --> */}
            <div
              className="card-dataTable table-responsive pt-0"
              style="padding: 5px !important"
            >
              <div
                className="table-responsive table-bordered"
                id="Div-tablaProducto"
              >
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
                                                <tr key={usuario.documento}>
                                                    <td>{usuario.documento}</td>
                                                    <td>{usuario.nombre}</td>
                                                    <td>{usuario.email}</td>
                                                    <td>{usuario.rol}</td>
                                                    <td>{usuario.estado}</td>
                                                    <td>
                                                        <a href="..."><button class="btn btn-primary table-buttons" id="editar" >
                                                            <span class="fas fa-edit"></span>
                                                            </button>
                                                        </a>
                                                        <Eliminarusuario />
                                                    </td>
                                                </tr>
                                            ))}
                    
                </tbody>
                </table>

                {/* <!-- #fin de la tabla --> */}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
            
        </>
    );
}
            
        