const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config();

const { jugador_rutas } = require("./rutas/jugador_rutas");
const { campeonato_rutas } = require("./rutas/campeonato_rutas");
const { equipo_rutas } = require("./rutas/equipo_rutas");
const { usuario_rutas } = require("./rutas/usuario_rutas");
const { autenticacion } = require("./rutas/autenticacion");
const { fecha_rutas } = require("./rutas/fecha_rutas");
const { partido_rutas } = require("./rutas/partido_rutas");
const { posicion_rutas } = require("./rutas/posicion_rutas");

app.use("/players", jugador_rutas);
app.use("/campeonatos", campeonato_rutas);
app.use("/equipos", equipo_rutas);
app.use("/usuarios", usuario_rutas);
app.use("/autenticacion", autenticacion);
app.use("/fechas", fecha_rutas);
app.use("/partidos", partido_rutas);
app.use("/posiciones", posicion_rutas);

mongoose
  .connect("mongodb+srv://alibapp:Mintic2021@cluster0.3bbj8.mongodb.net/alibdb?retryWrites=true&w=majority")
  .then((res) => console.log(res, "Conectado a la base de datos"))
  .catch((err) => console.log(err));

app.listen(8081, function () {
  console.log("servidor por el puerto 8081");
});
