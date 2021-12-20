const { Router } = require("express");
const partido_rutas = Router();
const {partidosmodel} = require("../modelos/partidosmodel");

partido_rutas.post("/partidos", function(req,res){
    const datos = req.body;
    const camp = new partidosmodel(datos);
    camp.save(function(err){
        if(err){
            res.send({status:"Error",msg:"Los partidos no pudieron ser guardados"})
            return false;
        }
        res.send({status:"Ok",msg:"Los partidos fueron guardados satisfactoriamente"})
    })
});

partido_rutas.get("/listarpartidos", async function(req,res){
    const partidos = await partidosmodel.find().lean();

    console.log(partidos);
        if (partidos == null){
            res.status(400).send({status:"Error", msg:"La base de datos está vacía", partidos});
        }else
            res.status(200).send({status:"Ok", msg:"Partidos encontrados", partidos});
})


partido_rutas.post("/eliminarpartido", async function(req,res){
    const {encuentro} = req.body;
    console.log(encuentro);
    
    partidomodel.deleteOne({encuentro},function(error,camp){
        console.log(camp);
        if (error){
            res.send({status:"Error",msg:"El Partido NO fue encontrado. Error"});
            return false;
        }
        else{
            if (camp){
                res.send({status:"Ok",msg:"El partido fue eliminado satisfactoriamente", dato:camp})
            }
            else{
                res.send({status:"Error",msg:"Partido No pudo ser eliminado"})
            }
        }
    })
})


partido_rutas.post("/editarpartido", function(req,res){
    const datos = req.body;
    const estado = datos.estado;
    const encuentro = datos.encuentro;
    const resultado = datos.resultado;
    const fecha = datos.fecha;
    const cancha = datos.cancha; 

    const filter = { encuentro: encuentro };
    const updatePartido = {
        $set: {
            estado : estado,
            encuentro : encuentro,
            resultado : resultado,
            fecha : fecha,
            cancha : cancha,
         
        },
    };
    
    partidomodel.updateOne(filter, updatePartido, function(error,jug){
        console.log(camp);
        if (error){
            res.send({status:"Error",msg:"El partido NO fue encontrado. Error"});
            return false;
        }
        else{
            if (camp){
                res.send({status:"Ok",msg:"El partido fue editado satisfactoriamente", dato:camp})
            }
            else{
                res.send({status:"Error",msg:"El partido No pudo ser editado, porque no fue encontrado"})
            }
        }
    })
});

exports.partido_rutas=partido_rutas;
