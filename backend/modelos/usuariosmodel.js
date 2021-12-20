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

usuarioschema.virtual("relacionequsu",{
  ref : "usuarios", //la collection de datos con las que se relaciona
  localField: "_id", //
  foreignField: "eusuario" //el nombre del campo en jugadormodel
});

usuarioschema.set("toObject", { virtuals : true });
usuarioschema.set("toJSON", { virtuals : true})

const usuariomodel = model("usuarios", usuarioschema);
exports.usuariomodel = usuariomodel;
