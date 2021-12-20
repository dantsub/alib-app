import { Base } from './Base';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { consumircampeonatos } from '../API/Alip_Api';


export function Inscribir(){
  // Con esto cambiamos el título a la página que por default esta en Alib-app
  document.title = 'Inscribir Equipo';
 

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


  function guardar(event) {
    
  }
  return (
    <>
      <Base />

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
                <div className='col-md-12 col-lg-4 mx-auto'>
                  <form
                    action=''
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                  <h4 class='card-title'>Escoja un Campeonato</h4>
                <div className='col-md-2 '>
                
 
                  <select  name='campeonatos' class='form-control' placeholder='Escoger Campeonato'>
                  {listar_campeonato?.map((camp,idx) =>(
                    <option value={camp._id} key={idx} selected>
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
  );
}
