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
        // console.log(files);
        // console.log(fields);
        const nombre= fields.nombre;
        const eusuario = fields.eusuario;
        const rep = "Jone Doe";
        const fecha = Date.now();
        const file = files.logo;
        const newruta= path.join(uploadFolder, nombre);
        fs.renameSync(file.filepath, newruta);
        const logo="http://localhost:3001/"+nombre;
        const dato= { logo: logo, nombre: nombre, fecha: fecha, rep: rep, eusuario:eusuario  };
        const eq = new equipomodel(dato);
        eq.save(function(err){
        if(err){
            res.send({status:"Error",msg:"El equipo no pudo ser guardados"})
            return false;
        }
            res.send({status:"Ok",msg:"El equipo fue guardado satisfactoriamente"})

    })
        
    })
   
});

equipo_rutas.get("/listar", async function(req,res){
    // const equipos = await equipomodel.find();
        const equipos = await equipomodel.find().populate({
            path:"integrantesequipo",
            select: "nombre documento fnacimiento" 
        });
    console.log(equipos);

        if (equipos == null){
            res.status(400).send({status:"Error", msg:"La base de datos está vacía", equipos});
        
        }else
            res.status(200).send({status:"Ok", msg:"Jugadores encontrados", equipos});
           
    // }
})


equipo_rutas.post("/eliminar", async function(req,res){
    const {nombre} = req.body;

    //eliminar jugador
    equipomodel.deleteOne({nombre},function(error,equ){
        console.log(equ);
        if (error){
            res.send({status:"Error",msg:"El equipo NO fue encontrado por Error"});
            return false;
        }
        else{
        if (equ){
            res.send({status:"Ok",msg:"El equipo fue eliminado satisfactoriamente", dato:equ})
        }
        else{
            res.send({status:"Error",msg:"El equipo No pudo ser eliminado"})
        }
    }

    })
})


equipo_rutas.post("/inscribir", function(req,res){
    const datos = req.body;
    const eusuario= datos.eusuario;
    const ecamp = datos.ecamp;
    const filter = { eusuario: eusuario };
    const updateDoc = {
        $set: {
          ecamp: ecamp
        },
      };

    equipomodel.updateOne(filter, updateDoc, function(error,eq){
        console.log(eq);
        if (error){
            res.send({status:"Error",msg:"El equipo NO fue inscrito por Error"});
            return false;
        }
        else{
        if (eq){
            res.send({status:"Ok",msg:"El equipo fue inscrito satisfactoriamente", dato:eq})
        }
        else{
            res.send({status:"Error",msg:"El equipo No pudo ser inscrito, porque no fue encontrado"})
        }
    }

    })
});



equipo_rutas.post("/aprobarequip", function(req,res){
    const datos = req.body;
    const eusuario= datos.eusuario;
    const estadocamp = datos.estadocamp;
    const filter = { eusuario: eusuario };
    const updateDoc = {
        $set: {
            estadocamp: estadocamp
        },
      };
    equipomodel.updateOne(filter, updateDoc, function(error,eq){
        console.log(eq);
        if (error){
            res.send({status:"Error",msg:"El equipo NO fue aprobado por Error"});
            return false;
        }
        else{
        if (eq){
            res.send({status:"Ok",msg:"El equipo fue aprobado satisfactoriamente", dato:eq})
        }
        else{
            res.send({status:"Error",msg:"El equipo No pudo ser aprobado, porque no fue encontrado"})
        }
    }

    })
});



exports.equipo_rutas=equipo_rutas;