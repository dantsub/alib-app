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
    }
});


fechaschema.virtual("fechas",{
    ref : "fechas", //la collection de datos con las que se relaciona
    localField: "_id", //
    foreignField: "cfecha" 
});

fechaschema.set("toObject", { virtuals : true });
fechaschema.set("toJSON", { virtuals : true})


const fechasmodel= model("fechas", fechaschema);
exports.fechasmodel=fechasmodel;