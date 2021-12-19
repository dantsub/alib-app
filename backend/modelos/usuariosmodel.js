const { Schema, model } = require("mongoose");
const { genSalt, hash } = require('bcrypt');
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

usuarioschema.pre('save', async function(next){
  const salt = await genSalt(10)
  this.pass = await hash(this.pass, salt);
  return next();
});

const usuariomodel = model("usuarios", usuarioschema);
exports.usuariomodel = usuariomodel;
