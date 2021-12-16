const {Schema, model} = require('mongoose');
const campeonatoschema = new Schema({
    nombrecamp:{
        type:"string",
        required:true
    },
    fecinicamp:{
        type:"date",
        required:true
    },
    fecfincamp:{
        type:"date",
        required:true
    },
    orgcamp:{
        type:"string",
        required:true
    },    
    lugarcamp:{
        type:"string",
        required:true
    },    
    numequipcamp:{
        type:"number",
        required:true
    },
    premioscamp:{
        type:"string",
        required:true
    },
    logocamp:{
        type:"string"
    },
    estadocamp:{
        type:"string"
    }         
})
const campeonatomodel= model("campeonatos", campeonatoschema);
exports.campeonatomodel=campeonatomodel;