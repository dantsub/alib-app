const { Router } = require("express");
const campeonato_rutas = Router();
const {campeonatomodel} = require("../modelos/campeonatosmodel");
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');



// campeonato_rutas.post("/guardarcamp", function(req,res){
//     const datos = req.body;
//     const camp = new campeonatomodel(datos);
//     camp.save(function(err){
//         if(err){
//             res.send({status:"Error",msg:"Los campeonatos no pudieron ser guardados"})
//             return false;
//         }
//         res.send({status:"Ok",msg:"Los campeonatos fueron guardados satisfactoriamente"})
//     })
// });


campeonato_rutas.post("/guardarcamp", function(req,res){
    const form = new formidable.IncomingForm();
    const uploadFolder = path.join(__dirname, "assets");
    // Basic Configuration
    form.uploaddir = uploadFolder;

    console.log(form);
    form.parse(req, function(err, fields, files) {
        if (err) {
          // Check for and handle any errors here.
          console.error(err.message);
          return;
        }
        console.log(files);
        console.log(fields);
        const nombrecamp = fields.nombrecamp;
        const fecinicamp = fields.fecinicamp;
        const fecfincamp = fields.fecfincamp;
        const orgcamp = fields.orgcamp;
        const lugarcamp = fields.lugarcamp;
        const numequipcamp = fields.numequipcamp;
        const premioscamp = fields.premioscamp;
        const estadocamp = fields.estadocamp;
        const file = files.logocamp;
        const newruta= path.join(uploadFolder, nombrecamp);
        fs.renameSync(file.filepath, newruta);
        const logocamp="http://localhost:3001/"+nombrecamp;
        const dato= { nombrecamp: nombrecamp, fecinicamp: fecinicamp, fecfincamp: fecfincamp, orgcamp:orgcamp, lugarcamp:lugarcamp, numequipcamp:numequipcamp, premioscamp:premioscamp,  logocamp:logocamp, estadocamp:estadocamp};
        const camp = new campeonatomodel(dato);
        camp.save(function(err){
        if(err){
            console.log(err);
            res.send({status:"Error",msg:"Los campeonatos no pudieron ser guardados"})
            return false;
        }
        res.send({status:"Ok",msg:"Los campeonatos fueron guardados satisfactoriamente"})

    })
        
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


campeonato_rutas.post("/eliminarcamp", async function(req,res){
    const {nombrecamp} = req.body;
    console.log(nombrecamp);
    //buscar campeonato
    campeonatomodel.deleteOne({nombrecamp},function(error,camp){
        console.log(camp);
        if (error){
            res.send({status:"Error",msg:"El campeonato NO fue encontrado. Error"});
            return false;
        }
        else{
            if (camp){
                res.send({status:"Ok",msg:"El campeonato fue eliminado satisfactoriamente", dato:camp})
            }
            else{
                res.send({status:"Error",msg:"El campeonato No pudo ser eliminado"})
            }
        }
    })
})


campeonato_rutas.post("/editarcamp", function(req,res){
    const datos = req.body;
    const nombrecamp = datos.nombrecamp;
    const fecinicamp = datos.fecinicamp;
    const fecfincamp = datos.fecfincamp;
    const orgcamp = datos.orgcamp;
    const lugarcamp = datos.lugarcamp;
    const numequipcamp = datos.numequipcamp;
    const premioscamp =  datos.premioscamp;
    const logocamp = datos.logocamp;

    const filter = { nombrecamp: nombrecamp };
    const updateCamp = {
        $set: {
          fecinicamp : fecinicamp,
          fecfincamp : fecfincamp,
          orgcamp : orgcamp,
          lugarcamp : lugarcamp,
          numequipcamp : numequipcamp,
          premioscamp : premioscamp,
          logocamp : logocamp
        },
    };
    
    campeonatomodel.updateOne(filter, updateCamp, function(error,camp){
        console.log(camp);
        if (error){
            res.send({status:"Error",msg:"El campeonato NO fue encontrado. Error"});
            return false;
        }
        else{
            if (camp){
                res.send({status:"Ok",msg:"El campeonato fue editado satisfactoriamente", dato:camp})
            }
            else{
                res.send({status:"Error",msg:"El campeonato No pudo ser editado, porque no fue encontrado"})
            }
        }
    })
});

exports.campeonato_rutas=campeonato_rutas;
