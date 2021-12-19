const {Schema, model} = require('mongoose');
const jugadorschema = new Schema({
    nombre:{
        type:"string",
        required:true
    },
    documento:{
        type:"number",
        unique:true,
        required:true
    },
    fnacimiento:{
        type:"date",
        required:true
    },
    jequipo: {
        type: Schema.Types.ObjectId,
        ref: 'equipos', //nombre de la collection a la que te vas a relacionar 
        required: true
     }
})
const jugadormodel= model("players", jugadorschema);
exports.jugadormodel=jugadormodel;