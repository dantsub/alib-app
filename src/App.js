import "./App.css";
import { Base } from "./components/Base";
import { Equipoadmin } from "./components/Equipoadmin";
import { Equipodetails } from "./components/Equipodetails";
import { Crearequipo } from "./components/Crearequipo";
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Gescampeonatos } from "./components/Gescampeonatos";
import { Campeonatodetails } from "./components/Campeonatodetails";
import { ListaUsuarios } from "./components/ListaUsuarios";
import { CrearUsuario } from "./components/CrearUsuario";
import { Partidos } from "./components/Partidos";
import { Posiciones } from "./components/Posiciones";
import { Fechas } from "./components/Fechas";

function App() {
  return (
<<<<<<< HEAD
    // <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}></Route>
        <Route path="/equipo" element={<Equipoadmin />}></Route>
        <Route path="/jugadores" element={<Equipodetails />}></Route>
        <Route path="/crearequipo" element={<Crearequipo />}></Route>
        <Route path="/campeonatos" element={<Gescampeonatos />}></Route>
        <Route path="/campeonatos_eqip" element={<Campeonatodetails />}></Route>
        <Route path="/listausuarios" element={<ListaUsuarios />}></Route>
        <Route path="/crearusuario" element={<CrearUsuario />}></Route>
      </Routes>
    </BrowserRouter>
    // </>
=======
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />}></Route>
          <Route path="/equipos" element={<Equipoadmin />}></Route>
          <Route path="/jugadores" element={<Equipodetails />}></Route>
          <Route path="/crearequipo" element={<Crearequipo />}></Route>
          <Route path="/campeonatos" element={<Gescampeonatos />}></Route>
          <Route path="/campeonatos_eqip" element={<Campeonatodetails />}></Route>
          <Route path="/listausuarios" element={<ListaUsuarios />}></Route>
          <Route path="/crearusuario" element={<CrearUsuario />}></Route>
          <Route path="/partidos" element={<Partidos />}></Route>
          <Route path="/posiciones" element={<Posiciones />}></Route>
          <Route path="/fechas" element={<Fechas />}></Route>
        </Routes>
      </BrowserRouter>
    </>
>>>>>>> 26ae7c24fe379cae3790e45a8f69b0ea422d2eb2
  );
}

export default App;
