const express = require ("express")
const app = express();
const path = require ("path")

//ESTE USE ES PARA PODER VER LAS IMAGENES ESTATICAS DE CARPETAS.
app.use(express.static(path.join(__dirname, "public")));


//SE REQUIEREN LAS CONTANTES DE LAS RUTAS PARA PODER UTILIZARLAS.
const rutaIndex = require ("./routers/routerIndex.js")
const rutaAbout = require ("./routers/routerAbout.js")


//ACA UTILIZAMOS EL GET, PERO LLAMAMOS A LA VARIABLE DE LA RUTA ANTERIOIRMENTE
                        // CREADA.
app.get("/", rutaIndex) 
app.get("/about", rutaAbout)




app.listen (3000, () => console.log("Servidor Funcionando"));