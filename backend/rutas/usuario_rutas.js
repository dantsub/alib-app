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

  // usuario_rutas.get("/listar", async function (req, res) {
  //   const usuarios = await usuariomodel.find().lean();
  //   console.log(usuarios);
  //   if (usuarios == null) {
  //     res.status(400).send({
  //       status: "Error",
  //       msg: "La base de datos está vacía",
  //       usuarios,
  //     });
  //   } else res.status(200).send({ status: "Ok", msg: "Usuarios encontrados", usuarios });
  // });
  //get users from mongodb collecion "usuarios"
  usuario_rutas.get("/listar", async function (req, res) {
    const datos = req.body;
    const usuarios = await usuariomodel.find().lean();
    console.log(usuarios);
    if (usuarios == null) {
      res.status(400).send({
        status: "Error",
        msg: "La base de datos está vacía",
        usuarios,
      });
    } else res.status(200).send({ status: "Ok", msg: "Usuarios encontrados", usuarios });
  });

  // const form = new formidable.IncomingForm();
  // const uploadFolder = path.join(__dirname, "assets");
  // // Basic Configuration
  // form.uploaddir = uploadFolder;

  // console.log(form);
  // form.parse(req, function (err, fields, files) {
  //   if (err) {
  //     // Check for and handle any errors here.

  //     console.error(err.message);
  //     return;
  //   }
  //   console.log(files);
  //   console.log(fields);
  //   const nom = fields.nom;
  //   const doc = fields.doc;
  //   const email = fields.email;
  //   const pass = fields.pass;
  //   const idrol = fields.idrol;
  //   const idestado = fields.idestado;
  //   const dato = {
  //     nom: nom,
  //     doc: doc,
  //     email: email,
  //     pass: pass,
  //     idrol: idrol,
  //     idestado: idestado,
  //   };
  //   const us = new usuariosmodel(dato);
  //   us.save(function (err) {
  //     if (err) {
  //       res.send({ status: "Error", msg: "El usuario no pudo ser guardados" });
  //       return false;
  //     }
  //     res.send({
  //       status: "Ok",
  //       msg: "El usuario fue guardado satisfactoriamente",
  //     });
  //   });
  // });
});

// usuario_rutas.get("/listar", async function (req, res) {
//   const usuarios = await usuariosmodel.find().lean();

//   console.log(usuarios);
//   if (usuarios == null) {
//     res
//       .status(400)
//       .send({ status: "Error", msg: "La base de datos está vacía", usuarios });
//   } else res.status(200).send({ status: "Ok", msg: "Usuarios encontrados", usuarios });
// });
exports.usuario_rutas = usuario_rutas;
