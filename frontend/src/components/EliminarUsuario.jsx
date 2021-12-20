import React from "react";

export function EliminarUsuario() {
  return (
    <>
      <button
        href='#'
        class='btn btn-danger table-buttons'
        data-bs-toggle='modal'
        data-bs-target='#modal_eliminar'
      >
        <span class='fa fa-window-close'></span>
      </button>
      {/* <!-- Modal eliminar --> */}
      <div
        class='modal fade'
        id='modal_eliminar'
        tabindex='-1'
        role='dialog'
        aria-labelledby='titulo_eliminar'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-sm' role='document'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 id='titulo_eliminar'>Eliminar Usuario</h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <form
                action="{{url_for('users')}}"
                class='form_eliminar row g-3 needs-validation'
                method='POST'
                novalidate
              >
                <input aria-label='.' type='hidden' name='oculto' value='eliminar' />
                <input
                  type='hidden'
                  name='ocultoborrar'
                  value='{{usuario.0}}'
                />
                <p class='text-center'>
                  ¿Está seguro que desea eliminar el usuario?
                </p>
                <p class='text-center fw-bold'>Juan Rodrigo Jimenez</p>
                <div class='modal-footer'>
                  <button
                    type='button'
                    class='btn btn-secondary'
                    data-bs-dismiss='modal'
                  >
                    Cancelar
                  </button>
                  <button class='btn btn-primary' type='submit' name='si'>
                    Eliminar usuario
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Final modal eliminar --> */}
    </>
  );
}
