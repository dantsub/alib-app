const { Router } = require("express") ;
const jugador_rutas = Router();
const { jugadormodel } = require("../modelos/jugadoresmodels");

jugador_rutas.post("/guardar", function(req,res){
    const datos = req.body;
    const jug = new jugadormodel(datos);
    jug.save(function(err){
        if(err){
            res.send({status:"Error",msg:"Los jugadores no pudieron ser guardados"})
            return false;
        }
        res.send({status:"Ok",msg:"Los jugadores fueron guardados satisfactoriamente"})

    })
});

jugador_rutas.get("/listar", async function(req,res){
    const jugadores = await jugadormodel.find().lean();

    console.log(jugadores);
    // if (error){
    //     res.send({status:"Error",msg:"Error al buscar en base de datos"});
    //     return false;
    // }
    // else{
        if (jugadores == null){
            res.status(400).send({status:"Error", msg:"La base de datos está vacía", jugadores});
        
        }else
            res.status(200).send({status:"Ok", msg:"Jugadores encontrados", jugadores});
           
    // }
})


exports.jugador_rutas=jugador_rutas;