import './App.css';
import { Base } from "./components/Base";
import { Equipoadmin } from "./components/Equipoadmin";
import { Equipodetails } from "./components/Equipodetails";
import { Crearequipo } from "./components/Crearequipo";
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Gescampeonatos } from './components/Gescampeonatos';
import { Campeonatodetails } from './components/Campeonatodetails';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Base/>}></Route>
        <Route path="/equipo" element = {<Equipoadmin/>}></Route>
        <Route path="/jugadores" element = {<Equipodetails/>}></Route>
        <Route path="/crearequipo" element = {<Crearequipo/>}></Route>
        <Route path="/campeonatos" element = {<Gescampeonatos/>}></Route>
        <Route path="/campeonatos_eqip" element = {<Campeonatodetails/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;