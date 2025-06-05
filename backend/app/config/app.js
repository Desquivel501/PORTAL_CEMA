const express = require('express')
const cors = require("cors");
const fileUpload = require('express-fileupload');
const {
  responseFormatter, 
  routeNotFound
} = require('../middlewares/apiFormatResponse')


class Server{
  constructor(){
    this.app = express()
    this.port = process.env.PORT || 3000;

    global.console_log = require("./helpers/console")._console_log;

    // this.server = require("http").createServer(this.app);  
  }

  databaseConnection(){

  }

  middleware(){
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(express.urlencoded({ limit: '50mb', extended: true }));    
    this.app.use(fileUpload());
    this.app.use(responseFormatter);
  }
  
  routes(){
    global.route = require("express").Router();;   
    this.app.use("/api", authenticateToken,[route]);
    RutasBase(route);
  }

  listen() {        
    this.server.on("uncaughtException", function (err) {
        console_log({ err });
    });

    this.server.listen(this.port, () => {
      console_log("Servidor corriendo en puerto", this.port);
    });
  } 

  middlewareErrores(){
    // Middleware  formato de respuesta depara rutas no encontradas
    this.app.use(routeNotFound);

    // Middleware para formato de respuesta de errores
    this.app.use(handleError);                
  }

}

// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

module.exports = app;