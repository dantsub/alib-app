import "./App.css";
import { Base } from "./components/Base";
import { Equipoadmin } from "./components/Equipoadmin";
import { Equipodetails } from "./components/Equipodetails";
import { Crearequipo } from "./components/Crearequipo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Gescampeonatos } from "./components/Gescampeonatos";
import { Campeonatodetails } from "./components/Campeonatodetails";
import { ListaUsuarios } from "./components/ListaUsuarios";
import { CrearUsuario } from "./components/CrearUsuario";
import { Partidos } from "./components/Partidos";
import { Posiciones } from "./components/Posiciones";
import { Fechas } from "./components/Fechas";
import Register from "./components/Register";
import { Inscribir } from "./components/Inscribir";
/* import { useState } from "react"; */

function App() {
  /* const [user, setUser] = useState(null); */
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />}></Route>
          <Route path="/equipos" element={<Equipoadmin />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/jugadores" element={<Equipodetails />}></Route>
          <Route path="/crearequipo" element={<Crearequipo />}></Route>
          <Route path="/campeonatos" element={<Gescampeonatos />}></Route>
          <Route path="/campeonatos_eqip" element={<Campeonatodetails />}></Route>
          <Route path="/listausuarios" element={<ListaUsuarios />}></Route>
          <Route path="/crearusuario" element={<CrearUsuario />}></Route>
          <Route path="/partidos" element={<Partidos />}></Route>
          <Route path="/posiciones" element={<Posiciones />}></Route>
          <Route path="/fechas" element={<Fechas />}></Route>
          {<Route path="/inscripcion" element={<Inscribir />}></Route>}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
