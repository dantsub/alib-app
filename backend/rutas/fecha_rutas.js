const { Router } = require("express");
const fecha_rutas = Router();
const {fechasmodel} = require("../modelos/fechasmodel");

fecha_rutas.post("/fechas", function(req,res){
    const datos = req.body;
    const camp = new fechasmodel(datos);
    camp.save(function(err){
        if(err){
            res.send({status:"Error",msg:"Las fechas no pudieron ser guardadas"})
            return false;
        }
        res.send({status:"Ok",msg:"Las fechas fueron guardadas satisfactoriamente"})
    })
});

fecha_rutas.get("/listarfechas", async function(req,res){
    const fechas = await fechasmodel.find().lean();

    console.log(fechas);
        if (fechas == null){
            res.status(400).send({status:"Error", msg:"La base de datos está vacía", fechas});
        }else
            res.status(200).send({status:"Ok", msg:"Fechas encontradas", fechas});
})


fecha_rutas.post("/eliminarfechas", async function(req,res){
    const {jornada} = req.body;
    console.log(jornada);
    
    fechasmodel.deleteOne({jornada},function(error,camp){
        console.log(camp);
        if (error){
            res.send({status:"Error",msg:"La fecha NO fue encontrada. Error"});
            return false;
        }
        else{
            if (camp){
                res.send({status:"Ok",msg:"La fecha fue eliminada satisfactoriamente", dato:camp})
            }
            else{
                res.send({status:"Error",msg:"La fecha No pudo ser eliminada"})
            }
        }
    })
})


fecha_rutas.post("/editarfechas", function(req,res){
    const datos = req.body;
    const jornada = datos.jornada;
    const fecha_ini = datos.fecha_ini;
    const fecha_fin = datos.fecha_fin;
    

    const filter = { nombre : nombre };
    const updateFecha = {
        $set: {
            jornada : jornada,
            fecha_ini : fecha_ini,
            fecha_fin : fecha_fin,         
        },
    };
    
    fechasmodel.updateOne(filter, updateFecha, function(error,jug){
        console.log(camp);
        if (error){
            res.send({status:"Error",msg:"La Fecha NO fue encontrada. Error"});
            return false;
        }
        else{
            if (camp){
                res.send({status:"Ok",msg:"La Fecha fue editads satisfactoriamente", dato:camp})
            }
            else{
                res.send({status:"Error",msg:"La Fecha No pudo ser editada, porque no fue encontrada"})
            }
        }
    })
});

exports.fecha_rutas=fecha_rutas;
