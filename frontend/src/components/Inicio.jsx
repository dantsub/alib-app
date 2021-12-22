import LogIn from './LogIn';
import React, { useEffect, useState } from 'react';
import { BaseUsuario } from './BaseUsuario';
import { Base } from './Base';

export function Inicio() {
  const storage = localStorage.getItem('user');
  const [user, setUser] = useState(JSON.parse(storage));

  useEffect(() => {
    setUser(JSON.parse(storage));
  }, [storage]);

  function base(rol) {
    if (rol === '1') {
      return <Base />;
    } else {
      return <BaseUsuario />;
    }
  }

  return <>{storage ? <>{base(user.idrol)}</> : <LogIn />}</>;
}
