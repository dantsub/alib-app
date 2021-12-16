const { Router } = require("express") ;
const { equipomodel } = require("../modelos/equipomodel");
const equipo_rutas = Router();
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');

equipo_rutas.post("/guardar", function(req,res){
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
        const nombre= fields.nombre;
        const fecha = Date.now();
        const rep= "Lesly Campo";
        const file = files.logo;
        const newruta= path.join(uploadFolder, nombre);
        fs.renameSync(file.filepath, newruta);
        const logo="/"+nombre;
        const dato= { logo: logo, nombre: nombre, fecha: fecha, rep: rep };
        const eq = new equipomodel(dato);
        eq.save(function(err){
        if(err){
            res.send({status:"Error",msg:"El equipo no pudoser guardados"})
            return false;
        }
            res.send({status:"Ok",msg:"El equipo fue guardado satisfactoriamente"})

    })
        
    })
    res.send({status:"Prueba",msg:"Prueba"})
    // const datos = req.body;
    // const fecha = Date.now();

    // const equ = new equipomodel (datos.nombre, fecha);
    // equ.save(function(err){
    //     if(err){
    //         res.send({status:"Error",msg:"El equipo no pudo ser guardados"})
    //         return false;
    //     }
    //         res.send({status:"Ok",msg:"El equipo fue guardado satisfactoriamente"})

    // })
});

equipo_rutas.get("/listar", async function(req,res){
    const equipos = await equipomodel.find().lean();

    console.log(equipos);
    // if (error){
    //     res.send({status:"Error",msg:"Error al buscar en base de datos"});
    //     return false;
    // }
    // else{
        if (equipos == null){
            res.status(400).send({status:"Error", msg:"La base de datos está vacía", equipos});
        
        }else
            res.status(200).send({status:"Ok", msg:"Jugadores encontrados", equipos});
           
    // }
})


exports.equipo_rutas=equipo_rutas;