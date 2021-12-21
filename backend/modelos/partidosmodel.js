const { Schema, model } = require("mongoose");
const partidoschema = new Schema({
  estado: {
    type: "string",
    required: true,
  },
  local: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "equipos",
  },
  visitante: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "equipos",
  },
  rlocal: {
    type: "number",
    required: true,
  },
  rvisitante: {
    type: "number",
    required: true,
  },
  fecha: {
    type: "date",
    required: true,
  },
});

partidoschema.virtual("partidos", {
  ref: "partidos", //la collection de datos con las que se relaciona
  localField: "_id", //
  foreignField: "cpartido",
});

partidoschema.set("toObject", { virtuals: true });
partidoschema.set("toJSON", { virtuals: true });

const partidomodel = model("partidos", partidoschema);
exports.partidosmodel = partidomodel;
