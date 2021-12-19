const { Router } = require("express");
const { usuariomodel } = require("../modelos/usuariosmodel");
const { compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");

const autenticacion = Router();

autenticacion.post("/login", async function (req, res) {
  try {
    const { documento, clave } = req.body;
    const usuario = await usuariomodel.findOne({ documento });
    if (usuario == null) {
      res.status(401).send({ estado: "Error", msg: "Usuario o clave incorrectos" });
    }
    const passOK = await compare(clave, usuario.pass);
    if (passOK) {
      const token = sign({ usuario: usuario.doc, password: usuario.pass }, process.env.JWT_SECRET_KEY);
      res.status(200).send({ estado: "Ok", msg: "Usuario autenticado", usuario, token });
    } else {
      res.status(401).send({ estado: "Error", msg: "Usuario o clave incorrectos" });
    }
  } catch (error) {
    console.log(error);
  }
});

autenticacion.post("/registrar", async function (req, res) {
  const datos = req.body;
  const usu = new usuariomodel(datos);
  usu.save(function (err) {
    if (err) {
      res.status(500).send({
        estado: "Error",
        msg: "Los usuario no pudo ser guardado",
      });
      return false;
    }
    res.status(200).send({
      estado: "Ok",
      msg: "Los usuario fue guardado satisfactoriamente",
    });
  });
});

exports.autenticacion = autenticacion;
