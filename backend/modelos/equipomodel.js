const {Schema, model} = require('mongoose');
const equiposchema = new Schema({
    logo:{
        type:"string",
        required:true
    },
    nombre:{
        type:"string",
        required:true
    },
    fecha:{
        type:"date",
        required:true
    },
    rep:{
        type:"string",
        required:true
    }
})
const equipomodel= model("equipos", equiposchema);
exports.equipomodel=equipomodel;