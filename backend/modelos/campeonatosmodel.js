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
});

campeonatoschema.virtual("fechascampeonatos",{
    ref : "fechas", //la collection de datos con las que se relaciona
    localField: "_id", //
    foreignField: "ecamp" //el nombre del campo en jugadormodel
});


campeonatoschema.virtual("integrantescampeonato",{
    ref : "equipos", //la collection de datos con las que se relaciona
    localField: "_id", //
    foreignField: "ecamp" //el nombre del campo en jugadormodel
});

campeonatoschema.set("toObject", { virtuals : true });
campeonatoschema.set("toJSON", { virtuals : true})


const campeonatomodel= model("campeonatos", campeonatoschema);
exports.campeonatomodel=campeonatomodel;