import logo from '../asset/logoAlib.jpg';
import { Link } from 'react-router-dom';
import LogIn from './LogIn';
import { useEffect, useState } from 'react';
import { Base_usuario } from './Base_usuario';
import { Base } from './Base';


export function Inicio() {
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
    function base(rol) {
        if (rol == "1") {
            return (<Base />)
        }
        else {
            return (<Base_usuario />)
        }
    }
    
    return (
        <>
            {base(user.idrol)}
        </>
    );
                    
}