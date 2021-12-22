const { Router } = require("express");
const posicion_rutas = Router();
const { posicionesmodel } = require("../modelos/posicionesmodel");

posicion_rutas.post("/guardar", function (req, res) {
  const datos = req.body;
  const camp = new posicionesmodel(datos);
  camp.save(function (err) {
    if (err) {
      res.send({
        status: "Error",
        msg: "Las posiciones no pudieron ser guardados",
      });
      return false;
    }
    res.send({
      status: "Ok",
      msg: "Las posiciones fueron guardadas satisfactoriamente",
    });
  });
});

posicion_rutas.get("/listarposiciones", async function (req, res) {
  const posiciones = await posicionesmodel.find().lean();

  console.log(posiciones);
  if (posiciones == null) {
    res.status(400).send({
      status: "Error",
      msg: "La base de datos está vacía",
      posiciones,
    });
  } else res.status(200).send({ status: "Ok", msg: "Posiciones encontradas", posiciones });
});

posicion_rutas.post("/actualizar", async function (req, res) {
  let { equipo, puntos } = req.body;
  const posicion = await posicionesmodel.findOne({ equipo }).lean();

  if (posicion == null) {
    res.status(400).send({ status: "Error", msg: "La posicion no existe" });
  } else {
    puntos += posicion.puntos;
    posicionesmodel.updateOne({ equipo }, { puntos }, function (err) {
      if (err) {
        res.send({
          status: "Error",
          msg: "La posicion no pudo ser actualizada",
        });
        return false;
      }
      res.send({ status: "Ok", msg: "La posicion fue actualizada" });
    });
  }
});

posicion_rutas.post("/eliminarposicion", async function (req, res) {
  const { nombre } = req.body;
  console.log(nombre);

  posicionmodel.deleteOne({ nombre }, function (error, camp) {
    console.log(camp);
    if (error) {
      res.send({
        status: "Error",
        msg: "La Posición NO fue encontrada. Error",
      });
      return false;
    } else {
      if (camp) {
        res.send({
          status: "Ok",
          msg: "La Posición fue eliminada satisfactoriamente",
          dato: camp,
        });
      } else {
        res.send({ status: "Error", msg: "La Posición No pudo ser eliminada" });
      }
    }
  });
});

posicion_rutas.post("/editarposicion", function (req, res) {
  const datos = req.body;
  const nombre = datos.nombre;
  const PG = datos.PG;
  const PP = datos.PP;
  const PE = datos.PE;
  const GF = datos.GF;
  const GC = datos.GC;
  const POS = datos.POS;

  const filter = { nombre: nombre };
  const updatePosicion = {
    $set: {
      nombre: nombre,
      PG: PG,
      PP: PP,
      PE: PE,
      GF: GF,
      GC: GC,
      POS: POS,
    },
  };

  posicionmodel.updateOne(filter, updatePosicion, function (error, jug) {
    console.log(camp);
    if (error) {
      res.send({
        status: "Error",
        msg: "La Posicion NO fue encontrada. Error",
      });
      return false;
    } else {
      if (camp) {
        res.send({
          status: "Ok",
          msg: "La Posicion fue editads satisfactoriamente",
          dato: camp,
        });
      } else {
        res.send({
          status: "Error",
          msg: "La Posicion No pudo ser editada, porque no fue encontrada",
        });
      }
    }
  });
});

exports.posicion_rutas = posicion_rutas;
