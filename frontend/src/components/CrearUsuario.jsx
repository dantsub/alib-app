import { Base } from "./Base";
import { useRef, useState } from "react";
import axios from "axios";

export function CrearUsuario(){


  document.title = "Crear Usuario";

  const [validated, setValidated] = useState("false");

  const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      }
      event.target.className += " was-validated";

    setValidated(true);
  };
    
    const docusuario = useRef();
    const nomusuario = useRef();
    const emailusuario = useRef();
    const passusuario = useRef();
    const rolusuario = useRef();

    const[alerta, setAlerta] = useState(false);

    let registrousuario=[];

    function guardarusuario (event) {
      event.preventDefault();
      const doc = docusuario.current.value;
      const nom = nomusuario.current.value;
      const email = emailusuario.current.value;
      const pass = passusuario.current.value;
      const idrol = rolusuario.current.value;
      const idestado = "Activado";
      // const datos = new FormData();
      // datos.append("doc", doc)
      // datos.append("nom", nom)
      // datos.append("email", email)
      // datos.append("pass", pass)
      // datos.append("idrol", idrol)
      // datos.append("idestado", idestado)
      axios.post(`http://localhost:8081/usuarios/guardar`, { headers: { 'Content-Type':"application/json"},doc,nom,email,pass,idrol,idestado})
        .then(res => {
          const respuesta = res.data;
          alert(respuesta.msg)
          if (respuesta.status === "Ok") {
            // { window.location.href = "/listausuarios" }
            setAlerta(true);
      setTimeout(() => {
        setAlerta(false);
      }, 3000);
          }
        })
        .catch(error => alert(error));
      docusuario.current.value = "";
      nomusuario.current.value = "";
      emailusuario.current.value = "";
      passusuario.current.value = "";
      rolusuario.current.value = "";
      
    };

    //   const data = { docusuario:doc, nomusuario:nom, emailusuario:email, passusuario:pass, rolusuario:idrol, idestado:idestado };
    //   registrousuario.push(data);
    //   localStorage.setItem("registrosusuario", JSON.stringify(registrousuario));
    //   console.log(registrousuario);
    //   setAlerta(true);
    //   //fadeout alert 2 seconds
    //   setTimeout(() => {
    //     setAlerta(false);
    //   }, 2000);
      
      
    // };


      return (
          <>

          <Base />
      
          

          {/* <!-- BEGIN: Content --> */}
          <div className="app-content content">
            
        {/* <!-- Content-wrapper --> */}
        <div className="content-wrapper">
          <div className="card">
            <div className="card-body border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6 mx-auto" style={{'text-align': 'center'}}>
              <h2>Formulario de creación de usuarios</h2>
                      </div>
                    </div>
                    <div className="row">
          {alerta && <div className="col-md-12 col-lg-6 mx-auto alert alert-success fade-show" role="alert" style={{"text-align":"center "}}>
            Usuario creado con exito
                      </div>}  
            </div>          

          <div className="row">
            <div className="col-md-12 col-lg-4 mx-auto">
              <form action="" noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label for="" className="form-label">Documento</label>
                  <input
                    type="text"
                    className="form-control"
                    id="doc"
                    placeholder="Numero de documento"
                    ref={docusuario}
                  />
                </div>
                <div className="form-group">
                  <label for="" className="form-label">Nombre Completo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nom"
                    placeholder="Nombres y Apellidos"
                    ref={nomusuario}
                  />
                </div>
                <div className="form-group">
                  <label for="" className="form-label">Correo Electronico</label>
                  <input
                    type="text"
                    className="form-control"
                    id="correo"
                    placeholder="Correo Electronico"
                    ref={emailusuario}
                  />
                </div>
                
                <div className="form-group">
                  <label for="" className="form-label"
                    >Contraseña</label>
                  <div className="input-group input-group-merge form-password-toggle">
                              <input className="form-control form-control-merge" id="login-password" type="password"
                                name="login-password" placeholder="Contraseña" aria-describedby="login-password"
                                tabindex="0" ref={passusuario}/>
                          {/* <span className="input-group-text cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                              className="feather feather-eye-off font-small-4">
                              <path
                                d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24">
                              </path>
                              <line x1="1" y1="1" x2="23" y2="23"></line>
                            </svg>
                          </span> */}
                        </div>
                </div>
                <div className="form-group">
                  <label for="" className="form-label"
                    >Rol del usuario</label
                  >
                  <select className="form-control" id="rol" ref={rolusuario}>
                    <option value="1">Usuario Interno</option>
                    <option value="2">Usuario Externo</option>
                  </select>
                </div>
                <br />
                <div className="mt-2">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={guardarusuario}
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                  >
                    Cerrar
                  </button>
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

      );
}