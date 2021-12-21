const {Schema, model} = require('mongoose');
const posicioneschema = new Schema({
    nombre:{
        type:"string",
        required:true
    },
    PG:{
        type:"number",
        required:true
    },
    PP:{
        type:"number",
        required:true
    },
    PE:{
        type:"number",
        required:true
    },    
    GF:{
        type:"number",
        required:true
    },    
    GC:{
        type:"number",
        required:true
    },

    DIF:{
        type:"number",
        required:true
    },

    PUNTOS:{
        type:"number",
        required:true
    }
});


posicioneschema.virtual("posiciones",{
    ref : "posiciones", //la collection de datos con las que se relaciona
    localField: "_id", //
    foreignField: "cposicion" 
});

posicioneschema.set("toObject", { virtuals : true });
posicioneschema.set("toJSON", { virtuals : true})


const posicionmodel= model("posiciones", posicioneschema);
exports.posicionesmodel=posicionmodel;