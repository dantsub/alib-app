const {Schema, model} = require('mongoose');
const fechaschema = new Schema({
    jornada:{
        type:"string",
        required:true
    },
    fecha_ini:{
        type:"date",
        required:true
    },
    fecha_fin:{
        type:"date",
        required:true
    },

    ecamp: {
        type: Schema.Types.ObjectId,
        ref: 'campeonatos', //nombre de la collection a la que te vas a relacionar 
     }
});


const fechasmodel= model("fechas", fechaschema);
exports.fechasmodel=fechasmodel;