const {Schema, model} = require('mongoose');
const partidoschema = new Schema({
    estado:{
        type:"string",
        required:true
    },
    encuentro:{
        type:"string",
        required:true
    },
    resultado:{
        type:"string",
        required:true
    },
    fecha:{
        type:"date",
        required:true
   
    },    
    cancha:{
        type:"string",
        required:true
    }
});


partidoschema.virtual("partidos",{
    ref : "partidos", //la collection de datos con las que se relaciona
    localField: "_id", //
    foreignField: "cpartido" 
});

partidoschema.set("toObject", { virtuals : true });
partidoschema.set("toJSON", { virtuals : true})


const partidomodel= model("partidos", partidoschema);
exports.partidosmodel=partidomodel;