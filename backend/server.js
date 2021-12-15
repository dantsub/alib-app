const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const {jugador_rutas} = require("./rutas/jugador_rutas")


app.use("/players",jugador_rutas);

mongoose.connect("mongodb://localhost:27017/alibdb")
.then(res=> console.log(res,"Conectado a la base de datos"))
.catch(err=> console.log(err))


app.listen(8081, function(){
    console.log("servidor por el puerto 8081")
});