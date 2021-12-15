const { Router } = require("express") ;
const campeonato_rutas = Router();
const {campeonatomodel} = require("../modelos/campeonatosmodel");

campeonato_rutas.post("/guardarcamp", function(req,res){
    const datos = req.body;
    const camp = new campeonatomodel(datos);
    camp.save(function(err){
        if(err){
            res.send({status:"Error",msg:"Los campeonatos no pudieron ser guardados"})
            return false;
        }
        res.send({status:"Ok",msg:"Los campeonatos fueron guardados satisfactoriamente"})
    })
});

campeonato_rutas.get("/listarcamp", async function(req,res){
    const campeonatos = await campeonatomodel.find().lean();

    console.log(campeonatos);
        if (campeonatos == null){
            res.status(400).send({status:"Error", msg:"La base de datos está vacía", campeonatos});
        }else
            res.status(200).send({status:"Ok", msg:"Campeonatos encontrados", campeonatos});
})
exports.campeonato_rutas=campeonato_rutas;