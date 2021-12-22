import { Base } from './Base';
import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { consumircampeonatos } from '../API/Alip_Api';

export function Inscribir() {
  // Con esto cambiamos el título a la página que por default esta en Alib-app
  document.title = 'Inscribir Equipo';

  const storage = localStorage.getItem('user');
  const [user, setuser] = useState(JSON.parse(storage));

  useEffect(() => {
    setuser(JSON.parse(storage));
  }, [storage]);

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

  let [listar_campeonato, setListar_campeonato] = useState([]);

  useEffect(() => {
    const solicitar_campeonato = async () => {
      const dato = await consumircampeonatos();
      setListar_campeonato(dato.campeonatos);
    };
    solicitar_campeonato();
  }, []);

  const idcamp = useRef();

  async function guardar(event) {
    event.preventDefault();
    const ecamp = idcamp.current.value;
    const eusuario = user._id;
    console.log(ecamp, eusuario);
    const response = await axios.post(
      `http://localhost:8081/equipos/inscribir`,
      {
        ecamp: ecamp,
        eusuario: eusuario,
      },
      { headers: { 'content-type': 'application/json' } }
    );
    const data = response.data;
    alert(data.msg);
    if (data.status === 'Ok') {
      console.log('Status OK');
    }
  }

  return (
    <>
      {storage ? (
        <>
        <Base_usuario/>

      {/* <!-- BEGIN: Content --> */}
      <div className='app-content content'>
        {/* <!-- Content-wrapper --> */}
        <div className='content-wrapper'>
          <div className='card'>
            <div className='card-body border-bottom'>
              <h2>¡INSCRIBE TU EQUIPO!</h2>
            </div>

            <div>
              {/* <!-- Seccion de Formulario --> */}
              <div className='row'>
                <div className='col-md-12 '>
                  <form
                    action=''
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <h4 className='card-title'>Escoja un Campeonato</h4>
                    <div className='col-md-2 '>
                      <select
                        name='campeonatos'
                        className='form-control'
                        placeholder='Escoger Campeonato'
                        ref={idcamp}
                      >
                        {listar_campeonato?.map((camp, idx) => (
                          <option value={camp._id} key={idx}>
                            {camp.nombrecamp}
                          </option>
                        ))}
                      </select>
                    </div>
                    <br />
                    <div className='row'>
                      <div className='col-lg-4 center-content'>
                        <button
                          className='btn btn-primary'
                          type='submit'
                          onClick={guardar}
                        >
                          Inscribir
                        </button>
                      </div>
                    </div>
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
      ) : <LogIn />
      }
    </>
  );
}
