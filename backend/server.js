const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config();

const {jugador_rutas} = require("./rutas/jugador_rutas")
const {campeonato_rutas} = require("./rutas/campeonato_rutas")
const {equipo_rutas} = require("./rutas/equipo_rutas")

app.use("/players",jugador_rutas);
app.use("/campeonatos", campeonato_rutas);
app.use("/equipos", equipo_rutas);

mongoose.connect(process.env.SERVER_DB_URL)
.then(res=> console.log(res,"Conectado a la base de datos"))
.catch(err=> console.log(err))


app.listen(8081, function(){
    console.log("servidor por el puerto 8081")
});