const { Schema, model } = require("mongoose");
const equiposchema = new Schema({
  logo: {
    type: "string",
    required: true,
  },
  nombre: {
    type: "string",
    required: true,
  },
  fecha: {
    type: "date",
    required: true,
  },
  rep: {
    type: "string",
    required: true,
  },
  ecamp: {
    type: Schema.Types.ObjectId,
    ref: "campeonatos", //nombre de la collection a la que te vas a relacionar
  },
  eusuario: {
    type: Schema.Types.ObjectId,
    ref: "usuarios", //nombre de la collection a la que te vas a relacionar
    required: true,
  },
  estadocamp: {
    type: Schema.Types.ObjectId,
    ref: "campeonatos", //nombre de la collection a la que te vas a relacionar
  },
});

equiposchema.virtual("integrantesequipo", {
  ref: "players", //la collection de datos con las que se relaciona
  localField: "_id", //
  foreignField: "jequipo", //el nombre del campo en jugadormodel
});

equiposchema.virtual("equipolocal", {
  ref: "partidos", //la collection de datos con las que se relaciona
  localField: "_id", //
  foreignField: "local", //el nombre del campo en jugadormodel
});

equiposchema.virtual("equipovisitante", {
  ref: "partidos", //la collection de datos con las que se relaciona
  localField: "_id", //
  foreignField: "visitante", //el nombre del campo en jugadormodel
});

equiposchema.virtual("posicionequipo", {
  ref: "posiciones", //la collection de datos con las que se relaciona
  localField: "_id", //
  foreignField: "equipo", //el nombre del campo en jugadormodel
});

equiposchema.set("toObject", { virtuals: true });
equiposchema.set("toJSON", { virtuals: true });

const equipomodel = model("equipos", equiposchema);
exports.equipomodel = equipomodel;
