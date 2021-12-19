const { Router } = require("express");
const { usuariomodel } = require("../modelos/usuariosmodel");
const usuario_rutas = Router();

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

usuario_rutas.post("/editar", async function (req, res) {
  const datos = req.body;
  const doc = datos.doc;
  const nom = datos.nom;
  const email = datos.email;
  const idrol = datos.idrol;
  const idestado = datos.idestado;

  const filter = { doc: doc };
  const updateuser = {
    $set: {
      nom: nom,
      email: email,
      idrol: idrol,
      idestado: idestado,
    },
  };
  usuariomodel.updateOne(filter, updateuser, function (err) {
    if (err) {
      res.send({
        status: "Error",
        msg: "El usuario NO fue encontrado. Error",
      });
      return false;
    }
    res.send({
      status: "Ok",
      msg: "Los usuarios fueron guardados satisfactoriamente",
    });
  });
});

exports.usuario_rutas = usuario_rutas;
