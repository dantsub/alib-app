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
    }
})
const jugadormodel= model("players", jugadorschema);
exports.jugadormodel=jugadormodel;
