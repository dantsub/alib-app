const { Schema, model } = require("mongoose");
const posicioneschema = new Schema({
  equipo: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "equipos",
  },
  puntos: {
    type: "number",
    required: true,
  },
  poscamp: {
    type: Schema.Types.ObjectId,
    ref: "campeonatos", //nombre de la collection a la que te vas a relacionar
    required: true,
  },
});

posicioneschema.set("toObject", { virtuals: true });
posicioneschema.set("toJSON", { virtuals: true });

const posicionmodel = model("posiciones", posicioneschema);
exports.posicionesmodel = posicionmodel;
