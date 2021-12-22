import React, { useRef, useState } from 'react';
import axios from 'axios';

export function EditarUsuario({ doc, nom, email, idrol }) {
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
  const rolusuario = useRef();
  const estadousuario = useRef();

  const editaruser = async (event) => {
    const docuser = docusuario.current.value;
    const nomuser = nomusuario.current.value;
    const emailuser = emailusuario.current.value;
    const roluser = rolusuario.current.value;
    const estadouser = estadousuario.current.value;

    const response = await axios.post(
      `http://localhost:8081/usuarios/editar`,
      {
        doc: docuser,
        nom: nomuser,
        email: emailuser,
        idrol: roluser,
        idestado: estadouser,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
    const data = response.data;
    alert(data.msg);
    if (data.status === 'Ok') {
      console.log('Status Ok');
      window.location.href = '/listausuarios';
    }
  };

  return (
    <>
      <button
        href='#'
        className='btn btn-primary table-buttons'
        data-bs-toggle='modal'
        data-bs-target={`#modal_editar_${doc}`}
      >
        <span className='fas fa-edit'></span>
      </button>
      {/* <!-- Modal eliminar --> */}
      <div
        className='modal fade'
        id={`modal_editar_${doc}`}
        tabIndex='-1'
        role='dialog'
        aria-labelledby='titulo_editar'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-sm' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 id='titulo_eliminar'>Editar Usuario</h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form
                id='editar_usuario'
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
                    disabled
                    ref={docusuario}
                    value={doc}
                    required
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
                    defaultValue={nom}
                    ref={nomusuario}
                    required
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
                    defaultValue={email}
                    ref={emailusuario}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='' className='form-label'>
                    Rol del usuario
                  </label>
                  <select className='form-control' id='rol' ref={rolusuario}>
                    <option value='1'>Usuario Interno</option>
                    <option value='0'>Usuario Externo</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label htmlFor='' className='form-label'>
                    Estado del usuario
                  </label>
                  <select
                    className='form-control'
                    id='estado'
                    ref={estadousuario}
                  >
                    <option value='1'>Activo</option>
                    <option value='0'>Inactivo</option>
                  </select>
                </div>
                <br />
                <div className='modal-footer'>
                  <button
                    type='submit'
                    className='btn btn-primary'
                    onClick={() => editaruser({ doc })}
                  >
                    Guardar
                  </button>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-bs-dismiss='modal'
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
