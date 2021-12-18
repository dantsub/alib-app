const { Router } = require("express");
const { usuariomodel } = require("../modelos/usuariosmodel");
const usuario_rutas = Router();
var formidable = require("formidable");
var fs = require("fs");
var path = require("path");

usuario_rutas.post("/guardar", function (req, res) {
  const datos = req.body;
  const usu = new usuariomodel(datos);
  usu.save(function (err) {
    if (err) {
      res.send({
        status: "Error",
        msg: "Los usuarios no pudieron ser guardados",
      });
      return false;
    }
    res.send({
      status: "Ok",
      msg: "Los usuarios fueron guardados satisfactoriamente",
    });
  });
});

usuario_rutas.get("/listar", async function (req, res) {
  const usuarios = await usuariosmodel.find().lean();

  console.log(usuarios);
  if (usuarios == null) {
    res
      .status(400)
      .send({ status: "Error", msg: "La base de datos está vacía", usuarios });
  } else res.status(200).send({ status: "Ok", msg: "Usuarios encontrados", usuarios });
});

exports.usuario_rutas = usuario_rutas;
