const { Schema, model } = require("mongoose");
const usuarioschema = new Schema({
  doc: {
    type: "string",
    required: true,
  },
  nom: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  pass: {
    type: "string",
    required: true,
  },
  idrol: {
    type: "string",
    required: true,
  },
  idestado: {
    type: "string",
    required: true,
  },
});
const usuariomodel = model("usuarios", usuarioschema);
exports.usuariomodel = usuariomodel;
